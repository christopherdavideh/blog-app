"use client";

import { Header } from "@/components/organisms/Header";
import ProjectsSection from "@/components/organisms/ProjectsSection";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="projects-page">
        {/* Projects Grid */}
        <section className="projects-page__grid">
          <div className="projects-page__grid-container">
            <ProjectsSection />
          </div>
        </section>
      </main>
    </>
  );
}
