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
        className="pointer-events-none absolute right-[5%] top-1/2 -translate-y-1/2 h-[420px] w-[420px] md:h-[560px] md:w-[560px] rounded-full bg-bobby-lime/20 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-6">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-old-gold mb-6">
            The Legend They Forgot
          </p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-warm-ivory">
            Everyone knows Robin.
          </h1>

          <p className="mt-4 font-display italic text-xl md:text-2xl text-muted-fog">
            But nobody talks about his cousin.
          </p>

          <p className="mt-2 font-display text-3xl md:text-4xl text-bobby-lime">
            Bobby Hood.
          </p>

          <p className="mt-6 max-w-md mx-auto md:mx-0 text-sm md:text-base text-warm-ivory/70 leading-relaxed">
            The failed archer. The forgotten cousin. The first meme outlaw of the new forest.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a 
              href="/story"
              className="w-full sm:w-auto rounded-full bg-bobby-lime px-8 py-3 text-sm uppercase tracking-wider font-medium text-forest-black hover:bg-dark-lime transition-colors text-center"
            >
              Begin His Story
            </a>
            <a
              href="/gang"
              className="w-full sm:w-auto rounded-full border border-warm-ivory/20 px-8 py-3 text-sm uppercase tracking-wider text-warm-ivory hover:border-bobby-lime hover:text-bobby-lime transition-colors text-center"
            >
              Join the Gang
            </a>
          </div>
        </motion.div>

        {/* Bobby artwork */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40, scale: prefersReducedMotion ? 1 : 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="order-1 md:order-2 relative flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px]">
            <Image
              src="/images/bobby-hood.png"
              alt="Bobby Hood, the forgotten cousin"
              fill
              priority
              sizes="(max-width: 768px) 320px, 420px"
              className="object-contain drop-shadow-[0_0_60px_rgba(200,255,0,0.15)]"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-muted-fog/60">
        Scroll to enter the forest
      </div>
    </section>
  );
}