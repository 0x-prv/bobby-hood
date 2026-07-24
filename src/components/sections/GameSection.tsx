"use client";

import { motion } from "motion/react";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

export default function GameSection() {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <section id="game" className="relative overflow-hidden border-t border-white/5 bg-forest-black px-6 py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-bobby-lime/8 blur-[100px]" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-soft-black/65 p-7 sm:p-10 md:p-14"
      >
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 flex flex-wrap items-center gap-4">
              <p className="text-xs uppercase tracking-[0.35em] text-old-gold">The Game</p>
              <span className="rounded-full border border-old-gold/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-old-gold">
                In development
              </span>
            </div>
            <h2 className="font-display text-3xl leading-tight text-warm-ivory sm:text-4xl md:text-5xl">
              Enter the forest. Outlast every outlaw.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-warm-ivory/70 sm:text-base">
              Last Archer Standing is the competitive game inside the Bobby Hood
              ecosystem. Players enter with basic equipment, search for loot,
              survive a shrinking arena and fight to become the last outlaw standing.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-muted-fog">
              This section describes the current project direction. No publicly
              playable build or verified game URL is present in this repository.
            </p>
          </div>
          <span aria-disabled="true" className="inline-flex cursor-not-allowed justify-center rounded-full border border-white/15 px-7 py-3 text-sm uppercase tracking-wider text-warm-ivory/45">
            Game in Development
          </span>
        </div>
      </motion.div>
    </section>
  );
}
