export type CaseStudyCategory =
  | "software-development"
  | "branding"
  | "marketing"
  | "go-to-market";

export type CaseStudy = {
  slug: string;
  name: string;
  industry: string;
  service: string;
  category: CaseStudyCategory;
  year: string;
  image: string;
  hoverImage: string;
  imageAlt: string;
  tint: "green" | "lime" | "dark" | "cream";
  excerpt: string;
  challenge: string;
  approach: string[];
  results: { label: string; value: string }[];
};

const SERVICE_TAG = "Brand Identity & Software Development";

export const caseStudies: CaseStudy[] = [
  {
    slug: "naya",
    name: "NAYA",
    industry: "Beauty & Skincare",
    service: SERVICE_TAG,
    category: "software-development",
    year: "2025",
    image: "/images/brands/naya-primary.jpg",
    hoverImage: "/images/brands/naya-secondary.jpg",
    imageAlt: "NAYA botanical skincare product and packaging photography",
    tint: "cream",
    excerpt:
      "A botanical skincare label that needed a mark and a storefront as refined as the product inside the jar.",
    challenge:
      "NAYA had a genuinely premium formula, but early packaging and web presence read closer to a farmers-market stall than a shelf-ready beauty brand.",
    approach: [
      "Designed a gold interlocking wordmark and a 'Radiance. Refined. Real.' positioning line",
      "Built out packaging, bags, and print collateral around a warm, botanical palette",
      "Shipped an e-commerce storefront built to convert on product photography, not discounts",
    ],
    results: [
      { label: "Brand perception lift", value: "+58%" },
      { label: "Store conversion rate", value: "+34%" },
      { label: "Time to launch", value: "8 weeks" },
    ],
  },
  {
    slug: "intwit",
    name: "Intwit",
    industry: "Dating App",
    service: SERVICE_TAG,
    category: "software-development",
    year: "2025",
    image: "/images/brands/intwit-primary.jpg",
    hoverImage: "/images/brands/intwit-secondary.jpg",
    imageAlt: "Intwit dating app brand identity and merchandise photography",
    tint: "lime",
    excerpt:
      "A dating app for singles that needed to feel warm and playful in a category dominated by cold, swipe-first UI.",
    challenge:
      "Intwit's product was ready, but every early brand direction looked like a generic dating app template. Nothing signaled the lighter, more human tone the founders wanted.",
    approach: [
      "Designed a hand-drawn doodle system and a friendly wordmark that scales from app icon to merch",
      "Built the onboarding and matching flow around approachable, low-pressure interactions",
      "Extended the identity across launch merch and social content templates",
    ],
    results: [
      { label: "App store rating", value: "4.7 / 5" },
      { label: "Onboarding completion", value: "+41%" },
      { label: "Waitlist to signup", value: "62%" },
    ],
  },
  {
    slug: "play-more-football-academy",
    name: "Play More Football Academy",
    industry: "Youth Sports",
    service: SERVICE_TAG,
    category: "software-development",
    year: "2024",
    image: "/images/brands/pmf-primary.jpg",
    hoverImage: "/images/brands/pmf-secondary.jpg",
    imageAlt: "Play More Football Academy brand identity and team kit photography",
    tint: "dark",
    excerpt:
      "A youth football academy that needed a crest and a program identity parents would trust with their kids.",
    challenge:
      "PMF's coaching program was strong, but with no consistent brand, registration pages and kit orders looked improvised season to season.",
    approach: [
      "Designed the PMF crest and a black-and-gold kit system built to hold up on and off the pitch",
      "Wrote the 'Developing Players. Building Character. Creating Opportunities.' program pillars",
      "Built a registration site and booking flow parents could trust with one click",
    ],
    results: [
      { label: "Season enrollment", value: "+72%" },
      { label: "Kit & merch orders", value: "+3.1x" },
      { label: "Program launch", value: "2024" },
    ],
  },
  {
    slug: "afrocarb",
    name: "Afrocarb",
    industry: "Climate Fintech",
    service: SERVICE_TAG,
    category: "marketing",
    year: "2025",
    image: "/images/brands/afrocarb-primary.jpg",
    hoverImage: "/images/brands/afrocarb-secondary.jpg",
    imageAlt: "Afrocarb climate fintech brand identity and merchandise photography",
    tint: "green",
    excerpt:
      "A carbon credit marketplace that needed to make climate finance feel legible to a first-time buyer.",
    challenge:
      "Afrocarb's marketplace let businesses offset emissions in a few clicks, but the brand and product language still read like a spreadsheet built for carbon auditors, not a first-time buyer.",
    approach: [
      "Designed a three-mark identity system representing origin, verification, and offset",
      "Built the live marketplace UI around plain-language listings instead of registry jargon",
      "Shipped onboarding content that explains carbon credits in under two minutes",
    ],
    results: [
      { label: "Marketplace signups", value: "+164%" },
      { label: "Checkout completion", value: "+47%" },
      { label: "Credits listed at launch", value: "12,000+" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
