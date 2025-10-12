"use client";

import Image from "next/image";

const AboutSection = () => {
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
                  Soy Christopher Erazo, Ingeniero de Software con más de 5 años
                  de experiencia y líder de equipos de desarrollo en el sector
                  financiero. Mi especialidad es la creación de aplicaciones web
                  que transforman la experiencia del usuario.
                </p>
                <p className="about__main-paragraph">
                  En 2023 y 2024, un hito fundamental en mi carrera fue liderar
                  el desarrollo de los flujos digitales "Ahorro Flexible" y
                  "Cuenta Joven" para Banco Pichincha, soluciones clave que
                  fortalecieron la estrategia de captación digital a nivel
                  nacional.
                </p>
                <p className="about__main-paragraph">
                  Mi objetivo es seguir colaborando en proyectos desafiantes, ya
                  sea en startups o en empresas consolidadas, para construir
                  soluciones tecnológicas que marquen la diferencia.
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
          {/* <div className="about__cv">
            <a
              href="/cv-christopher-erazo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="about__cv-link hover--lift"
            >
              <Download size={20} className="about__cv-icon" />
              Descargar CV
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
