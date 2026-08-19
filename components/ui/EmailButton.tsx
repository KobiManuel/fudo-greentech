"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/lib/site";

const SUBJECT = "Let's talk about a project";
const BODY =
  "Hi Fudo Greentech team,\n\nI'd like to talk about a project. Here's a bit about what I need:\n\n";

export function EmailButton() {
  const href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    SUBJECT
  )}&body=${encodeURIComponent(BODY)}`;

  return (
    <motion.a
      href={href}
      aria-label={`Email ${siteConfig.name}`}
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-lime shadow-xl shadow-ink/30"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-ink opacity-30" />
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        className="relative transition-transform duration-300 group-hover:-translate-y-0.5"
      >
        <path
          d="M3.5 6.5C3.5 5.67157 4.17157 5 5 5H19C19.8284 5 20.5 5.67157 20.5 6.5V17.5C20.5 18.3284 19.8284 19 19 19H5C4.17157 19 3.5 18.3284 3.5 17.5V6.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 7L11.1 12.4C11.6 12.8 12.4 12.8 12.9 12.4L19.5 7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.a>
  );
}
