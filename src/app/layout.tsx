import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/main.scss";
import SchemaMarkup from "@/components/organisms/SchemaMarkup";
import { CursorSpotlight } from "@/components/ui/CursorSpotlight";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Christopher David Erazo - Software Developer",
    template: "%s | Christopher David Erazo",
  },
  description:
    "Software Developer especializado en React, Angular, Java SpringBoot, C# .NET y desarrollo móvil. Creando experiencias digitales excepcionales.",
  keywords: [
    "Software Developer",
    "React",
    "Angular",
    "Java SpringBoot",
    "C# .NET",
    "Flutter",
    "Xamarin",
    "Full Stack Developer",
    "Colombia",
    "Desarrollo Web",
    "Desarrollo Móvil",
  ],
  authors: [{ name: "Christopher David Erazo Herrera" }],
  creator: "Christopher David Erazo Herrera",
  publisher: "Christopher David Erazo Herrera",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://christopherdavideh.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://christopherdavideh.com",
    title: "Christopher David Erazo - Software Developer",
    description:
      "Software Developer especializado en React, Angular, Java SpringBoot, C# .NET y desarrollo móvil.",
    siteName: "Christopher David Erazo Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Christopher David Erazo - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christopher David Erazo - Software Developer",
    description:
      "Software Developer especializado en React, Angular, Java SpringBoot, C# .NET y desarrollo móvil.",
    images: ["/og-image.jpg"],
    creator: "@christopdavideh",
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
    google: "your-google-verification-code",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#0a192f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <SchemaMarkup />
      </head>
      <body className={inter.className}>
        <CursorSpotlight>{children}</CursorSpotlight>
      </body>
    </html>
  );
}
