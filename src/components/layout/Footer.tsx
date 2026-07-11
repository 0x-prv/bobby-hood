import { SOCIAL_LINKS } from "@/data/socialLinks";
import {
  AFFILIATION_DISCLAIMER,
  FOOTER_DISCLAIMER,
  RISK_DISCLOSURE,
  COPYRIGHT,
} from "@/lib/constants";

export default function Footer() {
  const xLink =
    SOCIAL_LINKS.find((link) => link.label === "X") ?? SOCIAL_LINKS[0];
  return (
    <footer className="border-t border-white/5 bg-deep-forest px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          <div>
            <h3 className="font-display text-2xl text-bobby-lime">$BOBBY</h3>
            <p className="mt-1 text-sm text-muted-fog">The First Meme Outlaw</p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm uppercase tracking-wider text-warm-ivory/70">
            <a
              href="/story"
              className="hover:text-bobby-lime transition-colors"
            >
              Story
            </a>
            <a href="/gang" className="hover:text-bobby-lime transition-colors">
              Gang
            </a>
            <a
              href={xLink?.href ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bobby-lime transition-colors"
            >
              X
            </a>
            <a
              href="/terms"
              className="hover:text-bobby-lime transition-colors"
            >
              Terms
            </a>
            <a
              href="/privacy"
              className="hover:text-bobby-lime transition-colors"
            >
              Privacy
            </a>
            <a
              href="/disclosures"
              className="hover:text-bobby-lime transition-colors"
            >
              Disclosures
            </a>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 space-y-4">
          <section
            aria-label="Legal affiliation notice"
            className="max-w-3xl rounded-2xl border border-white/10 bg-forest-black/35 p-4"
          >
            <p className="text-[0.68rem] uppercase tracking-[0.25em] text-old-gold/80">
              Legal notice
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted-fog">
              {AFFILIATION_DISCLAIMER}
            </p>
          </section>
          <p className="text-xs leading-relaxed text-muted-fog max-w-2xl">
            {FOOTER_DISCLAIMER}
          </p>
          <p className="text-xs leading-relaxed text-muted-fog max-w-2xl">
            {RISK_DISCLOSURE}
          </p>
          <p className="text-xs text-muted-fog/70">{COPYRIGHT}</p>
        </div>
      </div>
    </footer>
  );
}
