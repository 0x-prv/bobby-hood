"use client";

import Image from "next/image";
import { motion } from "motion/react";
import FogLayer from "./FogLayer";
import ParticleLayer from "./ParticleLayer";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

export default function CinematicHero() {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <section className="relative min-h-screen overflow-hidden bg-forest-black flex items-center pt-24 pb-16">
      <FogLayer />
      <ParticleLayer />

      {/* Ambient lime glow behind Bobby */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] md:h-[700px] md:w-[700px] rounded-full bg-bobby-lime/20 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-3 px-6 text-center">
        {/* Eyebrow caption */}
        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-old-gold mb-2"
        >
          The Legend They Forgot
        </motion.p>

        {/* Bobby artwork */}
      <motion.div
  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40, scale: prefersReducedMotion ? 1 : 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  className="relative flex w-full justify-center"
  style={{ minHeight: 1 }}
>
  <div className="relative w-full max-w-lg sm:max-w-2xl md:max-w-4xl overflow-hidden rounded-2xl" style={{ aspectRatio: "21 / 9" }}>
        
            <Image
              src="/bobbyys.gif"
              alt="Bobby Hood, the forgotten cousin"
              fill
              priority
              unoptimized
              sizes="(max-width: 768px) 500px, 900px"
              className="object-cover drop-shadow-[0_0_60px_rgba(200,255,0,0.15)]"
            />
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-bobby-lime/25 bg-bobby-lime/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-bobby-lime">
            <span className="h-2 w-2 rounded-full bg-bobby-lime" aria-hidden="true" />
            Building in public
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-warm-ivory">
            The First Meme Outlaw With An Onchain Reputation.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-sm md:text-base text-warm-ivory/70 leading-relaxed">
            Bobby Hood is evolving from a Robinhood Chain-native character into a
            market-intelligence and gaming agent with a transparent public record.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center">
            <a
              href="#agent"
              className="w-full sm:w-auto rounded-full bg-bobby-lime px-8 py-3 text-sm uppercase tracking-wider font-medium text-forest-black hover:bg-dark-lime transition-colors text-center"
            >
              Discover the Agent
            </a>
       <a     
              href="#ecosystem"
              className="w-full sm:w-auto rounded-full border border-warm-ivory/20 px-8 py-3 text-sm uppercase tracking-wider text-warm-ivory hover:border-bobby-lime hover:text-bobby-lime transition-colors text-center"
            >
              Explore the Ecosystem
            </a>
          </div>
          <a
            href="/story"
            className="mt-6 inline-flex text-xs uppercase tracking-[0.2em] text-warm-ivory/60 underline decoration-white/20 underline-offset-4 transition-colors hover:text-bobby-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bobby-lime"
          >
            Read the Legend
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-muted-fog/60">
        Scroll to enter the forest
      </div>
    </section>
  );
}
