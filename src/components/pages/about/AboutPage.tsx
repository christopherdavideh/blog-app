"use client";

import AboutSection from "@/components/organisms/AboutSection";
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
      {/* Experience Section */}
      {/* <section className="about-page__experience">
        <div className="about-page__experience-container">
          <ExperienceSection />
        </div>
      </section> */}
    </main>
  );
}
