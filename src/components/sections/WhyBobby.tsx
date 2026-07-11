"use client";

import { motion } from "motion/react";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

const FEATURES = [
  {
    title: "Built on Robinhood Chain",
    description:
      "Bobby is pointed at Robinhood Chain from day one: a familiar legend reloaded for a new onchain frontier.",
  },
  {
    title: "Memes fly farther than arrows",
    description:
      "No fake royal roadmap. Bobby's weapon is simple, shareable attention that the timeline can rally around.",
  },
  {
    title: "An underdog people can wear",
    description:
      "The hood belongs to every holder, maker, raider, and believer who wants the forgotten cousin to win.",
  },
  {
    title: "Every raid adds to the legend",
    description:
      "Each meme, post, and mention writes the next chapter. The community isn't just watching Bobby's story, it's building it.",
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
            A meme outlaw with a story the trenches can remember.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-warm-ivory/70 sm:text-base">
            Bobby is not trying to be Robin. He is the missed shot, the bad luck,
            and the second chance wrapped in one green hood.
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
