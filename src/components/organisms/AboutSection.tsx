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
                  Mi nombre es Christopher David Erazo Herrera, de Quito,
                  Ecuador 🇪🇨. Mi pasión por la programación empezó al descubrir
                  cómo unas líneas de código generan un alto impacto en nuestras
                  actividades diarias a través de Webs y Apps. Actualmente
                  lidero equipos de desarrollo en el Sector Financiero
                </p>
                <p className="about__main-paragraph">
                  Ingeniero de Software con más de 5 años de experiencia en el
                  desarrollo de aplicaciones móviles y web en el sector
                  financiero. Uno de los proyectos más relevantes en mi
                  trayectoria fue el desarrollo del flujo digital para la
                  apertura de la Cuenta Ahorro Flexible de Banco Pichincha, una
                  de las más grandes entidades financieras del Ecuador. Esta
                  solución tuvo un impacto significativo en la forma de ahorrar
                  de los clientes, fortaleciendo la estrategia de captación
                  digital.
                </p>
                <p className="about__main-paragraph">
                  Mi propósito es seguir creciendo profesionalmente, liderando o
                  participando en proyectos que generen un alto impacto, tanto
                  en startups en etapa inicial como en empresas consolidadas.
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
