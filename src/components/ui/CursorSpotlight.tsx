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
  if (isMobile) {
    return <>{children}</>;
  }

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Update CSS custom properties for the spotlight effect
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor-spotlight"
      style={{
        backgroundColor: "#0a192f",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};
