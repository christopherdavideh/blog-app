"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink, Github as GithubIcon, Tag } from "lucide-react";
import Image from "next/image";
import { Project } from "@/types";

interface ProjectsSectionProps {
  readonly projects?: Project[];
}

export default function ProjectsSection({ projects = [] }: Readonly<ProjectsSectionProps>) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "Todos" },
    { id: "web", name: "Web" },
    { id: "mobile", name: "Mobile" },
    { id: "api", name: "API" },
    { id: "fullstack", name: "Full Stack" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="projects">
      <div className="projects__container">
        <div className="projects__header">
          <h2 className="projects__title">Mis Proyectos</h2>
          <div className="projects__divider"></div>
          <p className="projects__subtitle">
            Una colección de proyectos que demuestran mis habilidades y pasión
            por el desarrollo de software
          </p>
        </div>
        {/* Filter Buttons */}
        <div className="projects__filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`projects__filter-btn${
                activeFilter === filter.id
                  ? " projects__filter-btn--active"
                  : ""
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
        {/* Projects Grid */}
        <div className="projects__grid">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`projects__item scroll-animate--scale animate--delay-${
                idx + 1
              } hover--lift`}
            >
              {/* Project Image */}
              <div className="projects__card-image hover--shimmer-effect">
                <Link href={`/projects/${project.id}`}>
                  <div className="projects__card-image-content">
                    <Image
                      src={project.image}
                      alt="Christopher Erazo"
                      priority
                      fill={true}
                    />
                  </div>
                </Link>
                {project.featured && (
                  <div className="projects__card-featured animate--neon-pulse">
                    Destacado
                  </div>
                )}
                {/* Overlay */}
                <div className="projects__card-overlay">
                  <div className="projects__card-overlay-actions">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__card-overlay-btn hover--neon"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Ver código de ${project.title} en GitHub`}
                      >
                        <GithubIcon
                          size={20}
                          className="projects__card-overlay-icon"
                        />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__card-overlay-btn hover--neon"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Ver demo de ${project.title}`}
                      >
                        <ExternalLink
                          size={20}
                          className="projects__card-overlay-icon"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              {/* Project Content */}
              <div className="projects__card-content">
                <Link href={`/projects/${project.id}`}>
                  <h3 className="projects__card-title animate--text-reveal">
                    {project.title}
                  </h3>
                </Link>
                <p className="projects__card-desc">{project.description}</p>
                {/* Technologies */}
                <div className="projects__card-techs">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={tech}
                      className={`projects__card-tech animate--slide-up-stagger animate--delay-${
                        techIdx + 1
                      }`}
                    >
                      <Tag size={12} className="projects__card-tech-icon" />
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Project Links */}
                <div className="projects__card-links">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__card-link hover--neon"
                    >
                      <GithubIcon
                        size={16}
                        className="projects__card-link-icon"
                      />
                      Código
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__card-link hover--neon"
                    >
                      <ExternalLink
                        size={16}
                        className="projects__card-link-icon"
                      />
                      Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Call to Action */}
        {/* <div className="projects__cta animate--bounce-in animate--delay-8">
          <p className="projects__cta-text">
            ¿Te gusta lo que ves? ¡Trabajemos juntos en tu próximo proyecto!
          </p>
          <Link href="/contact" className="projects__cta-btn hover--neon">
            <Eye size={20} className="projects__cta-btn-icon" />
            Ver más proyectos
          </Link>
        </div> */}
      </div>
    </section>
  );
}
