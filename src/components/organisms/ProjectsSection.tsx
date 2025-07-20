"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink, Github, Eye, Tag } from "lucide-react";
import { ProjectCard } from "@/components/molecules/Card";

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
      image: "/images/todo-react.png",
      category: "web",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/christopherdavideh/todo-react-app",
      live: "https://todo-react-app-demo.netlify.app",
      featured: true,
    },
    {
      id: 2,
      title: "Recap Movies & TV",
      description:
        "Aplicación web que consume The Movie Database (TMDB) API para mostrar información de películas y series de televisión.",
      image: "/images/recap.png",
      category: "web",
      technologies: ["JavaScript", "Axios", "TMDB API", "CSS3"],
      github: "https://github.com/christopherdavideh/recap-movies",
      live: "https://recap-movies-demo.netlify.app",
      featured: true,
    },
    {
      id: 3,
      title: "API Rest con .NET 6",
      description:
        "API REST completa desarrollada con .NET 6 y PostgreSQL para gestión de datos. Incluye autenticación JWT y documentación Swagger.",
      image: "/images/api-dotnet.png",
      category: "api",
      technologies: ["C#", ".NET 6", "PostgreSQL", "Entity Framework"],
      github: "https://github.com/christopherdavideh/api-dotnet",
      live: null,
      featured: true,
    },
    {
      id: 4,
      title: "Laravel E-commerce",
      description:
        "Plataforma de comercio electrónico completa desarrollada con Laravel y MySQL. Incluye carrito de compras, pagos y panel de administración.",
      image: "/images/laravel-project.png",
      category: "fullstack",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
      github: "https://github.com/christopherdavideh/laravel-ecommerce",
      live: "https://laravel-ecommerce-demo.netlify.app",
      featured: false,
    },
    {
      id: 5,
      title: "Mobile App con Xamarin",
      description:
        "Aplicación móvil multiplataforma desarrollada con Xamarin.Forms. Funcionalidades de geolocalización y sincronización offline.",
      image: "/images/mobile-first.png",
      category: "mobile",
      technologies: ["Xamarin", "C#", "XAML", "SQLite"],
      github: "https://github.com/christopherdavideh/xamarin-app",
      live: null,
      featured: false,
    },
    {
      id: 6,
      title: "Pomodoro Timer App",
      description:
        "Aplicación de temporizador Pomodoro para mejorar la productividad. Incluye configuraciones personalizables y estadísticas de uso.",
      image: "/images/pomodoro-app.png",
      category: "web",
      technologies: ["React", "JavaScript", "CSS3", "LocalStorage"],
      github: "https://github.com/christopherdavideh/pomodoro-app",
      live: "https://pomodoro-app-demo.netlify.app",
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
            <div key={project.id} className="projects__item">
              {/* Project Image */}
              <div className="projects__card-image">
                <div className="projects__card-image-content">
                  <span className="projects__card-image-title">
                    {project.title.split(" ")[0]}
                  </span>
                </div>
                {project.featured && (
                  <div className="projects__card-featured">Destacado</div>
                )}
                {/* Overlay */}
                <div className="projects__card-overlay">
                  <div className="projects__card-overlay-actions">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__card-overlay-btn"
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
                        className="projects__card-overlay-btn"
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
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.description}</p>
                {/* Technologies */}
                <div className="projects__card-techs">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="projects__card-tech">
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
                      className="projects__card-link"
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
                      className="projects__card-link"
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
        <div className="projects__cta">
          <p className="projects__cta-text">
            ¿Te gusta lo que ves? ¡Trabajemos juntos en tu próximo proyecto!
          </p>
          <Link href="/contact" className="projects__cta-btn">
            <Eye size={20} className="projects__cta-btn-icon" />
            Ver más proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}
