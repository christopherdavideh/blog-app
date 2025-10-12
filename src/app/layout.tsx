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
    default: "Christopher Erazo - Desarrollador Full-Stack",
    template: "%s | Christopher Erazo",
  },
  description:
    "Portfolio personal de Christopher Erazo, desarrollador Full-Stack especializado en React, Node.js y tecnologías modernas.",
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
    title: "Christopher Erazo - Desarrollador Full-Stack",
    description:
      "Portfolio personal de Christopher Erazo, desarrollador Full-Stack especializado en React, Node.js y tecnologías modernas.",
    images: [
      {
        url: "/images/seo.png",
        width: 1200,
        height: 630,
        alt: "Christopher Erazo - Desarrollador Full-Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@christopdavideh",
    creator: "@christopdavideh",
    title: "Christopher Erazo - Desarrollador Full-Stack",
    description:
      "Portfolio personal de Christopher Erazo, desarrollador Full-Stack especializado en React, Node.js y tecnologías modernas.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/ChristopherErazo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/LOGO.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/ChristopherErazo_1.png"
        />
        <link rel="shortcut icon" href="/images/ChristopherErazo.ico" />
        <meta property="og:image" content="/images/seo.png" />
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
