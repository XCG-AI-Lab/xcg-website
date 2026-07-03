import type { MetadataRoute } from "next";
import { SITE_URL, locales } from "@/lib/site";
import { services } from "@/lib/services";
import { articles, clusters } from "@/content/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/about",
    "/services",
    "/resources",
    "/tools",
    "/tools/e-invoicing-readiness",
    "/tools/deadline-calendar",
    "/tools/company-name-checker",
    "/pricing",
    "/faq",
    "/careers",
    "/contact",
  ];

  const servicePaths = services.map((s) => `/services/${s.slug}`);
  const clusterPaths = Object.keys(clusters).map((c) => `/resources/${c}`);
  const articlePaths = articles.map((a) => `/resources/${a.cluster}/${a.slug}`);

  const allPaths = [...staticPaths, ...servicePaths, ...clusterPaths, ...articlePaths];

  return allPaths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: path.startsWith("/resources/") ? ("monthly" as const) : ("weekly" as const),
      priority: path === "" ? 1 : path.startsWith("/services") ? 0.9 : 0.7,
      alternates: {
        languages: {
          en: `${SITE_URL}/en${path}`,
          zh: `${SITE_URL}/zh${path}`,
        },
      },
    }))
  );
}
