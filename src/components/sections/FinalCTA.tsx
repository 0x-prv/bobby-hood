"use client";

import { motion } from "motion/react";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";
import { CONTRACT_ADDRESS, SOCIAL_LINKS } from "@/data/socialLinks";
import { DISCLAIMER, SITE_TICKER } from "@/lib/constants";

export default function FinalCTA() {
  const prefersReducedMotion = useReducedMotionPreference();
  const primarySocialLink = SOCIAL_LINKS[0];

  return (
    <section className="relative overflow-hidden border-t border-white/5 px-6 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bobby-lime/10 blur-[90px]"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto max-w-4xl rounded-[2rem] border border-bobby-lime/20 bg-soft-black/80 px-6 py-12 text-center shadow-[0_0_80px_rgba(200,255,0,0.08)] sm:px-10 sm:py-16"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-old-gold">
          The Forest Is Open
        </p>

        <h2 className="font-display text-3xl leading-tight text-warm-ivory sm:text-4xl md:text-5xl">
          Put on the hood. Join the Bobby Hood Gang.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-warm-ivory/70 sm:text-base">
          {SITE_TICKER} is the meme outlaw story built for the new forest. Follow
          the official channel, wait for verified contract details, and never trust
          copycats hiding in the trees.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {primarySocialLink ? (
            <a
              href={primarySocialLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-bobby-lime px-8 py-3 text-center text-sm font-medium uppercase tracking-wider text-forest-black transition-colors hover:bg-dark-lime sm:w-auto"
            >
              Follow on {primarySocialLink.label}
            </a>
          ) : null}

          <a
            href="/story"
            className="w-full rounded-full border border-warm-ivory/20 px-8 py-3 text-center text-sm uppercase tracking-wider text-warm-ivory transition-colors hover:border-bobby-lime hover:text-bobby-lime sm:w-auto"
          >
            Read the Legend
          </a>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-forest-black/50 p-4 text-left sm:text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-fog">
            Contract status
          </p>
          <p className="mt-2 break-all font-mono text-sm text-bobby-lime">
            {CONTRACT_ADDRESS ?? "Not published yet"}
          </p>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-muted-fog/80">
          {DISCLAIMER}
        </p>
      </motion.div>
    </section>
  );
}
