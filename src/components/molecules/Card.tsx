import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { Calendar, ArrowRight, ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";

export interface CardProps {
  variant?: "default" | "blog" | "project";
  children: React.ReactNode;
  className?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", children, className }, ref) => {
    const baseClasses = "card";
    const variantClasses = {
      default: "",
      blog: "card--blog",
      project: "card--project",
    };

    const classes = cn(baseClasses, variantClasses[variant], className);

    return (
      <div ref={ref} className={classes}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

// Blog Card Component
export interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  onReadMore?: () => void;
  className?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  date,
  readTime,
  tags,
  featured = false,
  onReadMore,
  className,
}) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <Card
      variant="blog"
      ref={elementRef}
      className={`${
        isVisible ? "scroll-animate--scale visible" : "scroll-animate--scale"
      } hover--lift ${className || ""}`.trim()}
    >
      {featured && (
        <Badge
          variant="primary"
          size="small"
          className="card__badge animate--pulse"
        >
          Destacado
        </Badge>
      )}
      <div className="card__image hover--bright">
        <div className="card__logo">CE</div>
      </div>
      <div className="card__content">
        <div className="card__meta">
          <div className="card__meta-item">
            <Calendar size={16} />
            {new Date(date).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <span>•</span>
          <span>{readTime}</span>
        </div>
        <h2 className="card__title">{title}</h2>
        <p className="card__excerpt">{excerpt}</p>
        <div className="card__tags">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="card__tag hover--scale">
              {tag}
            </span>
          ))}
        </div>
        <button className="card__action hover--glow" onClick={onReadMore}>
          Leer más
          <ArrowRight size={16} />
        </button>
      </div>
    </Card>
  );
};

// Project Card Component
export interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  links?: {
    demo?: string;
    github?: string;
  };
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  technologies,
  links,
  className,
}) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <Card
      variant="project"
      ref={elementRef}
      className={`${
        isVisible ? "scroll-animate--scale visible" : "scroll-animate--scale"
      } hover--lift ${className || ""}`.trim()}
    >
      <div className="card__header">
        <h3 className="card__title">{title}</h3>
        <p className="card__subtitle">{subtitle}</p>
      </div>
      <div className="card__content">
        <p>{description}</p>
      </div>
      <div className="card__footer">
        <div className="card__technologies">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              size="small"
              className="hover--scale"
            >
              {tech}
            </Badge>
          ))}
        </div>
        {links && (
          <div className="card__links">
            {links.demo && (
              <Button
                variant="ghost"
                size="small"
                icon={<ExternalLink size={16} />}
                className="hover--glow"
              >
                Demo
              </Button>
            )}
            {links.github && (
              <Button
                variant="ghost"
                size="small"
                icon={<Github size={16} />}
                className="hover--glow"
              >
                GitHub
              </Button>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};
