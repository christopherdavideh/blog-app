import BlogPage from "@/components/pages/blog/BlogPage";

export const metadata = {
  title: "Blog | Christopher Erazo - Desarrollo y Tecnología",
  description:
    "Artículos, tutoriales y recursos sobre desarrollo web, móvil y mejores prácticas de programación. Aprende y crece conmigo en el mundo tech.",
  openGraph: {
    title: "Blog | Christopher Erazo - Desarrollo y Tecnología",
    description:
      "Artículos y tutoriales sobre desarrollo web, móvil y mejores prácticas de programación.",
    url: "https://tusitio.com/blog",
    type: "article",
    locale: "es_ES",
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
  return <BlogPage />;
}
