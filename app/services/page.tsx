import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { CaseStudiesGrid } from "@/components/sections/CaseStudiesGrid";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software development, branding, marketing, and go-to-market strategy, run as one engagement, not four separate vendors.",
};

const serviceImages: Record<string, string> = {
  marketing: "/images/crops/dial-graphic.jpg",
  branding: "/images/crops/metallic-cube-podium.jpg",
  "software-development": "/images/perfect-crops/2703.png",
  "go-to-market": "/images/crops/button-hand.jpg",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Four disciplines. One accountable team."
        description="Pick one track to start, or bring us in end to end. Either way, the same pod carries context across every discipline your brand needs."
      />

      <section className="pb-8">
        {services.map((service, i) => (
          <div
            key={service.slug}
            id={service.slug}
            className="scroll-mt-24 border-t border-ink/10 py-20 first:border-t-0"
          >
            <Container
              className={`grid gap-14 lg:grid-cols-2 lg:items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal className="relative">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-forest">
                  <Image
                    src={serviceImages[service.slug]}
                    alt={service.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 560px, 100vw"
                  />
                </div>
              </Reveal>

              <div>
                <Reveal>
                  <Eyebrow>0{i + 1} · {service.tagline}</Eyebrow>
                </Reveal>
                <Reveal delay={0.06}>
                  <h2 className="font-display mt-5 text-3xl font-medium tracking-tight sm:text-4xl">
                    {service.name}
                  </h2>
                </Reveal>
                <Reveal delay={0.12}>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/60">
                    {service.description}
                  </p>
                </Reveal>

                <RevealGroup className="mt-8 grid gap-3 sm:grid-cols-2">
                  {service.deliverables.map((d) => (
                    <RevealItem
                      key={d}
                      className="flex items-start gap-2.5 text-sm text-ink/75"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                        <ServiceIcon icon={service.icon} className="h-3 w-3" />
                      </span>
                      {d}
                    </RevealItem>
                  ))}
                </RevealGroup>

                <Reveal delay={0.2} className="mt-9">
                  <Button href="/contact">Start with {service.shortName}</Button>
                </Reveal>
              </div>
            </Container>
          </div>
        ))}
      </section>

      <CaseStudiesGrid limit={4} />
      <CTABanner />
    </>
  );
}
