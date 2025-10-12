"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "@/components/molecules/Search";
import { TagList } from "@/components/molecules/Tag";
import { BlogCard } from "@/components/molecules/Card";
import { Button } from "@/components/atoms/Button";
import { BlogPost } from "@/types";

interface BlogPageProps {
  readonly posts: BlogPost[];
  readonly tags: string[];
}

export default function BlogPage({ posts: blogPosts, tags: allTags }: Readonly<BlogPageProps>) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts based on search and tags
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());

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

  const handleReadMore = (id: string): void => {
    router.push(`/blog/${id}`);
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
              {currentPosts.map((post) => (
                <div key={post.id} className="scroll-animate--scale">
                  <BlogCard
                    title={post.title}
                    excerpt={post.description}
                    date={post.publishedAt}
                    readTime={post.readingTime}
                    tags={post.tags}
                    onReadMore={() => handleReadMore(post.id)}
                  />
                </div>
              ))}
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
