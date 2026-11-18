import type { MetadataRoute } from "next";
import { company } from "@/lib/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/admin", "/warenkorb", "/kasse"] }],
    sitemap: `${company.siteUrl}/sitemap.xml`,
  };
}
