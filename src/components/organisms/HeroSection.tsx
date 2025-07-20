import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";

export default function HeroSection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      className={`hero ${
        isVisible ? "scroll-animate visible" : "scroll-animate"
      }`}
    >
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title animate--fade-in animate--delay-1">
            Hola, soy <span className="hero__title-accent">Christopher</span>
          </h1>
          <p className="hero__subtitle animate--fade-in animate--delay-2">
            Desarrollador Full-Stack apasionado por crear experiencias digitales
            excepcionales
          </p>
          <div className="hero__actions animate--fade-in animate--delay-3">
            <Link
              href="/projects"
              className="button button--primary hover--lift"
            >
              Ver Proyectos
            </Link>
            <Link
              href="/contact"
              className="button button--secondary hover--lift"
            >
              Contactar
            </Link>
          </div>
        </div>

        <div className="hero__visual animate--fade-in animate--delay-4">
          <div className="hero__image-container hover--float">
            {/* Placeholder para imagen */}
            <div className="hero__image-placeholder">
              <div className="hero__image-icon animate--pulse">👨‍💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
