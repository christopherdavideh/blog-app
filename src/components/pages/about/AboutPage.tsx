"use client";

import { Header } from "@/components/organisms/Header";
import AboutSection from "@/components/organisms/AboutSection";
import SkillsSection from "@/components/organisms/SkillsSection";
import { ExperienceSection } from "@/components/organisms/ExperienceSection";

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* About Section */}
      <section className="about-page__content">
        <div className="about-page__content-container">
          <AboutSection />
        </div>
      </section>
      {/* Skills Section */}
      <section className="about-page__skills">
        <div className="about-page__skills-container">
          <SkillsSection />
        </div>
      </section>
      {/* Experience Section */}
      <section className="about-page__experience">
        <div className="about-page__experience-container">
          <ExperienceSection />
        </div>
      </section>
    </main>
  );
}
