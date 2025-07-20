import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "primary",
  size = "medium",
  children,
  className,
}) => {
  const baseClasses = "badge";
  const variantClasses = {
    primary: "badge--primary",
    secondary: "badge--secondary",
    outline: "badge--outline",
  };
  const sizeClasses = {
    small: "badge--small",
    medium: "",
    large: "badge--large",
  };

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  return <span className={classes}>{children}</span>;
};
