"use client";

import ProjectsSection from "@/components/organisms/ProjectsSection";
import { Project } from "@/types";

interface ProjectsPageProps {
  readonly projects: Project[];
}

export default function ProjectsPage({ projects }: Readonly<ProjectsPageProps>) {
  return (
    <main className="projects-page">
      {/* Projects Grid */}
      <section className="projects-page__grid">
        <div className="projects-page__grid-container">
          <ProjectsSection projects={projects} />
        </div>
      </section>
    </main>
  );
}
