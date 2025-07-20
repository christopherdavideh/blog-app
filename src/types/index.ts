export interface Project {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured: boolean;
  category: "web" | "mobile" | "api" | "fullstack";
  publishedAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  image?: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  author: {
    name: string;
    image: string;
  };
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavigationItem {
  id: string;
  href: string;
  label: string;
}

export interface SocialLinkWithIcon {
  href: string;
  label: string;
  icon: any;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "devops" | "mobile";
  level: number;
  icon: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  technologies: string[];
  achievements: string[];
}

export interface Contact {
  email: string;
  linkedin: string;
  github: string;
  twitter?: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  author: {
    name: string;
    email: string;
    image: string;
    bio: string;
  };
  navigation: NavigationItem[];
  socialLinks: SocialLinkWithIcon[];
  cvUrl: string;
  socials: SocialLink[];
  contact: Contact;
}
