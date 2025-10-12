"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__subtitle-desc animate--slide-up-stagger">
            👋🏼 Hola, mi nombre es
          </p>
          <h1 className="hero__title-name">Christopher David Erazo Herrera</h1>
          <h2 className="hero__subtitle-main">Ingeniero de Software</h2>
          <p className="hero__subtitle-desc animate--slide-up-stagger">
            +5 años de experiencia creando experiencias digitales excepcionales.{" "}
            <br />
            <span className="hero__subtitle-desc__location">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 26 26"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
              Quito, Ecuador 🇪🇨.
            </span>
          </p>
          <div className="hero__social animate--slide-up-stagger">
            {siteConfig.socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-link"
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="hero__visual animate--zoom-in">
          <div className="hero__image-container hover--tilt">
            <div className="hero__image-placeholder animate--morphing">
              <Image
                src="/images/christopher.png"
                alt="Christopher Erazo"
                className="hero__image"
                width={300}
                height={300}
                priority
                fill={false}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hero__scroll-indicator">
        <span className="hero__arrow-down">▾</span>
      </div>
    </section>
  );
}
