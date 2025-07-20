import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  icon,
  children,
  className,
  ...props
}) => {
  const baseClasses = "button";
  const variantClasses = {
    primary: "button--primary",
    secondary: "button--secondary",
    ghost: "button--ghost",
  };
  const sizeClasses = {
    small: "button--small",
    medium: "",
    large: "button--large",
  };

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    "hover--lift", // Agregar animación de hover por defecto
    className
  );

  return (
    <button className={classes} {...props}>
      {icon && <span className="button__icon">{icon}</span>}
      {children}
    </button>
  );
};
