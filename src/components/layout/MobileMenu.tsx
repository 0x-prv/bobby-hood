"use client";

import { NAV_LINKS } from "@/data/navigation";
import { SOCIAL_LINKS } from "@/data/socialLinks";
import { DISCLAIMER } from "@/lib/constants";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const xLink =
    SOCIAL_LINKS.find((link) => link.label === "X") ?? SOCIAL_LINKS[0];
  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto bg-forest-black transition-transform duration-300 lg:hidden ${
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

      <nav aria-label="Mobile navigation" className="flex flex-col items-center gap-6 mt-4 pb-36">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            tabIndex={open ? 0 : -1}
            className="text-2xl font-display text-warm-ivory hover:text-bobby-lime transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href={xLink?.href ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          tabIndex={open ? 0 : -1}
          className="text-2xl font-display text-warm-ivory hover:text-bobby-lime transition-colors"
        >
          X
        </a>
        <a
          href={xLink?.href ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          tabIndex={open ? 0 : -1}
          className="mt-4 rounded-full border border-bobby-lime px-8 py-3 text-sm uppercase tracking-wider text-bobby-lime"
        >
          Follow the Build
        </a>
      </nav>

      <p className="absolute bottom-8 left-0 right-0 text-center text-xs text-muted-fog px-6">
        {DISCLAIMER}
      </p>
    </div>
  );
}
