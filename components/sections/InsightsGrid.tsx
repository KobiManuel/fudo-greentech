"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import clsx from "clsx";
import { Container } from "../ui/Container";
import { insights } from "@/lib/data/insights";

export function InsightsGrid() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(insights.map((i) => i.category)))],
    []
  );
  const [active, setActive] = useState("All");
  const items = insights.filter(
    (i) => active === "All" || i.category === active
  );

  return (
    <section className="pb-24">
      <Container>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={clsx(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300",
                active === cat
                  ? "border-ink bg-ink text-cream"
                  : "border-ink/15 text-ink/60 hover:border-ink/40"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((post) => (
            <motion.div
              key={post.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/insights/${post.slug}`} className="group block">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-forest">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"
                  />
                </div>
                <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-wider text-brand-500">
                  {post.category}
                </span>
                <h3 className="font-display mt-2 text-lg font-medium leading-snug tracking-tight transition-colors group-hover:text-brand-600">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-ink/45">
                  <span>{post.author}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
