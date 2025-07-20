import React from "react";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "medium",
  className = "",
}) => {
  const sizeClasses = {
    small: "loading-spinner--small",
    medium: "loading-spinner--medium",
    large: "loading-spinner--large",
  };

  return (
    <div className={`loading-spinner ${sizeClasses[size]} ${className}`}>
      <div className="loading-spinner__circle"></div>
      <div className="loading-spinner__circle"></div>
      <div className="loading-spinner__circle"></div>
    </div>
  );
};
