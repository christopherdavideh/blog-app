"use client";
import { useEffect, useState } from "react";
import { CursorSpotlight } from "@/components/ui/CursorSpotlight";
import { FloatingParticles } from "@/components/ui/FloatingParticles";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

export default function ClientLayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <CursorSpotlight isMobile={isMobile}>
      <FloatingParticles isMobile={isMobile} />
      <Header />
      <main>{children}</main>
      <Footer />
    </CursorSpotlight>
  );
}
