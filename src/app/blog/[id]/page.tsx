import { notFound } from "next/navigation";
import { getBlogPostById, getAllBlogPostIds } from "@/content/blog-posts";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";
import BlogPostDetailPage from "@/components/pages/blog/BlogPostDetailPage";

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

// Generar metadata dinámica para cada blog post (SEO optimizado)
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = getBlogPostById(id);

  if (!post) {
    return {
      title: "Post no encontrado",
    };
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: `${post.title} | Christopher Erazo Blog`,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.id}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: post.image || "/images/blog-default.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Christopher Erazo Blog`,
      description: post.description,
      images: [post.image || "/images/blog-default.png"],
    },
  };
}

// Generar rutas estáticas en build time (optimización de rendimiento)
export async function generateStaticParams() {
  const postIds = getAllBlogPostIds();

  return postIds.map((id) => ({
    id: id,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = getBlogPostById(id);

  if (!post) {
    notFound();
  }

  return <BlogPostDetailPage post={post} />;
}
