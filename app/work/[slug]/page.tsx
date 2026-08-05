import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Tag } from "@/components/ui/Tag";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";
import { caseStudies, getCaseStudy } from "@/lib/data/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: cs.name,
    description: cs.excerpt,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const related = caseStudies
    .filter((c) => c.slug !== cs.slug)
    .slice(0, 2);

  return (
    <>
      <section className="pt-14 pb-10 sm:pt-20">
        <Container>
          <Reveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-ink/55 hover:text-brand-600"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M11 7H3M3 7L6.5 3.5M3 7L6.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All Case Studies
            </Link>
          </Reveal>

          <div className="mt-8 flex flex-col gap-6">
            <Reveal>
              <Eyebrow>
                {cs.industry} · {cs.service} · {cs.year}
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="font-display max-w-3xl text-4xl font-medium tracking-tight sm:text-6xl">
                {cs.name}
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="max-w-xl text-lg leading-relaxed text-ink/60">
                {cs.excerpt}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <Reveal delay={0.1}>
        <Container>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] bg-forest sm:aspect-[21/9]">
            <Image
              src={cs.image}
              alt={cs.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1280px) 1180px, 100vw"
            />
          </div>
        </Container>
      </Reveal>

      <section className="py-20">
        <Container className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="font-display text-2xl font-medium tracking-tight">
                The Challenge
              </h2>
              <p className="mt-4 leading-relaxed text-ink/65">{cs.challenge}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-medium tracking-tight">
                Our Approach
              </h2>
              <ul className="mt-4 flex flex-col gap-3.5">
                {cs.approach.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-ink/70">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-semibold text-brand-600">
                      →
                    </span>
                    <span className="leading-relaxed">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Tag className="w-fit">Results</Tag>
            <RevealGroup className="flex flex-col gap-4">
              {cs.results.map((r) => (
                <RevealItem
                  key={r.label}
                  className="rounded-2xl border border-ink/10 bg-white p-6"
                >
                  <p className="font-display text-3xl font-semibold text-brand-600">
                    {r.value}
                  </p>
                  <p className="mt-1 text-sm text-ink/55">{r.label}</p>
                </RevealItem>
              ))}
            </RevealGroup>
            <Button href="/contact" className="mt-2 w-full justify-center">
              Start a Similar Project
            </Button>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="pb-20">
          <Container>
            <h2 className="font-display text-2xl font-medium tracking-tight">
              More work
            </h2>
            <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2">
              {related.map((r) => (
                <Link key={r.slug} href={`/work/${r.slug}`} className="group block">
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-forest">
                    <Image
                      src={r.image}
                      alt={r.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 640px) 500px, 100vw"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-medium tracking-tight">
                        {r.name}
                      </h3>
                      <p className="mt-1 text-sm text-ink/50">{r.service}</p>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition-colors duration-300 group-hover:border-brand-400 group-hover:bg-brand-50 group-hover:text-brand-600">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTABanner />
    </>
  );
}
