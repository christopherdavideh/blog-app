import { Button } from "@/components/atoms/Button";
import AboutSection from "@/components/organisms/AboutSection";
import ProjectsSection from "@/components/organisms/ProjectsSection";
import SkillsSection from "@/components/organisms/SkillsSection";
import { ExperienceSection } from "@/components/organisms/ExperienceSection";
import HeroSection from "@/components/organisms/HeroSection";

export default function HomePage() {
  return (
    <>
      <main className="home">
        {/* Hero Section con animaciones */}
        <HeroSection />

        {/* About Section */}
        <section className="home__section home__section--about">
          <div className="home__section-container">
            <AboutSection />
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

        {/* Experience Section */}
        <section className="home__section home__section--experience">
          <div className="home__section-container">
            <ExperienceSection />
          </div>
        </section>
      </main>
    </>
  );
}
