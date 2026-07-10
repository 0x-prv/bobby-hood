"use client";

import { motion } from "motion/react";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

export default function MemeArsenal() {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <section className="relative py-20 sm:py-28 px-6 border-t border-white/5 bg-deep-forest/40">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.35em] text-old-gold mb-3"
        >
          The Meme Arsenal
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl text-warm-ivory mb-8"
        >
          Weapons For The Timeline
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl border border-dashed border-white/15 py-16 px-6"
        >
          <p className="text-sm sm:text-base text-muted-fog">
            The arsenal is being loaded.
          </p>
        </motion.div>
      </div>
    </section>
  );
}