"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Bottom Section */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} {siteConfig.author.name}. Todos los derechos
            reservados.
          </p>
        </div>
        <div className="footer__grid">
          {/* Brand Section */}
          <div className="footer__brand">
            <div className="footer__social">
              {siteConfig.socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    aria-label={social.label}
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
