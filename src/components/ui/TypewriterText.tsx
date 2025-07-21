"use client";

import React, { useState, useEffect, useRef } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 100,
  delay = 0,
  className = "",
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Reiniciar el texto y el índice
    setDisplayText("");
    setCurrentIndex(0);
    // Limpiar cualquier timer previo
    if (timerRef.current) clearTimeout(timerRef.current);

    // Iniciar la animación después del delay
    timerRef.current = setTimeout(() => {
      setCurrentIndex(0);
    }, delay);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [text, delay]);

  useEffect(() => {
    if (currentIndex < text.length) {
      timerRef.current = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);
      }, speed);
    } else if (onComplete) {
      onComplete();
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, text, speed, onComplete]);

  return (
    <span className={`typewriter-text ${className}`}>
      {displayText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};
