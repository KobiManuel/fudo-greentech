export type CaseStudy = {
  slug: string;
  name: string;
  industry: string;
  service: string;
  year: string;
  image: string;
  imageAlt: string;
  tint: "green" | "lime" | "dark" | "cream";
  excerpt: string;
  challenge: string;
  approach: string[];
  results: { label: string; value: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "cointash",
    name: "Cointash",
    industry: "Fintech",
    service: "Brand Identity",
    year: "2023",
    image: "/images/perfect-crops/2706.png",
    imageAlt: "Cointash signage and brand mark on a concrete storefront",
    tint: "dark",
    excerpt:
      "A payments startup rebranding ahead of a Series A, moving from generic fintech blue to a mark investors remembered.",
    challenge:
      "Cointash's original identity was indistinguishable from a dozen other payment apps. The founders needed a system that could carry them from pitch deck to billboard.",
    approach: [
      "Designed a modular wordmark and diamond glyph that scales from favicon to signage",
      "Built a motion identity system for product demos and investor decks",
      "Delivered a full brand guideline shipped to their agency roster in 3 weeks",
    ],
    results: [
      { label: "Brand recall lift", value: "+64%" },
      { label: "Deck-to-meeting rate", value: "+41%" },
      { label: "Delivery time", value: "3 weeks" },
    ],
  },
  {
    slug: "hempto",
    name: "Hempto",
    industry: "Eco-Wellness",
    service: "SEO & Content",
    year: "2024",
    image: "/images/perfect-crops/2707.png",
    imageAlt: "Hempto tote bag product photography",
    tint: "green",
    excerpt:
      "A plant-based wellness label that needed to out-rank category giants without a paid media budget.",
    challenge:
      "Hempto launched with a beautiful product line and almost no organic visibility. Search traffic was flat, and every competitor with a bigger budget outranked them on the terms that mattered.",
    approach: [
      "Rebuilt the site's information architecture around buyer intent, not product SKUs",
      "Shipped a 40-article content engine covering ingredient science and sourcing transparency",
      "Landed backlinks from wellness press through a founder-led PR sprint",
    ],
    results: [
      { label: "Organic traffic", value: "+312%" },
      { label: "Page 1 keywords", value: "184" },
      { label: "Time to ROI", value: "5 months" },
    ],
  },
  {
    slug: "tandore-bank",
    name: "Tandore Bank",
    industry: "Banking",
    service: "Brand Identity",
    year: "2023",
    image: "/images/perfect-crops/2708.png",
    imageAlt: "Tandore Bank business card and stationery system",
    tint: "cream",
    excerpt:
      "A century-old regional bank needed a visual identity that felt trustworthy to retirees and relevant to first-time savers.",
    challenge:
      "Tandore's brand hadn't changed since 1994. Younger customers assumed it was a legacy institution not built for them, while the bank couldn't afford to alienate its core base.",
    approach: [
      "Kept the pine-tree mark rooted in heritage, redrew it for a modern, flat system",
      "Introduced a two-tone palette that works across print, branch signage, and app",
      "Piloted the new identity in 6 branches before a full rollout",
    ],
    results: [
      { label: "New account signups", value: "+28%" },
      { label: "App store rating", value: "4.8 / 5" },
      { label: "Branches rebranded", value: "42" },
    ],
  },
  {
    slug: "ikkari",
    name: "Ikkari",
    industry: "Skincare",
    service: "Media Marketing",
    year: "2024",
    image: "/images/perfect-crops/2709.png",
    imageAlt: "Ikkari skincare product line studio photography",
    tint: "cream",
    excerpt:
      "A clean-beauty skincare line ready to scale past its founder's personal Instagram following.",
    challenge:
      "Ikkari had a loyal cult following but no repeatable media engine. Every spike in sales traced back to one founder post, with nothing to sustain it in between.",
    approach: [
      "Built an always-on paid social engine tuned to skincare-specific creative formats",
      "Partnered with 30 micro-creators for authentic before/after content",
      "Layered retargeting across email, SMS, and paid to lift repeat purchase rate",
    ],
    results: [
      { label: "Revenue growth", value: "+215%" },
      { label: "Creator partners", value: "30" },
      { label: "Repeat purchase rate", value: "+38%" },
    ],
  },
  {
    slug: "prisma-analytics",
    name: "Prisma Analytics",
    industry: "SaaS / Data",
    service: "Product Engineering",
    year: "2024",
    image: "/images/perfect-crops/2703.png",
    imageAlt: "Prisma Analytics abstract dashboard visualization render",
    tint: "dark",
    excerpt:
      "A data-visualization startup whose prototype couldn't survive contact with enterprise-scale datasets.",
    challenge:
      "Prisma's demo impressed investors, but the underlying architecture buckled under real customer data volumes. Every pilot risked becoming a churn story.",
    approach: [
      "Re-platformed the rendering engine for streaming, million-row datasets",
      "Shipped a component library so the product team could ship features solo",
      "Instrumented the app end to end for performance budgets, not just uptime",
    ],
    results: [
      { label: "Dashboard load time", value: "-78%" },
      { label: "Enterprise pilots closed", value: "12" },
      { label: "Engineering velocity", value: "+2.4x" },
    ],
  },
  {
    slug: "waveform-audio",
    name: "Waveform Audio",
    industry: "Consumer Tech",
    service: "Go-to-Market Strategy",
    year: "2023",
    image: "/images/perfect-crops/2704.png",
    imageAlt: "Waveform Audio abstract sound wave visualization",
    tint: "dark",
    excerpt:
      "A spatial-audio hardware startup with a brilliant product and a launch date, but no channel strategy.",
    challenge:
      "Waveform had built something genuinely new, but 'spatial audio' meant nothing to a cold audience, and their launch window was closing fast.",
    approach: [
      "Mapped a three-tier GTM plan across DTC, retail, and creator seeding",
      "Repositioned the product around a single, provable claim: 'hear the room'",
      "Ran a 6-week pre-launch waitlist campaign ahead of the retail push",
    ],
    results: [
      { label: "Waitlist signups", value: "26,400" },
      { label: "Sell-through, week 1", value: "94%" },
      { label: "Retail doors at launch", value: "310" },
    ],
  },
  {
    slug: "monolith-studio",
    name: "Monolith Studio",
    industry: "Architecture & Design",
    service: "Brand & Web Platform",
    year: "2022",
    image: "/images/crops/metallic-cube-podium.jpg",
    imageAlt: "Monolith Studio minimalist product render",
    tint: "cream",
    excerpt:
      "An architecture studio whose portfolio site undersold the ambition of its built work.",
    challenge:
      "Monolith's projects were winning awards, but their website looked like a template. Prospective clients judged the studio's ambition by its weakest asset.",
    approach: [
      "Designed an editorial-grade site built around full-bleed project photography",
      "Built a lightweight CMS so the studio's team could publish new work same-day",
      "Paired the launch with a print monograph mailed to top-tier prospects",
    ],
    results: [
      { label: "Qualified inbound leads", value: "+96%" },
      { label: "Avg. session time", value: "4m 12s" },
      { label: "Press features", value: "9" },
    ],
  },
  {
    slug: "bloomly",
    name: "Bloomly",
    industry: "Social Growth App",
    service: "Full-Service Launch",
    year: "2024",
    image: "/images/crops/blob-green-phone.jpg",
    imageAlt: "Bloomly app user photographed against a mint backdrop",
    tint: "lime",
    excerpt:
      "A social growth app that needed brand, product, and go-to-market built in parallel on a six-month runway.",
    challenge:
      "Bloomly's founders had funding and a launch deadline, but no brand, no app shell, and no channel plan. Everything had to move in parallel, not sequence.",
    approach: [
      "Ran brand, product design, and engineering as one embedded pod",
      "Designed the onboarding flow around a single 'first win' moment",
      "Seeded launch through 40 creator partnerships timed to app store release",
    ],
    results: [
      { label: "Day-1 downloads", value: "18,000+" },
      { label: "D7 retention", value: "47%" },
      { label: "Time to launch", value: "6 months" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
