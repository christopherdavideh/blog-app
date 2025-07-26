"use client";

import { useEffect, useState } from "react";

interface CursorSpotlightProps {
  children: React.ReactNode;
  isMobile?: boolean;
}

export const CursorSpotlight = ({
  children,
  isMobile = false,
}: CursorSpotlightProps) => {
  // Detectar si el body tiene la clase 'light' (modo claro)
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsLight(document.body.classList.contains("light"));
    };
    checkTheme();
    window.addEventListener("storage", checkTheme);
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => {
      window.removeEventListener("storage", checkTheme);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
        document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isMobile]);

  if (isMobile) {
    return (
      <div className={isLight ? "mobile-bg-light" : "mobile-bg-dark"}>
        {children}
      </div>
    );
  }

  return (
    <div className="cursor-spotlight">
      {children}
    </div>
  );
};
