import { SiteConfig } from "@/types";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const siteConfig: SiteConfig = {
  title: "Christopher David Erazo Herrera",
  description:
    "Software Developer especializado en React, Angular, Java SpringBoot, C# .NET y desarrollo móvil. Creando experiencias digitales excepcionales.",
  url: "https://christopherdavideh.com",
  author: {
    name: "Christopher David Erazo Herrera",
    email: "christopher.erazo.herrera@gmail.com",
    image: "/images/christopher-profile.jpg",
    bio: "Software Developer con 5 años de experiencia en desarrollo web y móvil. Apasionado por crear soluciones innovadoras y escalables.",
  },
  navigation: [
    { id: "inicio", href: "/", label: "Inicio" },
    // { id: "sobre-mi", href: "/about", label: "Sobre mí" },
    { id: "proyectos", href: "/projects", label: "Proyectos" },
    { id: "blog", href: "/blog", label: "Blog" },
    { id: "contacto", href: "/contact", label: "Contacto" },
  ],
  // Consolidado: una única fuente de social links
  socialLinks: [
    {
      href: "https://github.com/christopherdavideh",
      label: "GitHub",
      icon: Github,
    },
    {
      href: "https://www.linkedin.com/in/christopherdavideh/",
      label: "LinkedIn",
      icon: Linkedin,
    },
    {
      href: "https://twitter.com/christopdavideh",
      label: "Twitter",
      icon: Twitter,
    },
    {
      href: "mailto:christopher.erazo.herrera@gmail.com",
      label: "Email",
      icon: Mail,
    },
  ],
  cvUrl: "/cv.pdf",
};
