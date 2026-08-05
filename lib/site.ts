// Prefer an explicit env var (set this once a custom domain is live).
// Otherwise fall back to Vercel's auto-injected deployment URL so
// previews and the production deployment always resolve to a real,
// reachable host instead of a placeholder domain.
const vercelUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

const resolvedUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelUrl ? `https://${vercelUrl}` : undefined) ??
  "http://localhost:3000";

export const siteConfig = {
  name: "Fudo Greentech",
  url: resolvedUrl,
  description:
    "Fudo Greentech is a full-service growth partner handling marketing, branding, software development, and go-to-market strategy end to end.",
  email: "hello@fudogreentech.com",
  phone: "+2349011840361",
  phoneDisplay: "+234 901 184 0361",
  address: "Victoria Garden City, Lagos, Nigeria",
  social: {
    x: "https://x.com/fudogreentech",
    linkedin: "https://linkedin.com/company/fudogreentech",
    instagram: "https://instagram.com/fudogreentech",
    dribbble: "https://dribbble.com/fudogreentech",
  },
};
