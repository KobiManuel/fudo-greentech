import Link from "next/link";
import { Marquee } from "../ui/Marquee";

export function CTABanner() {
  return (
    <section className="overflow-hidden bg-lime py-6">
      <Marquee speed="fast" className="text-ink">
        {Array.from({ length: 8 }).map((_, i) => (
          <Link
            key={i}
            href="/contact"
            className="font-display flex shrink-0 items-center gap-10 text-3xl font-medium tracking-tight sm:text-4xl"
          >
            Let&rsquo;s Get Started
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-lime">
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 11L11 3M11 3H4.5M11 3V9.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        ))}
      </Marquee>
    </section>
  );
}
