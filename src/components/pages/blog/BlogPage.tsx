"use client";

import { useState } from "react";
import { Header } from "@/components/organisms/Header";
import { Search } from "@/components/molecules/Search";
import { TagList } from "@/components/molecules/Tag";
import { BlogCard } from "@/components/molecules/Card";
import { Button } from "@/components/atoms/Button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const blogPosts = [
  {
    id: 1,
    title: "Desarrollo Full-Stack con React y Java SpringBoot",
    excerpt:
      "Guía completa para crear aplicaciones web modernas combinando React en el frontend y Java SpringBoot en el backend. Incluye configuración, mejores prácticas y deployment.",
    content: "Contenido completo del post...",
    author: "Christopher David Erazo",
    date: "2024-01-15",
    readTime: "12 min",
    tags: ["React", "Java", "SpringBoot", "Full-Stack"],
    featured: true,
    slug: "desarrollo-fullstack-react-springboot",
  },
  {
    id: 2,
    title: "Creando APIs REST con .NET 6 y PostgreSQL",
    excerpt:
      "Tutorial paso a paso para desarrollar APIs REST robustas usando .NET 6, Entity Framework Core y PostgreSQL. Incluye autenticación JWT y documentación Swagger.",
    content: "Contenido completo del post...",
    author: "Christopher David Erazo",
    date: "2024-01-10",
    readTime: "15 min",
    tags: ["C#", ".NET", "PostgreSQL", "API"],
    featured: true,
    slug: "apis-rest-dotnet-postgresql",
  },
  {
    id: 3,
    title: "Desarrollo Móvil con Flutter: Primeros Pasos",
    excerpt:
      "Introducción al desarrollo móvil multiplataforma con Flutter. Configuración del entorno, widgets básicos y creación de tu primera aplicación.",
    content: "Contenido completo del post...",
    author: "Christopher David Erazo",
    date: "2024-01-05",
    readTime: "18 min",
    tags: ["Flutter", "Mobile", "Dart", "Cross-Platform"],
    featured: true,
    slug: "desarrollo-movil-flutter-primeros-pasos",
  },
  {
    id: 4,
    title: "Optimización de Performance en Aplicaciones React",
    excerpt:
      "Técnicas avanzadas para mejorar el rendimiento de aplicaciones React. Memoización, lazy loading, code splitting y mejores prácticas.",
    content: "Contenido completo del post...",
    author: "Christopher David Erazo",
    date: "2023-12-28",
    readTime: "10 min",
    tags: ["React", "Performance", "JavaScript", "Optimization"],
    featured: false,
    slug: "optimizacion-performance-react",
  },
  {
    id: 5,
    title: "Integración de APIs con JavaScript y Axios",
    excerpt:
      "Cómo consumir APIs REST de manera eficiente usando JavaScript y Axios. Manejo de errores, interceptores y mejores prácticas.",
    content: "Contenido completo del post...",
    author: "Christopher David Erazo",
    date: "2023-12-20",
    readTime: "8 min",
    tags: ["JavaScript", "Axios", "API", "HTTP"],
    featured: false,
    slug: "integracion-apis-javascript-axios",
  },
  {
    id: 6,
    title: "Desarrollo Web con Laravel y MySQL",
    excerpt:
      "Construyendo aplicaciones web completas con Laravel PHP y MySQL. Desde la configuración inicial hasta el deployment en producción.",
    content: "Contenido completo del post...",
    author: "Christopher David Erazo",
    date: "2023-12-15",
    readTime: "20 min",
    tags: ["Laravel", "PHP", "MySQL", "Web Development"],
    featured: false,
    slug: "desarrollo-web-laravel-mysql",
  },
];

const allTags = [
  "React",
  "Java",
  "SpringBoot",
  "C#",
  ".NET",
  "Flutter",
  "JavaScript",
  "PHP",
  "Laravel",
  "MySQL",
  "PostgreSQL",
  "API",
  "Full-Stack",
  "Mobile",
  "Performance",
  "Web Development",
  "Cross-Platform",
  "Optimization",
  "HTTP",
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts based on search and tags
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => post.tags.includes(tag));

    return matchesSearch && matchesTags;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const handleTagToggle = (tag: string): void => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    setCurrentPage(1);
  };

  const handleReadMore = (slug: string): void => {
    // Implementar navegación al post completo
    console.log("Navegar a:", slug);
  };

  return (
    <main className="blog-page">
      {/* Hero Section */}
      <section className="blog-page__hero">
        <div className="blog-page__hero-content">
          <h1 className="blog-page__hero-title">Mi Blog</h1>
          <div className="blog-page__hero-divider"></div>
          <p className="blog-page__hero-description">
            Compartiendo conocimientos, experiencias y mejores prácticas en
            desarrollo de software
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="blog-page__filters">
        <div className="blog-page__filters-content">
          <Search
            placeholder="Buscar posts..."
            value={searchTerm}
            onChange={setSearchTerm}
          />
          <TagList
            tags={allTags}
            selectedTags={selectedTags}
            onTagToggle={handleTagToggle}
          />
        </div>
      </section>

      {/* Blog Posts */}
      <section className="blog-page__posts">
        <div className="blog-page__posts-content">
          {currentPosts.length > 0 ? (
            <div className="blog-page__posts-grid">
              {currentPosts.map((post) => {
                const { elementRef, isVisible } = useScrollAnimation();
                return (
                  <div
                    key={post.id}
                    ref={elementRef}
                    className={`scroll-animate--scale ${
                      isVisible ? "visible" : ""
                    }`}
                  >
                    <BlogCard
                      title={post.title}
                      excerpt={post.excerpt}
                      date={post.date}
                      readTime={post.readTime}
                      tags={post.tags}
                      featured={post.featured}
                      onReadMore={() => handleReadMore(post.slug)}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="blog-page__no-posts">
              <p className="blog-page__no-posts-text">
                No se encontraron posts que coincidan con tu búsqueda.
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="blog-page__pagination">
              <div className="blog-page__pagination-list">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <div key={page} className="blog-page__pagination-item">
                      <Button
                        variant={currentPage === page ? "primary" : "ghost"}
                        size="small"
                        onClick={() => setCurrentPage(page)}
                        className="blog-page__pagination-button"
                      >
                        {page}
                      </Button>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
