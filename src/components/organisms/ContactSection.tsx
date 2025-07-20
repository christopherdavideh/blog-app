import { Mail, MapPin, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ContactSection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      className={`contact ${
        isVisible ? "scroll-animate visible" : "scroll-animate"
      }`}
    >
      <div className="contact__container">
        <div className="contact__header">
          <h2 className="contact__title animate--fade-in animate--delay-1">
            ¡Trabajemos Juntos!
          </h2>
          <p className="contact__subtitle animate--fade-in animate--delay-2">
            ¿Tienes un proyecto en mente? ¡Hablemos sobre cómo puedo ayudarte a
            hacerlo realidad!
          </p>
        </div>

        <div className="contact__content">
          <div className="contact__info animate--fade-in animate--delay-3">
            <h3 className="contact__info-title">Información de Contacto</h3>
            <div className="contact__info-items">
              <div className="contact__info-item hover--scale">
                <Mail className="contact__info-icon" />
                <div>
                  <h4>Email</h4>
                  <p>christopher@example.com</p>
                </div>
              </div>
              <div className="contact__info-item hover--scale">
                <MapPin className="contact__info-icon" />
                <div>
                  <h4>Ubicación</h4>
                  <p>Colombia</p>
                </div>
              </div>
              <div className="contact__info-item hover--scale">
                <Clock className="contact__info-icon" />
                <div>
                  <h4>Disponibilidad</h4>
                  <p>Disponible para proyectos freelance</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact__form animate--fade-in animate--delay-4">
            <div className="contact__form-group">
              <label htmlFor="name" className="contact__form-label">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="contact__form-input hover--bright"
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="email" className="contact__form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact__form-input hover--bright"
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="message" className="contact__form-label">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="contact__form-textarea hover--bright"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="button button--primary hover--lift"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
