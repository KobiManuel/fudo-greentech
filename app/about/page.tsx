import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { Stats } from "@/components/sections/Stats";
import { CTABanner } from "@/components/sections/CTABanner";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Fudo Greentech is a full-service growth partner handling marketing, branding, software development, and go-to-market strategy end to end.",
};

const values = [
  {
    title: "Rooted in the funnel",
    body: "We don't recommend a channel until we understand where your funnel is actually leaking. Every deliverable traces back to a number that matters.",
  },
  {
    title: "One pod, not four vendors",
    body: "Your strategist, designer, and engineer share a Slack channel with you, not a status report written by someone else.",
  },
  {
    title: "Built to be maintained",
    body: "Brand systems, codebases, and campaigns are handed off documented and operable, not dependent on us forever.",
  },
  {
    title: "Compounding over campaigns",
    body: "We're judged on pipeline and retention months later, not on a single launch week spike.",
  },
];

const cultureImages = [
  { src: "/images/crops/friends-yellow.jpg", alt: "Team celebrating a launch" },
  {
    src: "/images/crops/blob-pink-shine.jpg",
    alt: "Team members collaborating",
  },
  { src: "/images/crops/friends-purple.jpg", alt: "Team offsite" },
  {
    src: "/images/crops/blob-orange-man.jpg",
    alt: "Strategist reviewing work",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Fudo Greentech"
        title="A growth partner built like an in-house team."
        description="We started Fudo Greentech because brands kept telling us the same thing: their agency, their branding studio, and their dev shop had never once spoken to each other."
      />

      <section className="pb-24">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-4xl bg-forest">
              <Image
                src="/images/perfect-crops/2705.png"
                alt="Fudo Greentech team in a strategy session"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 560px, 100vw"
              />
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Our Story"
              title="Founded on a simple frustration."
              description="Nine years ago, our founders were freelancers passed between a marketing agency, a branding studio, and a dev shop on the same client project, watching each one solve for their own deliverable instead of the client's outcome. Fudo Greentech exists to close that gap: one team accountable for the whole growth stack, from the first line of brand strategy to the code that ships it."
            />
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <SectionHeading
            eyebrow="What We Believe"
            title="Principles that shape every engagement."
            align="center"
            className="mx-auto max-w-2xl"
          />
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <RevealItem
                key={v.title}
                className="rounded-3xl border border-ink/10 bg-white p-8"
              >
                <span className="font-display text-sm text-brand-500">
                  0{i + 1}
                </span>
                <h3 className="font-display mt-4 text-xl font-medium">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">
                  {v.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <SectionHeading
            eyebrow="Culture"
            title="A team that actually likes the work."
            description="Small enough that you know everyone on your pod by name, big enough to cover every discipline your roadmap needs."
          />
          <RevealGroup className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {cultureImages.map((img) => (
              <RevealItem
                key={img.src}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-forest"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(min-width: 1024px) 280px, 50vw"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <Stats />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
