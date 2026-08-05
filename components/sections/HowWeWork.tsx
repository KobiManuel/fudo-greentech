import Image from "next/image";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "../ui/Reveal";

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "We audit your funnel, brand, and product before we recommend a single deliverable.",
  },
  {
    n: "02",
    title: "Design",
    body: "Strategy becomes identity, messaging, and interface, reviewed together, not in silos.",
  },
  {
    n: "03",
    title: "Build",
    body: "Campaigns launch, product ships, and the brand system holds under real usage.",
  },
  {
    n: "04",
    title: "Grow",
    body: "We stay embedded, reporting on pipeline and retention, not just impressions.",
  },
];

export function HowWeWork() {
  return (
    <section className="py-24">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="How We Work"
            title="One embedded pod, from strategy to shipped work."
            description="No handoffs between departments that have never spoken. Your strategist, designer, and builder sit in the same room from kickoff to launch."
          />

          <RevealGroup className="mt-10 flex flex-col divide-y divide-ink/10 border-t border-ink/10">
            {steps.map((step) => (
              <RevealItem key={step.n} className="flex gap-6 py-6">
                <span className="font-display text-sm text-brand-500">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/55">
                    {step.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.1} className="flex flex-col gap-5">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-4xl bg-ink">
            <Image
              src="/images/perfect-crops/2705.png"
              alt="The Fudo Greentech team in a working session"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
          </div>
          <div className="flex items-center gap-5 rounded-2xl border border-ink/10 bg-white p-6">
            <p className="font-display shrink-0 text-4xl font-semibold text-brand-500">
              96%
            </p>
            <p className="text-sm leading-relaxed text-ink/55">
              of clients extend past their first engagement with a second
              service track.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
