// Funciones de utilidad para Analytics (separación de responsabilidades)

// Configuración de Analytics
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

// Tipos de eventos
export type GtagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

// Track page views
export const pageview = (url: string): void => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({ action, category, label, value }: GtagEvent): void => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Eventos predefinidos para el portafolio
export const trackProjectView = (projectId: string): void => {
  event({
    action: "view_project",
    category: "Projects",
    label: projectId,
  });
};

export const trackBlogPostView = (postId: string): void => {
  event({
    action: "view_blog_post",
    category: "Blog",
    label: postId,
  });
};

export const trackContactFormSubmit = (): void => {
  event({
    action: "submit_contact_form",
    category: "Contact",
    label: "Contact Form",
  });
};

export const trackCVDownload = (): void => {
  event({
    action: "download_cv",
    category: "Engagement",
    label: "CV Download",
  });
};

export const trackExternalLink = (url: string): void => {
  event({
    action: "click_external_link",
    category: "Engagement",
    label: url,
  });
};

// Declaración de tipos para window.gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}
