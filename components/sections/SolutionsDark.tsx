import Image from "next/image";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { services } from "@/lib/data/services";
import { ServiceIcon } from "../ui/ServiceIcon";

const rotations = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3"];

export function SolutionsDark() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream">
      <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen">
        <Image
          src="/images/perfect-crops/2705.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />

      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Solutions"
            title={<span className="text-cream">Tailored tracks for wherever you're growing from.</span>}
          />
          <Button href="/services" variant="outline" className="border-cream/25 text-cream hover:border-lime hover:text-lime">
            Our Services
          </Button>
        </div>

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <RevealItem
              key={service.slug}
              className={`rounded-3xl border border-cream/10 bg-cream/[0.04] p-6 backdrop-blur-sm transition-transform duration-500 hover:rotate-0 hover:bg-cream/[0.07] ${rotations[i % rotations.length]}`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime text-ink">
                <ServiceIcon icon={service.icon} className="h-5 w-5" />
              </span>
              <h3 className="font-display mt-6 text-xl font-medium">
                {service.shortName}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/55">
                {service.tagline}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
