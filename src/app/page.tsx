import { Header } from "@/components/organisms/Header";
import { Button } from "@/components/atoms/Button";
import AboutSection from "@/components/organisms/AboutSection";
import ProjectsSection from "@/components/organisms/ProjectsSection";
import SkillsSection from "@/components/organisms/SkillsSection";
import { ExperienceSection } from "@/components/organisms/ExperienceSection";
import { Footer } from "@/components/organisms/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="home">
        {/* Hero Section */}
        <section className="home__hero">
          <div className="home__hero-content">
            <p className="home__hero-greeting">Hola, mi nombre es</p>
            <h1 className="home__hero-name">Christopher David Erazo Herrera</h1>
            <h2 className="home__hero-title">Software Developer</h2>
            <p className="home__hero-description">
              Especializado en React, Angular, Java SpringBoot, C# .NET y
              desarrollo móvil. Creando experiencias digitales excepcionales.
            </p>
            <div className="home__hero-actions">
              <Button variant="primary" size="large">
                Ver proyectos
              </Button>
              <Button variant="secondary" size="large">
                Descargar CV
              </Button>
            </div>
          </div>
        </section>

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
      <Footer />
    </>
  );
}
