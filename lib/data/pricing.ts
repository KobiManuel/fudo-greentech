export type PricingTier = {
  name: string;
  price: string;
  period: string;
  description: string;
  featured?: boolean;
  features: string[];
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Sprout",
    price: "$1,450",
    period: "/month",
    description: "For early-stage brands validating channels before they scale spend.",
    features: [
      "1 core service track",
      "SEO or paid media, not both",
      "Monthly strategy call",
      "Shared design & dev resourcing",
      "Async reporting dashboard",
    ],
  },
  {
    name: "Grove",
    price: "$3,900",
    period: "/month",
    description: "Full-service marketing and brand support for teams ready to compound growth.",
    featured: true,
    features: [
      "Marketing + branding tracks",
      "Dedicated pod (strategist, designer, media buyer)",
      "Bi-weekly strategy sprints",
      "Quarterly brand & funnel audits",
      "Priority creative turnaround",
    ],
  },
  {
    name: "Canopy",
    price: "Custom",
    period: "engagement",
    description: "End-to-end partner across marketing, brand, product, and go-to-market.",
    features: [
      "All four service tracks",
      "Embedded pod incl. engineering",
      "Executive-level GTM planning",
      "Dedicated account director",
      "Custom SLAs & reporting",
    ],
  },
];
