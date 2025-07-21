import { Button } from "@/components/atoms/Button";
import AboutSection from "@/components/organisms/AboutSection";
import ProjectsSection from "@/components/organisms/ProjectsSection";
import SkillsSection from "@/components/organisms/SkillsSection";
import { ExperienceSection } from "@/components/organisms/ExperienceSection";
import HeroSection from "@/components/organisms/HeroSection";

export const metadata = {
  title: "Inicio | Christopher Erazo - Desarrollador Full-Stack",
  description:
    "Descubre mis proyectos, habilidades y experiencia en desarrollo web y móvil. ¡Conectemos y llevemos tus ideas al siguiente nivel!",
  openGraph: {
    title: "Inicio | Christopher Erazo - Desarrollador Full-Stack",
    description:
      "Descubre proyectos, habilidades y experiencia en desarrollo web y móvil.",
    url: "https://tusitio.com/",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "/images/seo.png",
        width: 1200,
        height: 630,
        alt: "Christopher Erazo - Desarrollador Full-Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inicio | Christopher Erazo - Desarrollador Full-Stack",
    description:
      "Descubre proyectos, habilidades y experiencia en desarrollo web y móvil.",
    images: ["/images/seo.png"],
  },
};

export default function HomePage() {
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
          <ProjectsSection />
        </div>
      </section>
    </main>
  );
}
