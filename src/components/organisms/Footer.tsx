"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/christopherdavideh",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/christopherdavideh/",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/christopdavideh",
      icon: Twitter,
    },
    {
      name: "Email",
      url: "mailto:christopherdavideh@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Bottom Section */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Christopher David Erazo Herrera. Todos los derechos
            reservados.
          </p>
        </div>
        <div className="footer__grid">
          {/* Brand Section */}
          <div className="footer__brand">
            <div className="footer__social">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
