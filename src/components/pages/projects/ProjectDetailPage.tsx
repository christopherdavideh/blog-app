"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github as GithubIcon, ArrowLeft, Calendar, Tag } from "lucide-react";
import { Project } from "@/types";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";

interface ProjectDetailPageProps {
  project: Project;
}

export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <div className="project-detail">
      <div className="project-detail__container">
        {/* Back Button */}
        <Link href="/projects" className="project-detail__back hover--bright">
          <ArrowLeft size={20} />
          Volver a Proyectos
        </Link>

        {/* Header */}
        <header className="project-detail__header">
          <div className="project-detail__header-content">
            {project.featured && (
              <Badge variant="primary" className="animate--pulse">
                Destacado
              </Badge>
            )}
            <h1 className="project-detail__title">{project.title}</h1>
            <p className="project-detail__description">{project.description}</p>

            {/* Meta Information */}
            <div className="project-detail__meta">
              <div className="project-detail__meta-item">
                <Calendar size={16} />
                <span>
                  {new Date(project.publishedAt).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="project-detail__meta-item">
                <Tag size={16} />
                <span className="project-detail__category">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Technologies */}
            <div className="project-detail__technologies">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="hover--scale">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="project-detail__actions">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" icon={<GithubIcon size={20} />}>
                    Ver Código
                  </Button>
                </Link>
              )}
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="secondary"
                    icon={<ExternalLink size={20} />}
                  >
                    Ver Demo
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Project Image */}
          <div className="project-detail__image-wrapper">
            <div className="project-detail__image">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </header>

        {/* Content */}
        <article className="project-detail__content">
          <div className="project-detail__content-inner">
            {/* Renderizar contenido markdown como HTML */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{
                __html: (() => {
                  const lines = project.content.split("\n");
                  const result: string[] = [];
                  let inCodeBlock = false;
                  let inList = false;
                  let codeBlockContent: string[] = [];

                  for (let i = 0; i < lines.length; i++) {
                    const line = lines[i];
                    const trimmedLine = line.trim();

                    if (trimmedLine.startsWith("```")) {
                      if (inCodeBlock) {
                        result.push(`<pre><code>${codeBlockContent.join("\n")}</code></pre>`);
                        codeBlockContent = [];
                        inCodeBlock = false;
                      } else {
                        inCodeBlock = true;
                      }
                      continue;
                    }

                    if (inCodeBlock) {
                      codeBlockContent.push(line);
                      continue;
                    }

                    if (trimmedLine.startsWith("### ")) {
                      if (inList) { result.push("</ul>"); inList = false; }
                      result.push(`<h3>${trimmedLine.substring(4)}</h3>`);
                      continue;
                    }
                    if (trimmedLine.startsWith("## ")) {
                      if (inList) { result.push("</ul>"); inList = false; }
                      result.push(`<h2>${trimmedLine.substring(3)}</h2>`);
                      continue;
                    }
                    if (trimmedLine.startsWith("# ")) {
                      if (inList) { result.push("</ul>"); inList = false; }
                      result.push(`<h1>${trimmedLine.substring(2)}</h1>`);
                      continue;
                    }

                    if (trimmedLine.startsWith("- ") || trimmedLine.startsWith("* ")) {
                      if (!inList) {
                        result.push("<ul>");
                        inList = true;
                      }
                      result.push(`<li>${trimmedLine.substring(2)}</li>`);
                      continue;
                    } else if (inList) {
                      result.push("</ul>");
                      inList = false;
                    }

                    if (trimmedLine === "---") {
                      result.push("<hr />");
                      continue;
                    }

                    if (!trimmedLine) {
                      continue;
                    }

                    let processedLine = trimmedLine;
                    processedLine = processedLine.replace(/`([^`]+)`/g, "<code>$1</code>");
                    processedLine = processedLine.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
                    processedLine = processedLine.replace(/\*([^*]+)\*/g, "<em>$1</em>");

                    result.push(`<p>${processedLine}</p>`);
                  }

                  if (inList) {
                    result.push("</ul>");
                  }

                  return result.join("");
                })(),
              }}
            />
          </div>
        </article>

        {/* Footer CTA */}
        <div className="project-detail__footer">
          <div className="project-detail__cta">
            <h2>¿Te interesa este proyecto?</h2>
            <p>Contáctame para discutir cómo puedo ayudarte con tu próxima idea</p>
            <Link href="/contact">
              <Button variant="primary">Contactar</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
