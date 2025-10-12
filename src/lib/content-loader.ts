import { BlogPost, Project } from "@/types";
import fs from "fs";
import path from "path";

const BLOG_DIRECTORY = path.join(process.cwd(), "src/content/blog");
const PROJECTS_DIRECTORY = path.join(process.cwd(), "src/content/projects");

function loadContentFromDirectory<T>(directory: string): T[] {
  try {
    if (!fs.existsSync(directory)) {
      console.warn(`⚠️  Directorio no encontrado: ${directory}`);
      return [];
    }

    const files = fs.readdirSync(directory);

    const jsonFiles = files.filter(
      (file) => file.endsWith(".json") && !file.startsWith("_")
    );

    const content = jsonFiles.map((filename) => {
      const filePath = path.join(directory, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");

      try {
        return JSON.parse(fileContent) as T;
      } catch (error) {
        console.error(`❌ Error parseando ${filename}:`, error);
        return null;
      }
    });

    // Filtrar nulls (archivos con errores) y retornar
    return content.filter((item): item is T => item !== null);
  } catch (error) {
    console.error(`❌ Error cargando contenido desde ${directory}:`, error);
    return [];
  }
}
export function loadAllBlogPosts(): BlogPost[] {
  const posts = loadContentFromDirectory<BlogPost>(BLOG_DIRECTORY);

  return posts.sort((a, b) => {
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });
}

export function loadAllProjects(): Project[] {
  const projects = loadContentFromDirectory<Project>(PROJECTS_DIRECTORY);

  // Ordenar: featured primero, luego por fecha
  return projects.sort((a, b) => {
    // Featured primero
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;

    // Luego por fecha
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });
}

export function getBlogPostById(id: string): BlogPost | undefined {
  const posts = loadAllBlogPosts();
  return posts.find((post) => post.id === id);
}

export function getProjectById(id: string): Project | undefined {
  const projects = loadAllProjects();
  return projects.find((project) => project.id === id);
}

export function getAllBlogPostIds(): string[] {
  const posts = loadAllBlogPosts();
  return posts.map((post) => post.id);
}

export function getAllProjectIds(): string[] {
  const projects = loadAllProjects();
  return projects.map((project) => project.id);
}

export function getAllBlogTags(): string[] {
  const posts = loadAllBlogPosts();
  const allTags = posts.flatMap((post) => post.tags);
  return Array.from(new Set(allTags)).sort();
}

export function getAllProjectTechnologies(): string[] {
  const projects = loadAllProjects();
  const allTechs = projects.flatMap((project) => project.technologies);
  return Array.from(new Set(allTechs)).sort();
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  const posts = loadAllBlogPosts();
  return posts.filter((post) => post.tags.includes(tag));
}

export function getProjectsByCategory(category: string): Project[] {
  const projects = loadAllProjects();
  return projects.filter((project) => project.category === category);
}

export function getFeaturedProjects(): Project[] {
  const projects = loadAllProjects();
  return projects.filter((project) => project.featured);
}

export function getRecentBlogPosts(limit: number = 3): BlogPost[] {
  const posts = loadAllBlogPosts();
  return posts.slice(0, limit);
}
