import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CaseStudiesGrid } from "@/components/sections/CaseStudiesGrid";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies across brand identity, performance marketing, product engineering, and full-service launches.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Real brands, real numbers."
        description="A sample of engagements where marketing, brand, product, and go-to-market strategy moved together instead of in sequence."
      />
      <CaseStudiesGrid showHeading={false} />
      <CTABanner />
    </>
  );
}
