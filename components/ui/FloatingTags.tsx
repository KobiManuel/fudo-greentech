"use client";

import { motion } from "motion/react";

export function FloatingTags({
  tags,
}: {
  tags: { label: string; bg: string; rotate: string }[];
}) {
  return (
    <div className="relative flex flex-wrap items-center justify-center gap-3 px-4 py-6">
      {tags.map((tag, i) => (
        <motion.span
          key={tag.label}
          className={`${tag.bg} ${tag.rotate} rounded-full px-5 py-2.5 text-sm font-medium shadow-lg shadow-black/20`}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 2.4 + (i % 4) * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.15,
          }}
        >
          {tag.label}
        </motion.span>
      ))}
    </div>
  );
}
