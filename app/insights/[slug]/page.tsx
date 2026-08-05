import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { insights, getInsight } from "@/lib/data/insights";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();

  const more = insights.filter((i) => i.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="pt-14 pb-10 sm:pt-20">
        <Container className="max-w-3xl">
          <Reveal>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm text-ink/55 hover:text-brand-600"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M11 7H3M3 7L6.5 3.5M3 7L6.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All Insights
            </Link>
          </Reveal>

          <Reveal delay={0.06} className="mt-8">
            <Eyebrow>{post.category}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display mt-5 text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.16} className="mt-6 flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image src={post.authorImage} alt={post.author} fill className="object-cover" />
            </div>
            <div className="text-sm">
              <p className="font-medium">{post.author}</p>
              <p className="text-ink/45">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}{" "}
                · {post.readTime}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <Reveal delay={0.1}>
        <Container className="max-w-4xl">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] bg-forest">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 900px, 100vw"
            />
          </div>
        </Container>
      </Reveal>

      <section className="py-16">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-6">
            {post.content.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink/70">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {more.length > 0 && (
        <section className="pb-20">
          <Container>
            <h2 className="font-display text-2xl font-medium tracking-tight">
              More insights
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {more.map((m) => (
                <Link key={m.slug} href={`/insights/${m.slug}`} className="group block">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-forest">
                    <Image
                      src={m.image}
                      alt={m.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 640px) 33vw, 100vw"
                    />
                  </div>
                  <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-brand-500">
                    {m.category}
                  </span>
                  <h3 className="font-display mt-1.5 text-base font-medium leading-snug tracking-tight group-hover:text-brand-600">
                    {m.title}
                  </h3>
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
