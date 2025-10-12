import ProjectsSection from "@/components/organisms/ProjectsSection";
import SkillsSection from "@/components/organisms/SkillsSection";
import HeroSection from "@/components/organisms/HeroSection";
import { siteConfig } from "@/lib/site-config";
import { loadAllProjects } from "@/lib/content-loader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Descubre mis proyectos, habilidades y experiencia en desarrollo web y móvil. ¡Conectemos y llevemos tus ideas al siguiente nivel!",
  openGraph: {
    title: "Inicio | Christopher Erazo - Ingeniero de Software",
    description:
      "Descubre proyectos, habilidades y experiencia en desarrollo web y móvil.",
    url: siteConfig.url,
    type: "website",
    images: [
      {
        url: "/images/seo.png",
        width: 1200,
        height: 630,
        alt: "Christopher Erazo - Ingeniero de Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inicio | Christopher Erazo - Ingeniero de Software",
    description:
      "Descubre proyectos, habilidades y experiencia en desarrollo web y móvil.",
    images: ["/images/seo.png"],
  },
};

export default function HomePage() {
  // Cargar proyectos en el servidor
  const projects = loadAllProjects();

  return (
    <main className="home">
      {/* Hero Section con animaciones */}
      <HeroSection />

      {/* Skills Section */}
      <section className="home__section home__section--skills">
        <div className="home__section-container">
          <SkillsSection />
        </div>
      </section>

      {/* Projects Section */}
      <section className="home__section home__section--projects">
        <div className="home__section-container">
          <ProjectsSection projects={projects} />
        </div>
      </section>
    </main>
  );
}
