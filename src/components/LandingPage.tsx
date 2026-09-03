import { useCallback, useEffect, useState } from "react";
import { Articles } from "./Articles";
import { Features } from "./Features";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { MobileMenu } from "./MobileMenu";

export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1280px)").matches) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="overflow-x-clip bg-white">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Header menuOpen={menuOpen} onToggleMenu={toggleMenu} />
      <MobileMenu open={menuOpen} onClose={closeMenu} />
      <main>
        <Hero />
        <Features />
        <Articles />
      </main>
      <Footer />
    </div>
  );
}
