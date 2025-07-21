"use client";

import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        setCurrentIndex(0);
      }, delay);
      return () => clearTimeout(delayTimer);
    } else {
      setCurrentIndex(0);
    }
  }, [delay, text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <span className={`typewriter-text ${className}`}>
      {displayText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};
