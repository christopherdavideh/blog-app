import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import SchemaMarkup from "@/components/organisms/SchemaMarkup";
import ClientLayoutShell from "@/components/ClientLayoutShell";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Christopher Erazo - Ingeniero de Software",
    template: "%s | Christopher Erazo",
  },
  description:
    "Portfolio personal de Christopher Erazo, Ingeniero de Software especializado en React, Node.js y tecnologías modernas.",
  keywords: [
    "desarrollador",
    "full-stack",
    "react",
    "node.js",
    "typescript",
    "portfolio",
    "christopher erazo",
    "software engineer",
  ],
  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  creator: siteConfig.author.name,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    siteName: siteConfig.title,
    title: "Christopher Erazo - Ingeniero de Software",
    description:
      "Portfolio personal de Christopher Erazo, Ingeniero de Software especializado en React, Node.js y tecnologías modernas.",
    images: [
      {
        url: "/images/seo.png",
        width: 1200,
        height: 630,
        alt: "Christopher Erazo - Ingeniero de Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@christopdavideh",
    creator: "@christopdavideh",
    title: "Christopher Erazo - Ingeniero de Software",
    description:
      "Portfolio personal de Christopher Erazo, Ingeniero de Software especializado en React, Node.js y tecnologías modernas.",
    images: ["/images/seo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Agregar cuando tengas las verificaciones
    // google: "tu-codigo-google",
  },
  icons: {
    icon: [
      { url: "/images/christopher.png", sizes: "any" },
      {
        url: "/images/christopher.png",
        sizes: "32x32",
        type: "image/png",
      },
      { url: "/images/LOGO.png", sizes: "16x16", type: "image/png" },
    ],
    apple: {
      url: "/images/christopher.png",
      sizes: "180x180",
    },
    shortcut: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YBENWP3XCS"
        ></script>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-YBENWP3XCS`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YBENWP3XCS');
            `,
          }}
        />
        <SchemaMarkup />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.body.classList.add('light');
                }
              } catch (e) {}
            `,
          }}
        />

        <ClientLayoutShell>{children}</ClientLayoutShell>
      </body>
    </html>
  );
}
