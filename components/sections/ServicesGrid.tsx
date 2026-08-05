import Link from "next/link";
import Image from "next/image";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { services } from "@/lib/data/services";
import { ServiceIcon } from "../ui/ServiceIcon";

const cardImages: Record<string, string> = {
  marketing: "/images/crops/dial-graphic.jpg",
  branding: "/images/crops/metallic-cube-podium.jpg",
  "software-development": "/images/perfect-crops/2703.png",
  "go-to-market": "/images/crops/button-hand.jpg",
};

export function ServicesGrid() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Four disciplines. One team, one roadmap."
          description="Most agencies hand you off between departments. We run marketing, brand, product, and launch strategy as a single engagement so nothing gets lost in translation."
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2">
          {services.map((service, i) => (
            <RevealItem key={service.slug}>
              <Link
                href={`/services#${service.slug}`}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-ink/10 bg-white p-8 transition-colors duration-300 hover:border-brand-400/50"
              >
                <div className="pointer-events-none absolute inset-0">
                  <Image
                    src={cardImages[service.slug]}
                    alt=""
                    fill
                    className="object-cover opacity-[0.5] grayscale transition-opacity duration-500 group-hover:opacity-[0.12]"
                    sizes="480px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-white/40" />
                </div>

                <div className="relative flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-lime group-hover:text-ink">
                    <ServiceIcon icon={service.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-display text-sm text-ink/30">
                    0{i + 1}
                  </span>
                </div>

                <div className="relative mt-10">
                  <h3 className="font-display text-2xl font-medium tracking-tight">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-brand-600 text-sm font-medium">
                    {service.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/55">
                    {service.description}
                  </p>
                </div>

                <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink/70 transition-colors group-hover:text-brand-600">
                  Learn more
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
