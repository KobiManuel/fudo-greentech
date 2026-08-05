import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { InsightsGrid } from "@/components/sections/InsightsGrid";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Strategy notes on marketing, brand systems, product engineering, and go-to-market from the Fudo Greentech team.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Market insights and our strategy."
        description="Notes from inside client engagements: what worked, what didn't, and why the obvious answer was usually wrong."
      />
      <InsightsGrid />
      <CTABanner />
    </>
  );
}
