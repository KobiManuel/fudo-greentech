import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Engagements built around momentum, not hours. Sprout, Grove, and Canopy tiers for teams at every stage.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple tiers. Serious accountability."
        description="No hourly billing surprises. Every tier includes a dedicated pod and a fixed monthly scope you can plan around."
      />
      <PricingSection />
      <FAQSection />
      <CTABanner />
    </>
  );
}
