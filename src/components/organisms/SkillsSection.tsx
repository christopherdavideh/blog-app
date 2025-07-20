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
    { id: "frontend", name: "Frontend", icon: Globe, color: "#61DAFB" },
    { id: "backend", name: "Backend", icon: Server, color: "#6DB33F" },
    { id: "database", name: "Base de Datos", icon: Database, color: "#336791" },
    { id: "mobile", name: "Mobile", icon: Smartphone, color: "#02569B" },
    { id: "tools", name: "Herramientas", icon: Code, color: "#F05032" },
    { id: "design", name: "Diseño", icon: Palette, color: "#F24E1E" },
  ];

  const skills = {
    frontend: [
      { name: "HTML5", level: 95, color: "#E34F26" },
      { name: "CSS3", level: 90, color: "#1572B6" },
      { name: "JavaScript", level: 88, color: "#F7DF1E" },
      { name: "React", level: 85, color: "#61DAFB" },
      { name: "Angular", level: 80, color: "#DD0031" },
      { name: "TypeScript", level: 75, color: "#3178C6" },
      { name: "Bootstrap", level: 85, color: "#7952B3" },
      { name: "jQuery", level: 80, color: "#0769AD" },
    ],
    backend: [
      { name: "Java SpringBoot", level: 85, color: "#6DB33F" },
      { name: "C# .NET", level: 80, color: "#512BD4" },
      { name: "PHP", level: 75, color: "#777BB4" },
      { name: "Laravel", level: 70, color: "#FF2D20" },
      { name: "Python", level: 70, color: "#3776AB" },
      { name: "Django", level: 65, color: "#092E20" },
    ],
    database: [
      { name: "MySQL", level: 85, color: "#4479A1" },
      { name: "PostgreSQL", level: 80, color: "#336791" },
      { name: "SQL Server", level: 75, color: "#CC2927" },
    ],
    mobile: [
      { name: "Flutter", level: 75, color: "#02569B" },
      { name: "Xamarin", level: 70, color: "#3498DB" },
    ],
    tools: [
      { name: "Git", level: 90, color: "#F05032" },
      { name: "GitHub", level: 85, color: "#181717" },
      { name: "VS Code", level: 95, color: "#007ACC" },
      { name: "Postman", level: 80, color: "#FF6C37" },
      { name: "Docker", level: 65, color: "#2496ED" },
    ],
    design: [
      { name: "Figma", level: 70, color: "#F24E1E" },
      { name: "Adobe XD", level: 65, color: "#FF61F6" },
      { name: "Photoshop", level: 60, color: "#31A8FF" },
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

        <div className="skills__categories animate--fade-in animate--delay-3">
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
                } hover--scale`}
              >
                <Icon size={20} className="skills__category-icon" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        <div className="skills__grid animate--fade-in animate--delay-4">
          {skills[activeCategory as keyof typeof skills]?.map(
            (skill, index) => (
              <div
                key={skill.name}
                className={`skills__item hover--lift animate--fade-in animate--delay-${
                  5 + index
                }`}
              >
                <div className="skills__item-header">
                  <h3 className="skills__item-title">{skill.name}</h3>
                  <span className="skills__item-level">{skill.level}%</span>
                </div>
                <div className="skills__item-bar-bg">
                  <div
                    className="skills__item-bar"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color,
                    }}
                  />
                </div>
                <div className="skills__item-indicator">
                  <span>Básico</span>
                  <span>Intermedio</span>
                  <span>Avanzado</span>
                  <span>Experto</span>
                </div>
              </div>
            )
          )}
        </div>

        <div className="skills__strengths animate--fade-in animate--delay-9">
          <h3 className="skills__strengths-title">
            ¿Por qué estas tecnologías?
          </h3>
          <div className="skills__strengths-grid">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <div
                  key={index}
                  className={`skills__strength hover--lift animate--fade-in animate--delay-${
                    10 + index
                  }`}
                >
                  <Icon className="skills__strength-icon" />
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
