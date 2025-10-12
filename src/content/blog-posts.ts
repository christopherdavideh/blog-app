/**
 * @deprecated Este archivo se mantiene por compatibilidad.
 * El contenido ahora se carga dinámicamente desde src/content/blog/
 * Usa las funciones de src/lib/content-loader.ts en su lugar.
 */

import { BlogPost } from "@/types";
import {
  loadAllBlogPosts,
  getBlogPostById as getPostById,
  getAllBlogPostIds as getPostIds,
} from "@/lib/content-loader";

// Carga dinámica desde JSON files
export const blogPosts: BlogPost[] = loadAllBlogPosts();

// Re-exportar funciones útiles
export const getBlogPostById = getPostById;
export const getAllBlogPostIds = getPostIds;

// Para agregar un nuevo blog post:
// 1. Crea un archivo JSON en src/content/blog/<slug>.json
// 2. Copia la estructura de algún blog existente
// 3. El sistema lo cargará automáticamente
