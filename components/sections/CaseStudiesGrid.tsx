import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { caseStudies } from "@/lib/data/caseStudies";

export function CaseStudiesGrid({
  limit,
  showHeading = true,
  showCta = true,
}: {
  limit?: number;
  showHeading?: boolean;
  showCta?: boolean;
}) {
  const items = limit ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <section className="py-24">
      <Container>
        {showHeading && (
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Selected Work"
              title="Brands we've grown from the ground up."
              description="A sample of engagements across brand identity, performance marketing, product engineering, and full launches."
            />
            {showCta && (
              <Button href="/work" variant="outline">
                All Case Studies
              </Button>
            )}
          </div>
        )}

        <div
          className={
            (showHeading ? "mt-14 " : "") +
            "grid gap-x-6 gap-y-12 sm:grid-cols-2"
          }
        >
          {items.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 0.05}>
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
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
