import AboutPage from "@/components/pages/about/AboutPage";

export const metadata = {
  title: "Sobre mí | Christopher Erazo - Desarrollador Full-Stack",
  description:
    "Conoce mi experiencia, habilidades y valores como desarrollador full-stack. Descubre mi pasión por la tecnología y el aprendizaje continuo.",
  openGraph: {
    title: "Sobre mí | Christopher Erazo - Desarrollador Full-Stack",
    description:
      "Conoce mi experiencia, habilidades y trayectoria como desarrollador full-stack.",
    url: "https://tusitio.com/about",
    type: "profile",
    locale: "es_ES",
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
