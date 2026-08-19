"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import clsx from "clsx";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { caseStudies, CaseStudyCategory } from "@/lib/data/caseStudies";
import { services } from "@/lib/data/services";

type FilterValue = CaseStudyCategory | "all";

const filters: { value: FilterValue; label: string }[] = [
  ...services.map((s) => ({ value: s.slug as FilterValue, label: s.shortName })),
  { value: "all", label: "All" },
];

export function CaseStudiesGrid({
  limit,
  showHeading = true,
  showCta = true,
  showFilters = true,
}: {
  limit?: number;
  showHeading?: boolean;
  showCta?: boolean;
  showFilters?: boolean;
}) {
  const [active, setActive] = useState<FilterValue>("software-development");

  const filtered =
    active === "all" ? caseStudies : caseStudies.filter((c) => c.category === active);
  const items = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section className="py-24">
      <Container>
        {showHeading && (
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Selected Work"
              title="Brands we've grown from the ground up."
              description="A sample of engagements across software, brand identity, and go-to-market work."
            />
            {showCta && (
              <Button href="/work" variant="outline">
                All Case Studies
              </Button>
            )}
          </div>
        )}

        {showFilters && (
          <div
            className={clsx(
              "flex flex-wrap gap-2",
              showHeading ? "mt-10" : ""
            )}
          >
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={clsx(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300",
                  active === f.value
                    ? "border-ink bg-ink text-cream"
                    : "border-ink/15 text-ink/60 hover:border-ink/40"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}

        {items.length === 0 ? (
          <p className="mt-14 text-sm text-ink/50">
            More case studies in this track are on the way. Check back soon,
            or explore another category above.
          </p>
        ) : (
          <motion.div
            layout
            className={clsx(
              "grid gap-x-6 gap-y-12 sm:grid-cols-2",
              showHeading || showFilters ? "mt-14" : ""
            )}
          >
            {items.map((cs, i) => (
              <motion.div
                key={cs.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={`/work/${cs.slug}`} className="group block">
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-forest">
                    <Image
                      src={cs.image}
                      alt={cs.imageAlt}
                      fill
                      className="object-cover transition-all duration-500 ease-out group-hover:scale-[1.05] group-hover:opacity-0"
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                    <Image
                      src={cs.hoverImage}
                      alt=""
                      aria-hidden
                      fill
                      className="object-cover opacity-0 transition-all duration-500 ease-out group-hover:scale-[1.05] group-hover:opacity-100"
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-medium tracking-tight">
                        {cs.name}
                      </h3>
                      <p className="mt-1 text-sm text-ink/50">{cs.service}</p>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition-colors duration-300 group-hover:border-brand-400 group-hover:bg-brand-50 group-hover:text-brand-600">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M3 11L11 3M11 3H4.5M11 3V9.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </Container>
    </section>
  );
}
