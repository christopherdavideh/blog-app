import { notFound } from "next/navigation";
import { getProjectById, getAllProjectIds } from "@/content/projects";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";
import ProjectDetailPage from "@/components/pages/projects/ProjectDetailPage";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

// Generar metadata dinámica para cada proyecto (SEO optimizado)
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Christopher Erazo`,
      description: project.description,
      url: `${siteConfig.url}/projects/${project.id}`,
      type: "article",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Christopher Erazo`,
      description: project.description,
      images: [project.image],
    },
  };
}

// Generar rutas estáticas en build time (optimización de rendimiento)
export async function generateStaticParams() {
  const projectIds = getAllProjectIds();

  return projectIds.map((id) => ({
    id: id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
