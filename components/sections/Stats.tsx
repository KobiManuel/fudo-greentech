import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { RevealGroup, RevealItem, Reveal } from "../ui/Reveal";
import { StatCounter } from "../ui/StatCounter";
import { FloatingTags } from "../ui/FloatingTags";

const tags = [
  { label: "Full-Service Agency", bg: "bg-white text-ink", rotate: "-rotate-6" },
  { label: "Results-Driven", bg: "bg-lime text-ink", rotate: "rotate-3" },
  { label: "Root-to-Market", bg: "bg-orange-400 text-ink", rotate: "-rotate-2" },
  { label: "Strategy-Led", bg: "bg-white text-ink", rotate: "rotate-2" },
  { label: "Cross-Disciplinary", bg: "bg-ink-soft text-cream", rotate: "-rotate-3" },
  { label: "Growth-Minded", bg: "bg-lime text-ink", rotate: "rotate-6" },
  { label: "Outcome Oriented", bg: "bg-indigo-300 text-ink", rotate: "-rotate-4" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-ink pt-24 pb-12 text-cream">
      <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-brand-500/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-lime/10 blur-[110px]" />

      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <Reveal>
            <h2 className="font-display max-w-md text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl">
              The Numbers Behind Success
            </h2>
          </Reveal>
          <div className="flex max-w-xs flex-col items-start gap-4 sm:items-end sm:text-right">
            <Reveal delay={0.08}>
              <p className="text-sm text-cream/55">
                Strategy, creativity, and engineering power every brand we build.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <Button href="/work" variant="outline" className="border-cream/25 text-cream hover:border-lime hover:text-lime">
                See Our Work
              </Button>
            </Reveal>
          </div>
        </div>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-3">
          <RevealItem className="rounded-[1.75rem] bg-lime p-8 text-ink">
            <p className="font-display flex items-start gap-1 text-5xl font-semibold">
              <StatCounter value="140+" />
              <span className="mt-1 text-lg font-medium">Brands</span>
            </p>
            <p className="mt-6 max-w-[22ch] text-sm leading-relaxed text-ink/70">
              Full-stack engagements shaped around your growth stage and
              budget, not a fixed retainer template.
            </p>
          </RevealItem>

          <RevealItem className="rounded-[1.75rem] bg-cream p-8 text-ink">
            <p className="font-display flex items-start gap-1 text-5xl font-semibold">
              <StatCounter value="96" />
              <span className="mt-1 text-lg font-medium">%</span>
            </p>
            <p className="mt-6 max-w-[22ch] text-sm leading-relaxed text-ink/60">
              Client retention past the first engagement. Our clearest
              signal that the work compounds.
            </p>
          </RevealItem>

          <RevealItem className="rounded-[1.75rem] bg-ink-soft p-8">
            <p className="font-display flex items-start gap-1 text-5xl font-semibold">
              <StatCounter value="9" />
              <span className="mt-1 text-lg font-medium">yrs</span>
            </p>
            <p className="mt-6 max-w-[22ch] text-sm leading-relaxed text-cream/55">
              Compounding experience across marketing, brand, and product
              engineering.
            </p>
          </RevealItem>
        </RevealGroup>

        <div className="relative mt-4">
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-56 w-[560px] -translate-x-1/2 rounded-full bg-lime/20 blur-[90px]" />
          <FloatingTags tags={tags} />
        </div>
      </Container>
    </section>
  );
}
