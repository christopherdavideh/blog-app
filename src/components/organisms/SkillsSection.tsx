"use client";

import { useState } from "react";
import {
  Code,
  Database,
  Smartphone,
  Globe,
  Server,
  Palette,
  Zap,
  Shield,
  Rocket,
  Target,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const { elementRef, isVisible } = useScrollAnimation();

  const categories = [
    { id: "frontend", name: "Frontend", icon: Globe },
    { id: "backend", name: "Backend", icon: Server },
    { id: "database", name: "Databases", icon: Database },
    { id: "mobile", name: "Mobile", icon: Smartphone },
    { id: "tools", name: "Tools", icon: Code },
  ];

  const skills = {
    frontend: [
      { name: "React" },
      { name: "Angular" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "Sass" },
    ],
    backend: [
      { name: "Spring Boot" },
      { name: "Python" },
      { name: ".NET" },
      { name: "Laravel" },
    ],
    database: [
      { name: "Postgres" },
      { name: "MySQL" },
      { name: "SQL Server" },
      { name: "Redis" },
      { name: "MongoDB" },
    ],
    mobile: [{ name: "React Native" }, { name: "MAUI" }],
    tools: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Postman" },
      { name: "Figma" },
    ],
  };

  const strengths = [
    {
      icon: Zap,
      title: "Desarrollo Full-Stack",
      description: "Experiencia completa en frontend y backend",
    },
    {
      icon: Shield,
      title: "Código Limpio",
      description: "Principios SOLID y mejores prácticas",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimización y escalabilidad",
    },
    {
      icon: Target,
      title: "Experiencia de Usuario",
      description: "Interfaces intuitivas y responsivas",
    },
  ];

  return (
    <section
      ref={elementRef}
      className={`skills ${
        isVisible ? "scroll-animate visible" : "scroll-animate"
      }`}
    >
      <div className="skills__container">
        <div className="skills__header">
          <h2 className="skills__title animate--fade-in animate--delay-1">
            Habilidades y Tecnologías
          </h2>
          <div className="skills__divider"></div>
          <p className="skills__subtitle animate--fade-in animate--delay-2">
            Stack tecnológico que domino y utilizo para crear soluciones
            innovadoras
          </p>
        </div>

        <div className="skills__categories animate--slide-up-stagger animate--delay-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`skills__category-btn ${
                  activeCategory === category.id
                    ? "skills__category-btn--active"
                    : ""
                } hover--neon animate--wave animate--delay-${
                  categories.indexOf(category) + 1
                }`}
              >
                <Icon size={20} className="skills__category-icon" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        <div className="skills__grid animate--slide-up-stagger animate--delay-4">
          {skills[activeCategory as keyof typeof skills]?.map(
            (skill, index) => (
              <div
                key={skill.name}
                className={`skills__item hover--tilt animate--zoom-in`}
              >
                <div className="skills__item-header">
                  <img
                    src={`/icons/${skill.name
                      .toLowerCase()
                      .replace(/\s|\./g, "-")}.svg`}
                    alt={skill.name}
                    className="skills__item-icon"
                    style={{ width: 40, height: 40, marginBottom: 8 }}
                  />
                  <h3 className="skills__item-title animate--text-reveal">
                    {skill.name}
                  </h3>
                </div>
              </div>
            )
          )}
        </div>

        <div className="skills__strengths animate--slide-up-stagger animate--delay-9">
          <h3 className="skills__strengths-title animate--text-reveal">
            ¿Por qué estas tecnologías?
          </h3>
          <div className="skills__strengths-grid">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <div
                  key={index}
                  className={`skills__strength hover--morph animate--tilt-in animate--delay-${
                    10 + index
                  }`}
                >
                  <Icon className="skills__strength-icon animate--neon-pulse" />
                  <h4 className="skills__strength-title">{strength.title}</h4>
                  <p className="skills__strength-desc">
                    {strength.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
