import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";

const BASE_URL = "https://marknesbitt.info";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/guides",
    "/about",
    "/contact",
    "/privacy-policy",
    "/cookie-policy",
    "/terms",
    "/editorial-policy",
    "/age-notice",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${BASE_URL}/guides/${article.slug}`,
    lastModified: new Date(article.lastUpdatedISO),
  }));

  return [...staticRoutes, ...articleRoutes];
}
