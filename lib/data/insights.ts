export type Insight = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  authorImage: string;
  image: string;
  content: string[];
};

export const insights: Insight[] = [
  {
    slug: "vanity-metrics-hidden-cost",
    title: "Why Focusing on Vanity Metrics Is the Hidden Cost",
    category: "Strategy",
    excerpt:
      "Follower counts and impressions feel good in a slide deck. Here's what they quietly cost you in the pipeline.",
    date: "2026-06-02",
    readTime: "6 min read",
    author: "Amina Yusuf",
    authorImage: "/images/crops/orange-portrait.jpg",
    image: "/images/crops/blob-purple-chart.jpg",
    content: [
      "Every quarterly review, someone puts a slide up with a follower count that's up and to the right. It feels like progress. It rarely is.",
      "Vanity metrics are seductive because they're easy to move and easy to report. Impressions, followers, and pageviews respond to budget, not to fit. You can buy all three without buying a single qualified lead.",
      "The teams that compound growth over years, not quarters, report on a different stack: pipeline sourced, cost per qualified lead, and retention by acquisition channel. Those numbers are harder to move and much harder to fake.",
      "The fix isn't to stop tracking reach entirely. Reach is context you still need. The fix is refusing to let reach be the headline metric in any review that decides budget.",
    ],
  },
  {
    slug: "hyper-accurate-lookalike-audiences",
    title: "Build Hyper-Accurate Lookalike Audiences That Convert",
    category: "Media Buying",
    excerpt:
      "Most lookalike audiences are built on the wrong seed data. Here's how we rebuild them from the ground up.",
    date: "2026-05-14",
    readTime: "8 min read",
    author: "Priya Shah",
    authorImage: "/images/crops/video-quote-thumb.jpg",
    image: "/images/crops/blob-green-phone.jpg",
    content: [
      "Ad platforms make lookalike audiences trivially easy to build, which is exactly the problem. Most teams seed them with 'all purchasers' and wonder why performance is mediocre.",
      "A lookalike is only as good as the behavioral signal underneath it. All-purchaser lists include one-time discount hunters alongside your best repeat customers, diluting the entire audience.",
      "We build seed lists from customers in the top LTV quartile, then layer in engagement recency so the model isn't over-indexing on customers who bought once, years ago.",
      "The result is a smaller, sharper audience, usually 30-40% lower reach, and 2-3x the return on ad spend.",
    ],
  },
  {
    slug: "fatal-flaw-first-sale-strategy",
    title: "The Fatal Flaw in Growth Strategy Focusing on First Sale",
    category: "Growth",
    excerpt:
      "Optimizing purely for first purchase leaves the most profitable part of the funnel completely unmanaged.",
    date: "2026-04-22",
    readTime: "5 min read",
    author: "Julian Cho",
    authorImage: "/images/crops/founder-portrait.jpg",
    image: "/images/perfect-crops/2704.png",
    content: [
      "First-sale CAC gets all the attention because it's the easiest number to attach to a campaign. It's also the least profitable moment in the entire customer lifecycle.",
      "Brands that treat the first purchase as the finish line end up running the same acquisition treadmill every quarter, replacing churned customers instead of compounding a base.",
      "Retention isn't a lifecycle-email afterthought. It's a strategy decision made at the positioning stage. Who you acquire determines who sticks around.",
      "Before the next campaign brief, ask the harder question: what's the plan for month two, not just day one?",
    ],
  },
  {
    slug: "brand-systems-that-survive-scale",
    title: "Brand Systems That Survive Contact With Scale",
    category: "Branding",
    excerpt:
      "A logo is not a brand system. Here's what actually needs to exist before your tenth hire touches the deck template.",
    date: "2026-03-30",
    readTime: "7 min read",
    author: "Amara Chen",
    authorImage: "/images/crops/orange-portrait.jpg",
    image: "/images/crops/metallic-cube-podium.jpg",
    content: [
      "Most 'brand guidelines' documents are a logo, two colors, and a font pairing. That's a starter kit, not a system, and it breaks the moment a second designer joins the team.",
      "A brand system that survives scale defines rules, not just assets: spacing logic, a tone-of-voice matrix by channel, and explicit dos-and-don'ts for the edge cases that always come up in year two.",
      "The best test of a brand system isn't whether it looks good in the pitch deck. It's whether a freelancer with zero context can produce an on-brand social post in under an hour using only the guidelines.",
    ],
  },
  {
    slug: "engineering-marketing-sites-that-dont-rot",
    title: "Engineering Marketing Sites That Don't Rot in Six Months",
    category: "Software",
    excerpt:
      "Most marketing sites are unmaintainable by month four. The fix starts with who owns the CMS, not the framework.",
    date: "2026-03-11",
    readTime: "6 min read",
    author: "David Osei",
    authorImage: "/images/crops/founder-portrait.jpg",
    image: "/images/crops/dial-graphic.jpg",
    content: [
      "Every marketing site launches beautifully and rots within two quarters. Sections go stale, copy drifts from the product, and eventually nobody on the team feels safe touching the code.",
      "The root cause is rarely the framework. It's an ownership gap: the people who need to update the site weekly were never given a way to do it without a pull request.",
      "We build every marketing site around a content model the marketing team can actually operate, with engineering time reserved for structural changes, not typo fixes.",
    ],
  },
  {
    slug: "go-to-market-sequencing-mistakes",
    title: "The Sequencing Mistake That Sinks Most Product Launches",
    category: "Go-to-Market",
    excerpt:
      "Launching every channel on day one isn't ambition, it's a signal you never had a real GTM plan.",
    date: "2026-02-18",
    readTime: "9 min read",
    author: "Marcus Bell",
    authorImage: "/images/crops/blob-orange-man.jpg",
    image: "/images/perfect-crops/2703.png",
    content: [
      "'Launch everywhere at once' feels like coverage. In practice, it means no channel gets the iteration it needs before the budget runs out.",
      "A sequenced GTM plan picks one channel to prove the message works, then expands with a proven playbook instead of five simultaneous experiments competing for the same creative team.",
      "The brands that get this right treat their first channel like a lab, not a launch: instrumented, small, and ruthlessly measured before a single dollar moves to channel two.",
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}
