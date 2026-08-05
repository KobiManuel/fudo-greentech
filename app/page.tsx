import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { CaseStudiesGrid } from "@/components/sections/CaseStudiesGrid";
import { SolutionsDark } from "@/components/sections/SolutionsDark";
import { Stats } from "@/components/sections/Stats";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { BrandBanner } from "@/components/sections/BrandBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ServicesGrid />
      <BrandBanner />
      <HowWeWork />
      <CaseStudiesGrid limit={4} />
      <SolutionsDark />
      <Stats />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <InsightsSection />
      <CTABanner />
    </>
  );
}
