"use client";

import Image from "next/image";
import {
  Download,
  Calendar,
  MapPin,
  Briefcase,
  Code,
  Users,
  Award,
  Globe,
} from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Desarrollo Full-Stack",
      description:
        "React, Angular, Java SpringBoot, C# .NET, JavaScript, TypeScript, Python",
    },
    {
      icon: Users,
      title: "Tecnologías Modernas",
      description:
        "Frameworks y librerías: Bootstrap, jQuery, React, .NET, Django, Laravel",
    },
    {
      icon: Award,
      title: "Bases de Datos",
      description:
        "MySQL, PostgreSQL, SQL Server - Diseño y optimización de BD",
    },
    {
      icon: Globe,
      title: "Desarrollo Móvil",
      description: "Flutter, Xamarin - Aplicaciones multiplataforma",
    },
  ];

  const experiences = [
    {
      company: "Desarrollador Freelance",
      position: "Software Developer",
      period: "2023 - Presente",
      description:
        "Desarrollo de aplicaciones web y móviles con React, Angular, Java SpringBoot y C# .NET. Especializado en soluciones full-stack y desarrollo móvil.",
    },
    {
      company: "Proyectos Personales",
      position: "Full Stack Developer",
      period: "2022 - 2023",
      description:
        "Desarrollo de aplicaciones web con React, .NET 6, PostgreSQL. Implementación de APIs REST y aplicaciones móviles con Flutter y Xamarin.",
    },
    {
      company: "Primeros Proyectos",
      position: "Frontend Developer",
      period: "2021 - 2022",
      description:
        "Desarrollo web con HTML5, CSS3, JavaScript, Bootstrap y jQuery. Primeros proyectos con PHP y Laravel.",
    },
  ];

  return (
    <section className="about">
      <div className="about__container">
        <div className="about__content">
          {/* Section Header */}
          <div className="about__header">
            <h2 className="about__title">Sobre mí</h2>
            <div className="about__divider"></div>
          </div>
          {/* Main Content Grid */}
          <div className="about__main">
            {/* Text Content */}
            <div className="about__main-content">
              <div className="about__main-texts">
                <p className="about__main-paragraph">
                  ¡Hola! 🖐 Soy Christopher David Erazo Herrera, un
                  desarrollador de software colombiano apasionado por crear
                  experiencias digitales excepcionales. Mi especialización
                  incluye React, Angular, Java SpringBoot, C# .NET, JavaScript,
                  TypeScript y Python.
                </p>
                <p className="about__main-paragraph">
                  Con experiencia en desarrollo full-stack, me enfoco en crear
                  aplicaciones web y móviles robustas y escalables. Mi stack
                  tecnológico incluye frameworks modernos como React, Angular,
                  .NET, Django y Laravel, junto con bases de datos como MySQL,
                  PostgreSQL y SQL Server.
                </p>
                <p className="about__main-paragraph">
                  También tengo experiencia en desarrollo móvil con Flutter y
                  Xamarin, permitiéndome crear aplicaciones multiplataforma que
                  funcionan perfectamente en iOS y Android.
                </p>
                <p className="about__main-paragraph">
                  Siempre estoy buscando nuevos desafíos y oportunidades
                  emocionantes para seguir creciendo como desarrollador y
                  contribuir a proyectos innovadores que impacten positivamente
                  a las personas.
                </p>
              </div>
              {/* Download CV Button */}
              <div className="about__cv">
                <a
                  href="/cv-christopher-erazo.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__cv-link hover--lift"
                >
                  <Download size={20} className="about__cv-icon" />
                  Descargar CV
                </a>
              </div>
            </div>
            {/* Image */}
            <div className="about__main-image">
              <div className="about__main-image-wrapper">
                <div className="about__main-image-content">
                  <div className="about__main-image-logo">CE</div>
                  <div className="about__main-image-role">
                    Software Developer
                  </div>
                </div>
                <div className="about__main-image-bg"></div>
              </div>
            </div>
          </div>
          {/* Highlights Grid */}
          <div className="about__highlights">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="about__highlight hover--lift">
                  <Icon className="about__highlight-icon" />
                  <h3 className="about__highlight-title">{highlight.title}</h3>
                  <p className="about__highlight-desc">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
          {/* Stats Section */}
          <div className="about__stats">
            <h3 className="about__stats-title">Stack Tecnológico</h3>
            <div className="about__stats-grid">
              <div className="about__stats-item">
                <div className="about__stats-value">8+</div>
                <div className="about__stats-label">Lenguajes</div>
              </div>
              <div className="about__stats-item">
                <div className="about__stats-value">6+</div>
                <div className="about__stats-label">Frameworks</div>
              </div>
              <div className="about__stats-item">
                <div className="about__stats-value">3+</div>
                <div className="about__stats-label">Bases de Datos</div>
              </div>
              <div className="about__stats-item">
                <div className="about__stats-value">2+</div>
                <div className="about__stats-label">Plataformas Móviles</div>
              </div>
            </div>
          </div>
          {/* Experience Timeline */}
          <div className="about__experience">
            <h3 className="about__experience-title">Experiencia Profesional</h3>
            <div className="about__experience-list">
              {experiences.map((exp, index) => (
                <div key={index} className="about__experience-item hover--lift">
                  <div className="about__experience-header">
                    <div>
                      <h4 className="about__experience-position">
                        {exp.position}
                      </h4>
                      <p className="about__experience-company">{exp.company}</p>
                    </div>
                    <div className="about__experience-period">
                      <Calendar
                        size={16}
                        className="about__experience-period-icon"
                      />
                      {exp.period}
                    </div>
                  </div>
                  <p className="about__experience-desc">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
