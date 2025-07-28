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
import { ExperienceSection } from "@/components/organisms/ExperienceSection";

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
                  I am Ecuadorian, originally from Quito, self-taught and
                  passionate about software development technologies, who likes
                  to continue discovering new things.
                </p>
                <p className="about__main-paragraph">
                  Software Developer with four years of experience in Web
                  Application Development. I have participated in the
                  development of mobile applications with Xamarin.Forms, now
                  MAUI and some web applications for the financial sector using
                  technologies such as React and Angular.
                </p>
                <p className="about__main-paragraph">
                  I am self-taught and passionate about software development
                  technologies who likes to keep discovering new things. My
                  purpose is to continue expanding professionally, enhancing my
                  skills and proposing my ideas, which support the constant
                  development of Startups or Companies.
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="about__main-image">
              <Image
                src="/images/christopher.png"
                alt="Christopher Erazo"
                className="about__image"
                width={800}
                height={500}
                priority
                fill={false}
              />
            </div>
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
      </div>
    </section>
  );
};

export default AboutSection;
