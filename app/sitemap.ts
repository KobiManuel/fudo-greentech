import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { caseStudies } from "@/lib/data/caseStudies";
import { insights } from "@/lib/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${siteConfig.url}/about`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${siteConfig.url}/services`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${siteConfig.url}/work`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${siteConfig.url}/pricing`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${siteConfig.url}/insights`, changeFrequency: "weekly" as const, priority: 0.6 },
    { url: `${siteConfig.url}/contact`, changeFrequency: "yearly" as const, priority: 0.6 },
  ].map((route) => ({ ...route, lastModified: new Date() }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${siteConfig.url}/work/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const insightRoutes: MetadataRoute.Sitemap = insights.map((post) => ({
    url: `${siteConfig.url}/insights/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...insightRoutes];
}
