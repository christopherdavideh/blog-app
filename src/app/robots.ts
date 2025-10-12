import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// Robots.txt dinámico (Best Practice SEO)
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/admin/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
