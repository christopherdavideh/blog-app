"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink, Github, Eye, Tag } from "lucide-react";
import Image from "next/image";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "Todos" },
    { id: "web", name: "Web" },
    { id: "mobile", name: "Mobile" },
    { id: "api", name: "API" },
    { id: "fullstack", name: "Full Stack" },
  ];

  const projects = [
    {
      id: 1,
      title: "To-do React App",
      description:
        "Aplicación web para gestionar y organizar tareas con React y TypeScript. Incluye funcionalidades CRUD completas y diseño responsive.",
      image: "/projects/todo-react.png",
      category: "web",
      technologies: ["React", "JavaScript"],
      github: "https://github.com/christopherdavideh/todo-react-app",
      live: "https://christopherdavideh.github.io/todo-react-app/",
      featured: true,
    },
    {
      id: 2,
      title: "Recap Movies & TV",
      description:
        "Aplicación web que consume The Movie Database (TMDB) API para mostrar información de películas y series de televisión.",
      image: "/projects/recap.png",
      category: "web",
      technologies: ["JavaScript", "TMDB API", "HTML", "CSS"],
      github: "https://github.com/christopherdavideh/recap-movies",
      live: "https://christopherdavideh.github.io/RecapMovies/",
      featured: true,
    },
    {
      id: 3,
      title: "API Rest con .NET 6",
      description:
        "API REST completa desarrollada con .NET 6 y PostgreSQL para gestión de datos. Incluye autenticación JWT y documentación Swagger.",
      image: "/projects/api-dotnet.png",
      category: "api",
      technologies: ["C#", ".NET 6", "PostgreSQL", "Entity Framework"],
      github: "https://github.com/christopherdavideh/api-dotnet",
      live: null,
      featured: true,
    },
    {
      id: 4,
      title: "Laravel 9 Project",
      description:
        "Aplicación web desarrollada con Laravel 9 y PHP 8.0, la aplicación web nos permite Administrar Roles y Usuarios.",
      image: "/projects/laravel_9.png",
      category: "fullstack",
      technologies: ["Laravel", "PHP", "Bootstrap"],
      github: "https://github.com/christopherdavideh/laverix",
      live: null,
      featured: false,
    },
    {
      id: 5,
      title: "Pomodoro Timer App",
      description:
        "Aplicación realizada con Xamarin.Forms que nos permite aplicar la técnica pomodoro para maximizar nuestra concentración.",
      image: "/projects/app_dev.gif",
      category: "mobile",
      technologies: ["Xamarin", "C#"],
      github: "https://github.com/christopherdavideh/PomodoroApp",
      live: null,
      featured: false,
    },
    {
      id: 6,
      title: "Google Clone",
      description:
        "Clonación de Google utilizando HTML5 semántico, estilos con CSS y diseño responsivo para fines prácticos.",
      image: "/projects/google.png",
      category: "web",
      technologies: ["HTML", "CSS"],
      github: "https://github.com/christopherdavideh/GoogleClone",
      live: "https://christopherdavideh.github.io/GoogleClone/",
      featured: false,
    },
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
                <div className="projects__card-image-content">
                  <Image
                    src={project.image}
                    alt="Christopher Erazo"
                    priority
                    fill={true}
                  />
                </div>
                {project.featured && (
                  <div className="projects__card-featured animate--neon-pulse">
                    Destacado
                  </div>
                )}
                {/* Overlay */}
                <div className="projects__card-overlay">
                  <div className="projects__card-overlay-actions">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__card-overlay-btn hover--neon"
                      >
                        <Github
                          size={20}
                          className="projects__card-overlay-icon"
                        />
                      </Link>
                    )}
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__card-overlay-btn hover--neon"
                      >
                        <ExternalLink
                          size={20}
                          className="projects__card-overlay-icon"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              {/* Project Content */}
              <div className="projects__card-content">
                <h3 className="projects__card-title animate--text-reveal">
                  {project.title}
                </h3>
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
                      <Github size={16} className="projects__card-link-icon" />
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
