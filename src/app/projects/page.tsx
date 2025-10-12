import ProjectsPage from "@/components/pages/projects/ProjectsPage";
import { siteConfig } from "@/lib/site-config";
import { loadAllProjects } from "@/lib/content-loader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Explora proyectos en desarrollo web, móvil y APIs. Descubre cómo puedo aportar valor a tu empresa o idea.",
  openGraph: {
    title: "Proyectos | Christopher Erazo - Desarrollador Full-Stack",
    description: "Explora proyectos en desarrollo web, móvil y APIs.",
    url: `${siteConfig.url}/projects`,
    type: "website",
    images: [
      {
        url: "/images/todo-react.png",
        width: 1200,
        height: 630,
        alt: "Proyectos | Christopher Erazo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyectos | Christopher Erazo - Desarrollador Full-Stack",
    description: "Explora proyectos en desarrollo web, móvil y APIs.",
    images: ["/images/todo-react.png"],
  },
};

export default function Projects() {
  // Cargar proyectos en el servidor
  const projects = loadAllProjects();
  
  return <ProjectsPage projects={projects} />;
}
