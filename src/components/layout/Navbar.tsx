"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/data/navigation";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      setScrolled(currentY > 40);

      if (currentY > lastScrollY && currentY > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentY);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled
            ? "bg-forest-black/70 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5">
            <Image
              src="/images/bobby-hood.png"
              alt="Bobby Hood"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover border border-bobby-lime/30"
              priority
            />
            <span className="font-display text-lg tracking-wide text-warm-ivory">
              BOBBY
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-wider text-warm-ivory/80 hover:text-bobby-lime transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://x.com/PLACEHOLDER"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-wider text-warm-ivory/80 hover:text-bobby-lime transition-colors"
            >
              X
            </a>
            <a
              href="#gang"
              className="rounded-full border border-bobby-lime/40 px-5 py-2 text-sm uppercase tracking-wider text-bobby-lime hover:bg-bobby-lime hover:text-forest-black transition-colors"
            >
              Enter the Forest
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Open menu"
          >
            <span className="block h-[1.5px] w-6 bg-warm-ivory" />
            <span className="block h-[1.5px] w-6 bg-warm-ivory" />
          </button>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}