import AboutPage from "@/components/pages/about/AboutPage";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Conoce mi experiencia, habilidades y valores como desarrollador full-stack. Descubre mi pasión por la tecnología y el aprendizaje continuo.",
  openGraph: {
    title: "Sobre mí | Christopher Erazo - Desarrollador Full-Stack",
    description:
      "Conoce mi experiencia, habilidades y trayectoria como desarrollador full-stack.",
    url: `${siteConfig.url}/about`,
    type: "profile",
    images: [
      {
        url: "/images/ChristopherErazo_1.png",
        width: 1200,
        height: 630,
        alt: "Sobre mí - Christopher Erazo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre mí | Christopher Erazo - Desarrollador Full-Stack",
    description:
      "Conoce mi experiencia, habilidades y trayectoria como desarrollador full-stack.",
    images: ["/images/ChristopherErazo_1.png"],
  },
};

export default function About() {
  return <AboutPage />;
}
