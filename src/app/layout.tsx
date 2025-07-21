import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { CursorSpotlight } from "@/components/ui/CursorSpotlight";
import { FloatingParticles } from "@/components/ui/FloatingParticles";

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
      <body className={inter.className}>
        <CursorSpotlight>
          <FloatingParticles count={10} />
          <Header />
          <main>{children}</main>
          <Footer />
        </CursorSpotlight>
      </body>
    </html>
  );
}
