"use client";

import Link from "next/link";
import { TypewriterText } from "@/components/ui/TypewriterText";
import React, { useState } from "react";

import Image from "next/image";

export default function HeroSection() {
  const [showSubtitle, setShowSubtitle] = useState(false);

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title-name">
            <TypewriterText
              text="Christopher Erazo"
              speed={70}
              delay={400}
              onComplete={() => setShowSubtitle(true)}
            />
          </h1>
          <h2 className="hero__subtitle-main">
            {showSubtitle && (
              <TypewriterText text="Software Developer" speed={60} />
            )}
          </h2>
          <p className="hero__subtitle-desc animate--slide-up-stagger">
            Creando experiencias digitales excepcionales.
          </p>
          <div className="hero__actions hero__actions--fullwidth animate--slide-up-stagger">
            <Link
              href="/projects"
              className="button button--primary button--block"
            >
              See projects
            </Link>
            <Link
              href="/contact"
              className="button button--secondary button--block"
            >
              Contact
            </Link>
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
    </section>
  );
}
