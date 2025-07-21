import Link from "next/link";
import { FloatingParticles } from "@/components/ui/FloatingParticles";
import { TypewriterText } from "@/components/ui/TypewriterText";

export default function HeroSection() {
  return (
    <section className="hero">
      <FloatingParticles count={15} />
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__title-greeting animate--text-reveal animate--delay-1">
              Hola, soy
            </span>
            <span className="hero__title-name animate--bounce-in animate--delay-2">
              <TypewriterText
                text="Christopher"
                speed={150}
                delay={800}
                className="typewriter-text--large typewriter-text--accent typewriter-text--neon"
              />
            </span>
          </h1>
          <p className="hero__subtitle animate--text-reveal animate--delay-3">
            <TypewriterText
              text="Desarrollador Full-Stack apasionado por crear experiencias digitales excepcionales"
              speed={50}
              delay={2000}
              className="typewriter-text--medium"
            />
          </p>
          <div className="hero__actions animate--slide-up-stagger animate--delay-4">
            <Link
              href="/projects"
              className="button button--primary hover--neon"
            >
              Ver Proyectos
            </Link>
            <Link
              href="/contact"
              className="button button--secondary hover--morph"
            >
              Contactar
            </Link>
          </div>
        </div>

        <div className="hero__visual animate--tilt-in animate--delay-5">
          <div className="hero__image-container hover--tilt">
            <div className="hero__image-placeholder animate--morphing">
              <div className="hero__image-icon animate--neon-pulse">👨‍💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
