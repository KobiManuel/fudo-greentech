// Resolution order for the canonical site URL:
// 1. NEXT_PUBLIC_SITE_URL - set this explicitly once thefudoway.com is
//    wired up as the production domain in Vercel.
// 2. Vercel's auto-injected deployment URL - covers preview builds and
//    any deploy before the custom domain env var is set.
// 3. The known production Vercel URL as a final hardcoded fallback, so
//    metadata never resolves to a placeholder/unreachable host.
const vercelDeploymentUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const KNOWN_VERCEL_URL = "https://fudo-greentech.vercel.app";

const resolvedUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelDeploymentUrl ? `https://${vercelDeploymentUrl}` : undefined) ??
  "https://thefudoway.com";

export const siteConfig = {
  name: "Fudo Greentech",
  url: resolvedUrl,
  vercelUrl: KNOWN_VERCEL_URL,
  description:
    "Fudo Greentech is a full-service growth partner handling software development, branding, marketing, and go-to-market strategy end to end.",
  email: "team@thefudoway.com",
  phone: "+2348159184394",
  phoneDisplay: "+234 815 918 4394",
  address: "Victoria Garden City, Lagos, Nigeria",
  social: {
    x: "https://x.com/fudogreentech",
    linkedin: "https://linkedin.com/company/fudogreentech",
    instagram: "https://instagram.com/fudogreentech",
    dribbble: "https://dribbble.com/fudogreentech",
  },
};
