"use client";

import { motion } from "motion/react";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

const FEATURES = [
  {
    title: "Native to the new forest",
    description:
      "An original community character built around the culture and opportunity emerging on Robinhood Chain.",
  },
  {
    title: "More than a ticker",
    description:
      "Bobby is designed to connect character IP, agent intelligence, gaming and community participation.",
  },
  {
    title: "Public performance",
    description:
      "The planned agent will preserve its calls and measure its results instead of hiding failed predictions.",
  },
  {
    title: "Community-written legend",
    description:
      "Every meme, game, signal and contribution helps write the next chapter of Bobby Hood.",
  },
];

export default function WhyBobby() {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <section className="relative border-t border-white/5 bg-deep-forest/40 px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-old-gold">
            Why Bobby
          </p>
          <h2 className="font-display text-3xl leading-tight text-warm-ivory sm:text-4xl md:text-5xl">
            A meme people can remember. A reputation they can verify.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-warm-ivory/70 sm:text-base">
            The story makes Bobby memorable. The planned public record is designed
            to make his future calls accountable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
              className="rounded-2xl border border-white/10 bg-soft-black/60 p-7"
            >
              <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-bobby-lime/30 text-sm font-display text-bobby-lime">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl text-warm-ivory sm:text-2xl">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-warm-ivory/70 sm:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
