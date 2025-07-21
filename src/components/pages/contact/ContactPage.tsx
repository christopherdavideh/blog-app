"use client";

import { useState } from "react";
import { Header } from "@/components/organisms/Header";
import { Input } from "@/components/atoms/Input";
import { Button } from "@/components/atoms/Button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío del formulario
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    // Aquí se implementaría la lógica real de envío
    console.log("Formulario enviado:", formData);
  };

  const handleReset = (): void => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-page__hero">
        <div className="contact-page__hero-content">
          <h1 className="contact-page__hero-title">Hablemos</h1>
          <div className="contact-page__hero-divider"></div>
          <p className="contact-page__hero-description">
            ¿Tienes un proyecto en mente? ¿Quieres colaborar? ¡Me encantaría
            escuchar de ti!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-page__content">
        <div className="contact-page__content-container">
          <div className="contact-page__form">
            <h2 className="contact-page__form-title">Envíame un mensaje</h2>

            <form onSubmit={handleSubmit}>
              <div className="contact-page__form-group">
                <label htmlFor="name" className="contact-page__form-label">
                  Nombre
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="contact-page__form-input"
                />
              </div>

              <div className="contact-page__form-group">
                <label htmlFor="email" className="contact-page__form-label">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="contact-page__form-input"
                />
              </div>

              <div className="contact-page__form-group">
                <label htmlFor="subject" className="contact-page__form-label">
                  Asunto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="contact-page__form-input"
                />
              </div>

              <div className="contact-page__form-group">
                <label htmlFor="message" className="contact-page__form-label">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="contact-page__form-textarea"
                  rows={6}
                />
              </div>

              <div className="contact-page__form-actions">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="contact-page__form-submit"
                >
                  {isSubmitting ? (
                    <>
                      <div className="contact-page__form-spinner">⏳</div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send
                        size={16}
                        className="contact-page__form-send-icon"
                      />
                      Enviar mensaje
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  variant="secondary"
                  onClick={handleReset}
                  className="contact-page__form-reset"
                >
                  Limpiar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
