"use client";

import { motion } from "motion/react";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

const GROUPS = [
  {
    title: "Meme Makers",
    description: "The artists turning every moment into an arrow.",
  },
  {
    title: "Early Believers",
    description: "The ones who entered the forest before the crowd.",
  },
  {
    title: "Trench Survivors",
    description: "The degens who have seen every rug and still showed up.",
  },
  {
    title: "Timeline Outlaws",
    description: "The community making Bobby impossible to ignore.",
  },
];

export default function GangSection() {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <section id="gang" className="relative py-20 sm:py-28 px-6 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.35em] text-old-gold mb-3 text-center"
        >
          The Bobby Hood Gang
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-warm-ivory mb-14 text-center"
        >
          The Gang Is The Legend
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-soft-black/60 p-7 hover:border-bobby-lime/30 transition-colors"
            >
              <h3 className="font-display text-xl sm:text-2xl text-bobby-lime mb-2">
                {group.title}
              </h3>
              <p className="text-sm sm:text-base text-warm-ivory/70 leading-relaxed">
                {group.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}