"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { BlogPost } from "@/types";
import { Badge } from "@/components/atoms/Badge";
import { siteConfig } from "@/lib/site-config";

interface BlogPostDetailPageProps {
  post: BlogPost;
}

export default function BlogPostDetailPage({ post }: Readonly<BlogPostDetailPageProps>) {
  return (
    <div className="blog-post-detail">
      <div className="blog-post-detail__container">
        {/* Back Button */}
        <Link href="/blog" className="blog-post-detail__back hover--bright">
          <ArrowLeft size={20} />
          Volver al Blog
        </Link>

        {/* Header */}
        <header className="blog-post-detail__header">
          {post.image && (
            <div className="blog-post-detail__image-wrapper">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}

          <div className="blog-post-detail__header-content">
            <h1 className="blog-post-detail__title">{post.title}</h1>
            <p className="blog-post-detail__description">{post.description}</p>

            {/* Meta Information */}
            <div className="blog-post-detail__meta">
              <div className="blog-post-detail__meta-item">
                <div className="blog-post-detail__author">
                  {post.author.image && (
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="blog-post-detail__author-image"
                    />
                  )}
                  <span>{post.author.name}</span>
                </div>
              </div>

              <div className="blog-post-detail__meta-item">
                <Calendar size={16} />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>

              <div className="blog-post-detail__meta-item">
                <Clock size={16} />
                <span>{post.readingTime} de lectura</span>
              </div>
            </div>

            {/* Tags */}
            <div className="blog-post-detail__tags">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="hover--scale">
                  <Tag size={14} />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </header>

        {/* Content */}
        <article className="blog-post-detail__content">
          <div className="blog-post-detail__content-inner">
            {/* Renderizar contenido markdown como HTML */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{
                __html: (() => {
                  const lines = post.content.split("\n");
                  const result: string[] = [];
                  let inCodeBlock = false;
                  let inList = false;
                  let codeBlockContent: string[] = [];

                  for (let i = 0; i < lines.length; i++) {
                    const line = lines[i];
                    const trimmedLine = line.trim();

                    // Manejo de bloques de código
                    if (trimmedLine.startsWith("```")) {
                      if (inCodeBlock) {
                        // Cerrar bloque de código
                        result.push(`<pre><code>${codeBlockContent.join("\n")}</code></pre>`);
                        codeBlockContent = [];
                        inCodeBlock = false;
                      } else {
                        // Abrir bloque de código
                        inCodeBlock = true;
                      }
                      continue;
                    }

                    // Si estamos dentro de un bloque de código
                    if (inCodeBlock) {
                      codeBlockContent.push(line);
                      continue;
                    }

                    // Títulos
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

                    // Listas
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

                    // Separadores
                    if (trimmedLine === "---") {
                      result.push("<hr />");
                      continue;
                    }

                    // Líneas vacías
                    if (!trimmedLine) {
                      continue;
                    }

                    // Código inline
                    let processedLine = trimmedLine;
                    processedLine = processedLine.replace(/`([^`]+)`/g, "<code>$1</code>");
                    
                    // Negritas
                    processedLine = processedLine.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
                    
                    // Cursivas
                    processedLine = processedLine.replace(/\*([^*]+)\*/g, "<em>$1</em>");

                    // Párrafos
                    result.push(`<p>${processedLine}</p>`);
                  }

                  // Cerrar lista si quedó abierta
                  if (inList) {
                    result.push("</ul>");
                  }

                  return result.join("");
                })(),
              }}
            />
          </div>
        </article>

        {/* Footer */}
        <footer className="blog-post-detail__footer">
          <div className="blog-post-detail__share">
            <h3>Compartir este artículo</h3>
            <div className="blog-post-detail__share-buttons">
              <Link
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  post.title
                )}&url=${encodeURIComponent(
                  `${siteConfig.url}/blog/${post.id}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-post-detail__share-btn"
              >
                Twitter
              </Link>
              <Link
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  `${siteConfig.url}/blog/${post.id}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-post-detail__share-btn"
              >
                LinkedIn
              </Link>
            </div>
          </div>

          <div className="blog-post-detail__cta">
            <h2>¿Te gustó este artículo?</h2>
            <p>
              Sígueme para más contenido sobre desarrollo web y mejores prácticas
            </p>
            <Link href="/contact" className="blog-post-detail__cta-btn">
              Contáctame
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
