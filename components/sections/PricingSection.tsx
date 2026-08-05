import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { pricingTiers } from "@/lib/data/pricing";
import clsx from "clsx";

export function PricingSection() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Pricing"
          title="Engagements built around momentum, not hours."
          description="Every tier gets a dedicated pod and direct access to your strategist. Move up as your roadmap expands."
          className="mx-auto max-w-2xl"
        />

        <RevealGroup className="mt-16 grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <RevealItem
              key={tier.name}
              className={clsx(
                "flex flex-col rounded-[1.75rem] border p-8",
                tier.featured
                  ? "border-transparent bg-ink text-cream shadow-2xl shadow-brand-900/20 lg:-translate-y-4"
                  : "border-ink/10 bg-white"
              )}
            >
              {tier.featured && (
                <span className="mb-5 inline-flex w-fit items-center rounded-full bg-lime px-3 py-1 text-xs font-semibold text-ink">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl font-medium">{tier.name}</h3>
              <p
                className={clsx(
                  "mt-2 text-sm leading-relaxed",
                  tier.featured ? "text-cream/60" : "text-ink/55"
                )}
              >
                {tier.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-4xl font-semibold">
                  {tier.price}
                </span>
                <span
                  className={clsx(
                    "text-sm",
                    tier.featured ? "text-cream/50" : "text-ink/45"
                  )}
                >
                  {tier.period}
                </span>
              </div>

              <ul className="mt-8 flex flex-1 flex-col gap-3.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={clsx(
                        "mt-0.5 shrink-0",
                        tier.featured ? "text-lime" : "text-brand-500"
                      )}
                    >
                      <path
                        d="M3.5 8.5 6.5 11.5 12.5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className={tier.featured ? "text-cream/85" : "text-ink/75"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                variant={tier.featured ? "primary" : "dark"}
                className="mt-9 w-full justify-center"
              >
                Get Started
              </Button>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
