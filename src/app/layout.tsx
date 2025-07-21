import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { CursorSpotlight } from "@/components/ui/CursorSpotlight";
import { FloatingParticles } from "@/components/ui/FloatingParticles";
import SchemaMarkup from "@/components/organisms/SchemaMarkup";
import ClientLayoutShell from "@/components/ClientLayoutShell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christopher Erazo - Desarrollador Full-Stack",
  description:
    "Portfolio personal de Christopher Erazo, desarrollador Full-Stack especializado en React, Node.js y tecnologías modernas.",
  keywords: [
    "desarrollador",
    "full-stack",
    "react",
    "node.js",
    "typescript",
    "portfolio",
  ],
  authors: [{ name: "Christopher Erazo" }],
  creator: "Christopher Erazo",
  openGraph: {
    title: "Christopher Erazo - Desarrollador Full-Stack",
    description:
      "Portfolio personal de Christopher Erazo, desarrollador Full-Stack especializado en React, Node.js y tecnologías modernas.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christopher Erazo - Desarrollador Full-Stack",
    description:
      "Portfolio personal de Christopher Erazo, desarrollador Full-Stack especializado en React, Node.js y tecnologías modernas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
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
        <SchemaMarkup />
      </head>
      <body className={inter.className}>
        <ClientLayoutShell>{children}</ClientLayoutShell>
      </body>
    </html>
  );
}
