"use client";

import { motion } from "motion/react";
import { SOCIAL_LINKS } from "@/data/socialLinks";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

export default function StoryClosingCTA() {
  const prefersReducedMotion = useReducedMotionPreference();
  const xLink =
    SOCIAL_LINKS.find((link) => link.label === "X") ?? SOCIAL_LINKS[0];

  return (
    <section className="relative isolate overflow-hidden border-t border-white/5 bg-forest-black px-6 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(200,255,0,0.11),transparent_40%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-old-gold/10 blur-[100px]"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-bobby-lime/20 bg-soft-black/80 px-6 py-12 text-center shadow-[0_0_90px_rgba(200,255,0,0.09)] sm:px-10 sm:py-16"
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),transparent_36%,rgba(200,255,0,0.04)_72%,transparent)]" />
        <div className="absolute inset-px rounded-[1.95rem] border border-white/5" />
        <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-bobby-lime/0 via-bobby-lime/45 to-bobby-lime/0" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/35 to-transparent" />

        <div className="relative">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-old-gold">
            The Story Continues
          </p>

          <h2 className="font-display text-3xl leading-tight text-warm-ivory sm:text-4xl md:text-5xl">
            Join Bobby&apos;s Gang
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-warm-ivory/70 sm:text-base">
            The legend does not end on this page. Every new member who joins the
            gang on X keeps the raid alive and helps the community grow.
            Bobby&apos;s forest gets bigger with every outlaw who joins.
          </p>

          {xLink ? (
            <a
              href={xLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex w-full items-center justify-center rounded-full border border-bobby-lime/40 bg-bobby-lime px-8 py-3 text-sm font-medium uppercase tracking-wider text-forest-black shadow-[0_0_35px_rgba(200,255,0,0.18)] transition-all hover:border-bobby-lime hover:bg-dark-lime hover:shadow-[0_0_45px_rgba(200,255,0,0.26)] sm:w-auto"
            >
              Join the Gang on X
            </a>
          ) : null}
        </div>
      </motion.div>
    </section>
  );
}
