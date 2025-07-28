"use client";

import { Calendar, MapPin, Building, Award, Users, Code } from "lucide-react";
import { Timeline } from "@/components/ui/Timeline";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: "Empresa Tecnológica Actual",
      position: "Senior Software Developer",
      period: "2023 - Presente",
      location: "Remoto",
      description:
        "Liderando el desarrollo de aplicaciones web y móviles de alta escala.",
      achievements: [
        "Desarrollé y mantuve aplicaciones React/Angular con más de 10,000 usuarios activos",
        "Implementé arquitecturas microservicios con Java SpringBoot y .NET",
        "Optimicé el rendimiento de aplicaciones reduciendo el tiempo de carga en un 40%",
        "Mentoré a 3 desarrolladores junior en mejores prácticas de desarrollo",
      ],
      technologies: [
        "React",
        "Angular",
        "Java SpringBoot",
        "C# .NET",
        "PostgreSQL",
        "Docker",
      ],
      type: "full-time",
    },
    {
      id: 2,
      company: "Startup de E-commerce",
      position: "Full Stack Developer",
      period: "2021 - 2023",
      location: "Bogotá, Colombia",
      description:
        "Desarrollo full-stack para plataforma de comercio electrónico.",
      achievements: [
        "Construí una plataforma de e-commerce completa con Laravel y React",
        "Integré múltiples APIs de pago (Stripe, PayPal, MercadoPago)",
        "Implementé sistema de notificaciones en tiempo real con WebSockets",
        "Reduje los errores de producción en un 60% mediante testing automatizado",
      ],
      technologies: [
        "Laravel",
        "React",
        "MySQL",
        "Redis",
        "WebSockets",
        "Docker",
      ],
      type: "full-time",
    },
    {
      id: 3,
      company: "Agencia Digital",
      position: "Frontend Developer",
      period: "2020 - 2021",
      location: "Medellín, Colombia",
      description: "Desarrollo frontend para clientes de diversos sectores.",
      achievements: [
        "Desarrollé 15+ sitios web responsivos para diferentes clientes",
        "Implementé animaciones y transiciones fluidas con CSS3 y JavaScript",
        "Optimicé el SEO de sitios web mejorando el ranking en Google",
        "Colaboré con diseñadores para implementar diseños pixel-perfect",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "WordPress",
      ],
      type: "full-time",
    },
  ];

  const education = [
    {
      degree: "Ingeniería de Sistemas",
      institution: "Universidad Nacional de Colombia",
      period: "2016 - 2020",
      description:
        "Especialización en desarrollo de software y arquitectura de sistemas.",
    },
    {
      degree: "Certificación AWS Developer",
      institution: "Amazon Web Services",
      period: "2022",
      description:
        "Certificación en desarrollo de aplicaciones en la nube AWS.",
    },
  ];

  const certifications = [
    {
      name: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      year: "2023",
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google",
      year: "2022",
    },
    {
      name: "Scrum Master Certified (SMC)",
      issuer: "Scrum Alliance",
      year: "2021",
    },
  ];

  return (
    <div className="experience__container">
      <div className="experience__header">
        <h2 className="experience__title">Experiencia Profesional</h2>
        <div className="experience__divider"></div>
        <p className="experience__subtitle">
          Mi trayectoria profesional y logros en el desarrollo de software
        </p>
      </div>
      {/* Work Experience */}
      <div className="experience__main">
        <Timeline
          items={experiences.map((exp) => ({
            id: exp.id,
            title: exp.position,
            company: exp.company,
            location: exp.location,
            period: exp.period,
            description: exp.description,
            technologies: exp.technologies,
          }))}
        />
      </div>
      {/* Education & Certifications */}
      <div className="experience__grid">
        {/* Education */}
        <div className="experience__education">
          <h3 className="experience__education-title">
            <Users size={24} className="experience__education-title-icon" />
            Educación
          </h3>
          <div className="experience__education-list">
            {education.map((edu, index) => (
              <div key={index} className="experience__education-item">
                <div className="experience__education-header">
                  <h4 className="experience__education-degree">{edu.degree}</h4>
                  <span className="experience__education-period">
                    {edu.period}
                  </span>
                </div>
                <p className="experience__education-institution">
                  {edu.institution}
                </p>
                <p className="experience__education-desc">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Certifications */}
        <div className="experience__certifications">
          <h3 className="experience__certifications-title">
            <Award
              size={24}
              className="experience__certifications-title-icon"
            />
            Certificaciones
          </h3>
          <div className="experience__certifications-list">
            {certifications.map((cert, index) => (
              <div key={index} className="experience__certifications-item">
                <div className="experience__certifications-header">
                  <div>
                    <h4 className="experience__certifications-name">
                      {cert.name}
                    </h4>
                    <p className="experience__certifications-issuer">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="experience__certifications-year">
                    {cert.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ExperienceSection };
