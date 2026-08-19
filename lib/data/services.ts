export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  deliverables: string[];
  icon: "marketing" | "branding" | "software" | "gtm";
};

export const services: Service[] = [
  {
    slug: "software-development",
    name: "Software Development",
    shortName: "Software",
    tagline: "Products built to ship",
    description:
      "Web platforms, product engineering, and internal tooling built by people who also have to maintain it.",
    deliverables: [
      "Marketing sites & web platforms",
      "Product & app engineering",
      "Design systems & component libraries",
      "Performance & infrastructure audits",
    ],
    icon: "software",
  },
  {
    slug: "branding",
    name: "Branding",
    shortName: "Branding",
    tagline: "Identity that scales",
    description:
      "Positioning, identity systems, and design language that hold up from a favicon to a billboard.",
    deliverables: [
      "Brand strategy & positioning",
      "Visual identity & design systems",
      "Naming & verbal identity",
      "Brand guidelines & rollout kits",
    ],
    icon: "branding",
  },
  {
    slug: "marketing",
    name: "Marketing",
    shortName: "Marketing",
    tagline: "Demand that compounds",
    description:
      "SEO, paid media, content, and lifecycle marketing built to compound instead of resetting to zero every quarter.",
    deliverables: [
      "SEO & organic content engines",
      "Paid social & search media buying",
      "Email & lifecycle marketing",
      "Analytics & attribution setup",
    ],
    icon: "marketing",
  },
  {
    slug: "go-to-market",
    name: "Go-to-Market Strategy",
    shortName: "GTM Strategy",
    tagline: "Launches that land",
    description:
      "Channel strategy, positioning, and launch sequencing so the first ninety days aren't spent guessing.",
    deliverables: [
      "Market & competitive research",
      "Channel & pricing strategy",
      "Launch planning & sequencing",
      "Sales enablement & messaging",
    ],
    icon: "gtm",
  },
];
