"use client";

import { motion } from "motion/react";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

export default function ForestSigil3D() {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-12 hidden justify-center overflow-hidden opacity-75 md:flex"
      aria-hidden="true"
    >
      <motion.div
        initial={false}
        animate={
          prefersReducedMotion
            ? { rotateX: 62, rotateZ: -10 }
            : { rotateX: [62, 66, 62], rotateZ: [-10, -4, -10] }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 14, repeat: Infinity, ease: "easeInOut" }
        }
        className="relative h-[34rem] w-[34rem] rounded-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 rounded-full border border-bobby-lime/15 bg-[radial-gradient(circle_at_center,rgba(200,255,0,0.11),rgba(38,50,25,0.08)_42%,rgba(5,10,7,0)_70%)] shadow-[0_0_110px_rgba(200,255,0,0.08)]" />
        <div className="absolute inset-10 rounded-full border border-old-gold/15 bg-[radial-gradient(circle_at_center,rgba(214,168,74,0.10),rgba(214,168,74,0.02)_48%,transparent_70%)]" />
        <div className="absolute inset-24 rounded-full border border-warm-ivory/10 bg-forest-black/20 shadow-inner shadow-black/60" />
        <div className="absolute left-1/2 top-12 h-[27rem] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-bobby-lime/25 to-transparent" />
        <div className="absolute left-12 top-1/2 h-px w-[27rem] -translate-y-1/2 bg-gradient-to-r from-transparent via-old-gold/20 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-bobby-lime/20 bg-soft-black/50 shadow-[0_18px_70px_rgba(0,0,0,0.45)]" />
        <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rotate-45 border-l border-t border-old-gold/35" />
        <div className="absolute inset-x-20 bottom-20 h-20 rounded-full bg-black/35 blur-3xl" />
      </motion.div>
    </div>
  );
}
