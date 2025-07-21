import ContactPage from "@/components/pages/contact/ContactPage";

export const metadata = {
  title: "Contacto | Christopher Erazo - Desarrollador Full-Stack",
  description:
    "Ponte en contacto conmigo para proyectos, colaboraciones o consultas profesionales. Estoy listo para escuchar tus ideas y trabajar juntos.",
  openGraph: {
    title: "Contacto | Christopher Erazo - Desarrollador Full-Stack",
    description:
      "Ponte en contacto conmigo para proyectos, colaboraciones o consultas profesionales.",
    url: "https://tusitio.com/contact",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "/images/LOGO.png",
        width: 1200,
        height: 630,
        alt: "Contacto - Christopher Erazo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Christopher Erazo - Desarrollador Full-Stack",
    description:
      "Ponte en contacto conmigo para proyectos, colaboraciones o consultas profesionales.",
    images: ["/images/LOGO.png"],
  },
};

export default function Contact() {
  return <ContactPage />;
}
