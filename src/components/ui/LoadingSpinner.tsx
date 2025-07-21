import React from "react";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "large",
  className = "",
}) => {
  const sizePx = size === "small" ? 32 : size === "large" ? 96 : 48;
  return (
    <div
      className={`loading-spinner loading-spinner--circle ${className}`}
      style={{ width: sizePx, height: sizePx }}
    >
      <svg
        className="loading-spinner__svg"
        width={sizePx}
        height={sizePx}
        viewBox={`0 0 ${sizePx} ${sizePx}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          className="loading-spinner__arc"
          cx={sizePx / 2}
          cy={sizePx / 2}
          r={sizePx / 2 - 6}
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={Math.PI * (sizePx - 12)}
          strokeDashoffset={Math.PI * (sizePx - 12) * 0.25}
        />
      </svg>
    </div>
  );
};
