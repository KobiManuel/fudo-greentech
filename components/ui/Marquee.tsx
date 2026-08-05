import { ReactNode } from "react";
import clsx from "clsx";

export function Marquee({
  children,
  className,
  speed = "normal",
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  speed?: "normal" | "fast";
  reverse?: boolean;
}) {
  return (
    <div className={clsx("relative flex overflow-hidden mask-fade-x", className)}>
      <div
        className={clsx(
          "flex shrink-0 items-center gap-10 pr-10",
          speed === "fast" ? "animate-marquee-fast" : "animate-marquee",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden
        className={clsx(
          "flex shrink-0 items-center gap-10 pr-10",
          speed === "fast" ? "animate-marquee-fast" : "animate-marquee",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
