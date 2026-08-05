"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { testimonials } from "@/lib/data/testimonials";

const backLayers = [
  { rotate: -10, translate: -18, bg: "bg-ink-soft" },
  { rotate: 8, translate: 14, bg: "bg-indigo-200" },
  { rotate: -5, translate: -8, bg: "bg-lime" },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const active = testimonials[index];

  return (
    <section className="bg-cream-dim/50 py-24">
      <Container className="flex flex-col items-center">
        <SectionHeading
          align="center"
          eyebrow="Client Feedback"
          title="Real People, Real Results Feedback"
          description="See what our clients are truly accomplishing, in their own words."
          className="mx-auto max-w-xl"
        />

        <div className="relative mt-16 flex h-[380px] w-full max-w-lg items-center justify-center sm:h-[340px]">
          {backLayers.map((layer, i) => (
            <div
              key={i}
              style={{
                transform: `rotate(${layer.rotate}deg) translateX(${layer.translate}px)`,
              }}
              className={clsx(
                "absolute inset-x-4 top-2 h-[300px] rounded-[1.75rem] shadow-xl sm:h-[280px]",
                layer.bg
              )}
            />
          ))}

          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, y: 24, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: -24, rotate: 3 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-[300px] w-full flex-col justify-between rounded-[1.75rem] border border-ink/10 bg-white p-8 shadow-2xl sm:h-[280px]"
            >
              <svg width="28" height="22" viewBox="0 0 28 22" fill="none" className="text-brand-400">
                <path
                  d="M0 22V13.2C0 8.8 1.2 5.2 3.6 2.4C6 -0.4 9.2 -0.2 13.2 3L10.4 8.2C8.4 8.4 7 9.2 6.2 10.6C5.4 12 5.2 13.4 5.6 14.8H12V22H0ZM15.2 22V13.2C15.2 8.8 16.4 5.2 18.8 2.4C21.2 -0.4 24.4 -0.2 28.4 3L25.6 8.2C23.6 8.4 22.2 9.2 21.4 10.6C20.6 12 20.4 13.4 20.8 14.8H27.2V22H15.2Z"
                  fill="currentColor"
                />
              </svg>
              <p className="font-display text-lg leading-snug tracking-tight text-ink/85">
                {active.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image src={active.image} alt={active.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{active.name}</p>
                  <p className="text-xs text-ink/50">
                    {active.role}, {active.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${t.name}`}
              className={clsx(
                "h-2 rounded-full transition-all duration-300",
                i === index ? "w-7 bg-brand-500" : "w-2 bg-ink/15"
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
