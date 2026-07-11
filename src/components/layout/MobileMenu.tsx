"use client";

import { NAV_LINKS } from "@/data/navigation";
import { DISCLAIMER } from "@/lib/constants";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-forest-black transition-transform duration-300 md:hidden ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
      aria-hidden={!open}
    >
      <div className="flex justify-end p-6">
        <button
          onClick={onClose}
          className="text-warm-ivory text-3xl leading-none p-2"
          aria-label="Close menu"
        >
          &times;
        </button>
      </div>

      <nav className="flex flex-col items-center gap-8 mt-12">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-3xl font-display text-warm-ivory hover:text-bobby-lime transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://x.com/PLACEHOLDER"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="text-3xl font-display text-warm-ivory hover:text-bobby-lime transition-colors"
        >
          X
        </a>
        <a
          href="/gang"
          onClick={onClose}
          className="mt-4 rounded-full border border-bobby-lime px-8 py-3 text-sm uppercase tracking-wider text-bobby-lime"
        >
          Enter the Forest
        </a>
      </nav>

      <p className="absolute bottom-8 left-0 right-0 text-center text-xs text-muted-fog px-6">
        {DISCLAIMER}
      </p>
    </div>
  );
}