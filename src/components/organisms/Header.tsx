"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart, Download, Sun, Moon } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/atoms/Button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isLight, setIsLight] = useState(false);
  const { elementRef, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "light") {
        setIsLight(true);
        document.body.classList.add("light");
      }
    }
  }, []);

  const toggleTheme = () => {
    setIsLight((prev) => {
      const next = !prev;
      if (next) {
        document.body.classList.add("light");
        localStorage.setItem("theme", "light");
      } else {
        document.body.classList.remove("light");
        localStorage.setItem("theme", "dark");
      }
      return next;
    });
  };

  const isActive = (path: string): boolean => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const handleMenuToggle = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <header
      ref={elementRef}
      className={`header ${isVisible ? "animate--fade-in" : ""}`}
    >
      <div className="header__container">
        <Link href="/" className="header__logo hover--scale">
          <span className="header__logo-text">CD</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`header__nav-link ${
                isActive(item.href) ? "header__nav-link--active" : ""
              } hover--bright`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header__nav-left">
          <button
            className="header__theme-toggle hover--glow"
            aria-label={isLight ? "Activar modo oscuro" : "Activar modo claro"}
            onClick={toggleTheme}
          >
            {isLight ? (
              <Moon className="header__theme-icon" />
            ) : (
              <Sun className="header__theme-icon" />
            )}
          </button>
          {/* Mobile Navigation */}
          <div className="header__mobile">
            <div className="header__social-links">
              {siteConfig.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="header__social-link"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <Button
              variant="ghost"
              size="small"
              icon={isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              onClick={handleMenuToggle}
              className="header__menu-button"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`header__mobile-menu${
          isMenuOpen ? " header__mobile-menu--open" : ""
        }`}
      >
        <nav className="header__mobile-nav">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`header__nav-link${
                isActive(item.href) ? " header__nav-link--active" : ""
              }`}
              onClick={handleNavClick}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header__mobile-actions">
          <a
            href={siteConfig.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="header__cv-button"
          >
            <Download size={16} />
            Descargar CV
          </a>
        </div>
      </div>
    </header>
  );
};
