"use client";

import { motion } from "motion/react";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";
import ForestSigil3D from "./ForestSigil3D";

const ROUTE_CARDS = [
  {
    marker: "I",
    eyebrow: "Intelligence",
    title: "Bobby Alpha Agent",
    description:
      "A planned market scout designed to analyze Robinhood Chain activity, publish explainable signals and build a transparent performance history.",
    href: "#agent",
    cta: "Discover the Agent",
    status: "Building",
    glow: "from-old-gold/25 via-old-gold/5 to-transparent",
    markerClass: "border-old-gold/35 text-old-gold shadow-[0_0_30px_rgba(214,168,74,0.12)]",
    edgeClass: "from-old-gold/0 via-old-gold/35 to-old-gold/0",
  },
  {
    marker: "II",
    eyebrow: "Game",
    title: "Last Archer Standing",
    description:
      "A competitive Bobby Hood survival game where players loot, fight and outlast the rest of the forest.",
    href: "#game",
    cta: "View Game Status",
    status: "In development",
    glow: "from-bobby-lime/25 via-bobby-lime/5 to-transparent",
    markerClass: "border-bobby-lime/35 text-bobby-lime shadow-[0_0_30px_rgba(200,255,0,0.13)]",
    edgeClass: "from-bobby-lime/0 via-bobby-lime/35 to-bobby-lime/0",
  },
  {
    marker: "III",
    eyebrow: "Original IP",
    title: "The Bobby Hood Story",
    description:
      "The five-chapter origin of the forgotten cousin, failed archer and first meme outlaw of the new forest.",
    href: "/story",
    cta: "Read the Story",
    status: "Live",
    glow: "from-warm-ivory/20 via-bobby-lime/5 to-transparent",
    markerClass: "border-warm-ivory/25 text-warm-ivory shadow-[0_0_30px_rgba(244,238,220,0.10)]",
    edgeClass: "from-warm-ivory/0 via-warm-ivory/30 to-warm-ivory/0",
  },
  {
    marker: "IV",
    eyebrow: "Community",
    title: "The Bobby Hood Gang",
    description:
      "The holders, builders, creators and community members helping write Bobby's next chapter.",
    href: "/gang",
    cta: "Meet the Gang",
    status: "Open",
    glow: "from-bobby-lime/20 via-old-gold/5 to-transparent",
    markerClass: "border-bobby-lime/30 text-bobby-lime shadow-[0_0_30px_rgba(200,255,0,0.10)]",
    edgeClass: "from-bobby-lime/0 via-old-gold/30 to-bobby-lime/0",
  },
];

export default function HomeRouteCards() {
  const prefersReducedMotion = useReducedMotionPreference();
  return (
    <section id="ecosystem" className="relative overflow-hidden border-t border-white/5 bg-forest-black px-6 py-20 sm:py-28">
      <ForestSigil3D />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(200,255,0,0.08),transparent_42%)]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-old-gold">
            The Bobby Hood Ecosystem
          </p>
          <h2 className="font-display text-3xl leading-tight text-warm-ivory sm:text-4xl md:text-5xl">
            One outlaw. Four connected paths.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-warm-ivory/70 sm:text-base">
            Bobby Hood combines original character IP, transparent agent
            intelligence, competitive gaming and community participation within
            the Robinhood Chain ecosystem.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto mt-10 max-w-2xl overflow-hidden rounded-[1.75rem] border border-bobby-lime/25 shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/gifs/robinhoodgif.gif" alt="Bobby Hood animation" className="relative w-full" />
          </motion.div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 [perspective:1200px]">
          {ROUTE_CARDS.map((card, index) => (
            <motion.a
              key={card.title}
              href={card.href}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { y: -8, rotateX: 1.5, rotateY: index === 1 ? 0 : index === 0 ? -1.5 : 1.5 }
              }
              whileTap={{ scale: 0.985 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
              className="group relative isolate flex min-h-[280px] touch-manipulation flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/10 bg-soft-black/75 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.28)] outline-none transition-colors hover:border-bobby-lime/35 focus-visible:border-bobby-lime/50 focus-visible:ring-2 focus-visible:ring-bobby-lime/30"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className={`absolute -right-20 -top-24 h-56 w-56 rounded-full bg-gradient-to-br ${card.glow} blur-2xl transition-opacity duration-300 group-hover:opacity-100`} />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),transparent_35%,rgba(255,255,255,0.03)_70%,transparent)] opacity-70" />
              <div className="absolute inset-px rounded-[1.7rem] border border-white/5" />
              <div className={`absolute left-7 right-7 top-0 h-px bg-gradient-to-r ${card.edgeClass} opacity-70 transition-opacity duration-300 group-hover:opacity-100`} />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />

              <div className="relative">
                <div className="mb-7 flex items-start justify-between gap-4">
                  <p className="pt-2 text-xs uppercase tracking-[0.25em] text-old-gold/90">
                    {card.eyebrow}
                  </p>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`flex h-11 min-w-11 items-center justify-center rounded-full border bg-forest-black/70 px-3 font-display text-sm transition-transform duration-300 group-hover:scale-105 ${card.markerClass}`}>
                      {card.marker}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-bobby-lime">
                      {card.status}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-2xl leading-tight text-warm-ivory sm:text-3xl">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-warm-ivory/70 sm:text-base">
                  {card.description}
                </p>
              </div>

              <span className="relative mt-10 inline-flex items-center text-sm font-medium uppercase tracking-wider text-bobby-lime transition-transform duration-300 group-hover:translate-x-1">
                {card.cta} <span className="ml-2">-&gt;</span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
