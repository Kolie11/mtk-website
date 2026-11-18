import type { MetadataRoute } from "next";
import { getProductPages } from "@/lib/api/products";
import { company } from "@/lib/data/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await getProductPages();
  const staticRoutes = ["", "/produkte", "/shop", "/fachbereich", "/impressum", "/datenschutz", "/agb", "/widerrufsbelehrung", "/versand"];
  return [
    ...staticRoutes.map((path) => ({ url: `${company.siteUrl}${path}`, changeFrequency: "weekly" as const, priority: path === "" ? 1 : 0.6 })),
    ...pages.map((page) => ({ url: `${company.siteUrl}/produkte/${page.productSlug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
