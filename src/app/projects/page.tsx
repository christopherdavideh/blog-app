import ProjectsPage from "@/components/pages/projects/ProjectsPage";

export const metadata = {
  title: "Proyectos | Christopher Erazo - Desarrollador Full-Stack",
  description:
    "Explora proyectos en desarrollo web, móvil y APIs. Descubre cómo puedo aportar valor a tu empresa o idea.",
  openGraph: {
    title: "Proyectos | Christopher Erazo - Desarrollador Full-Stack",
    description: "Explora proyectos en desarrollo web, móvil y APIs.",
    url: "https://tusitio.com/projects",
    type: "website",
    locale: "es_ES",
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
  return <ProjectsPage />;
}
