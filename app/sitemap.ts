import type { MetadataRoute } from "next";
import { allRoutes } from "@/lib/nav";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return allRoutes.map(({ href }) => ({
    url: `${site.url}${href === "/" ? "" : href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : 0.8,
  }));
}
