import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { insights } from "@/lib/data/insights";

export function InsightsSection({ limit = 3 }: { limit?: number }) {
  const items = insights.slice(0, limit);

  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Insights"
            title="Market insights and our strategy."
          />
          <Button href="/insights" variant="outline">
            All Insights
          </Button>
        </div>

        <RevealGroup className="mt-14 grid gap-8 md:grid-cols-3">
          {items.map((post) => (
            <RevealItem key={post.slug}>
              <Link href={`/insights/${post.slug}`} className="group block">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-forest">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    sizes="(min-width: 768px) 400px, 100vw"
                  />
                </div>
                <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-wider text-brand-500">
                  {post.category}
                </span>
                <h3 className="font-display mt-2 text-lg font-medium leading-snug tracking-tight transition-colors group-hover:text-brand-600">
                  {post.title}
                </h3>
                <div className="mt-4 flex items-center gap-2 text-xs text-ink/45">
                  <span>{post.author}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
