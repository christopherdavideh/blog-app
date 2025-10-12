import AboutPage from "@/components/pages/about/AboutPage";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Conoce mi experiencia, habilidades y valores como Ingeniero de Software. Descubre mi pasión por la tecnología y el aprendizaje continuo.",
  openGraph: {
    title: "Sobre mí | Christopher Erazo - Ingeniero de Software",
    description:
      "Conoce mi experiencia, habilidades y trayectoria como Ingeniero de Software.",
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
    title: "Sobre mí | Christopher Erazo - Ingeniero de Software",
    description:
      "Conoce mi experiencia, habilidades y trayectoria como Ingeniero de Software.",
    images: ["/images/ChristopherErazo_1.png"],
  },
};

export default function About() {
  return <AboutPage />;
}
