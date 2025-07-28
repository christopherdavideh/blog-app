import { SiteConfig } from "@/types";
import { Github, Linkedin, Twitter } from "lucide-react";

export const siteConfig: SiteConfig = {
  title: "Christopher David Erazo Herrera",
  description:
    "Software Developer especializado en React, Angular, Java SpringBoot, C# .NET y desarrollo móvil. Creando experiencias digitales excepcionales.",
  url: "https://christopher-blog-df3dc.netlify.app",
  author: {
    name: "Christopher David Erazo Herrera",
    email: "christopherdavideh@gmail.com",
    image: "/images/christopher-profile.jpg",
    bio: "Software Developer con 4+ años de experiencia en desarrollo web y móvil. Apasionado por crear soluciones innovadoras y escalables.",
  },
  navigation: [
    { id: "sobre-mi", href: "/about", label: "About" },
    { id: "proyectos", href: "/projects", label: "Projects" },
    { id: "blog", href: "/blog", label: "Blog" },
    { id: "contacto", href: "/contact", label: "Contact" },
  ],

  mobileNavigation: [
    { id: "inicio", href: "/", label: "Home" },
    { id: "sobre-mi", href: "/about", label: "About" },
    { id: "proyectos", href: "/projects", label: "Projects" },
    { id: "blog", href: "/blog", label: "Blog" },
    { id: "contacto", href: "/contact", label: "Contact" },
  ],
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
  ],
  cvUrl: "/cv.pdf",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/christopherdavideh",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/christopherdavideh/",
      icon: "linkedin",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/christopdavideh",
      icon: "twitter",
    },
  ],
  contact: {
    email: "christopherdavideh@gmail.com",
    linkedin: "https://www.linkedin.com/in/christopherdavideh/",
    github: "https://github.com/christopherdavideh",
    twitter: "https://twitter.com/christopdavideh",
  },
};
