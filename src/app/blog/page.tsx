import BlogPage from "@/components/pages/blog/BlogPage";
import { siteConfig } from "@/lib/site-config";
import { loadAllBlogPosts, getAllBlogTags } from "@/lib/content-loader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos, tutoriales y recursos sobre desarrollo web, móvil y mejores prácticas de programación. Aprende y crece conmigo en el mundo tech.",
  openGraph: {
    title: "Blog | Christopher Erazo - Desarrollo y Tecnología",
    description:
      "Artículos y tutoriales sobre desarrollo web, móvil y mejores prácticas de programación.",
    url: `${siteConfig.url}/blog`,
    type: "website",
    images: [
      {
        url: "/images/starter-preview.png",
        width: 1200,
        height: 630,
        alt: "Blog - Desarrollo y Tecnología",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Christopher Erazo - Desarrollo y Tecnología",
    description:
      "Artículos y tutoriales sobre desarrollo web, móvil y mejores prácticas de programación.",
    images: ["/images/starter-preview.png"],
  },
};

export default function Blog() {
  // Cargar datos en el servidor (Server Component)
  const blogPosts = loadAllBlogPosts();
  const allTags = getAllBlogTags();
  
  return <BlogPage posts={blogPosts} tags={allTags} />;
}
