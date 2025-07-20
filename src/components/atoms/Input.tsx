import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: boolean;
  label?: string;
}

export const Input: React.FC<InputProps> = ({
  icon,
  error = false,
  label,
  className,
  ...props
}) => {
  const inputClasses = cn(
    "input",
    {
      "input--error": error,
      "input--search": icon,
    },
    className
  );

  if (icon) {
    return (
      <div className="input-group">
        <span className="input__icon">{icon}</span>
        <input className={inputClasses} {...props} />
      </div>
    );
  }

  return <input className={inputClasses} {...props} />;
};
