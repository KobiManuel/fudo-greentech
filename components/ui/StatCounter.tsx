"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

export function StatCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const numeric = match ? parseFloat(match[2].replace(/,/g, "")) : 0;
  const suffix = match?.[3] ?? "";
  const decimals = match?.[2].includes(".") ? match[2].split(".")[1].length : 0;

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1600, bounce: 0 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) motionValue.set(numeric);
  }, [inView, numeric, motionValue]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      setDisplay(
        decimals > 0
          ? v.toFixed(decimals)
          : Math.round(v).toLocaleString("en-US")
      );
    });
    return unsub;
  }, [spring, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
