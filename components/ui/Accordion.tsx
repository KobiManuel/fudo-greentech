"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";

export function Accordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-current/10 border-t border-b border-current/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-lg font-medium">{item.question}</span>
              <span
                className={clsx(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-current/20 text-lg transition-transform duration-300",
                  isOpen && "rotate-45 bg-lime text-ink border-lime"
                )}
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 max-w-2xl text-current/65 leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
