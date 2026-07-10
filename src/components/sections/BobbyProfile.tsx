"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

const FACTS = [
  { label: "Weapon", value: "One damaged bow" },
  { label: "Accuracy", value: "Historically questionable" },
  { label: "Wallet", value: "Previously empty" },
  { label: "Special ability", value: "Stealing attention" },
  { label: "Known weakness", value: "Actual archery" },
  { label: "Current mission", value: "Conquer the timeline" },
];

export default function BobbyProfile() {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <section className="relative py-20 sm:py-28 px-6 border-t border-white/5 bg-deep-forest/40">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.35em] text-old-gold mb-3 text-center md:text-left"
        >
          Character File
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-warm-ivory mb-12 text-center md:text-left"
        >
          Meet The Outlaw Who Missed Everything
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9 }}
            className="relative w-full max-w-sm mx-auto md:mx-0 aspect-square rounded-2xl overflow-hidden border border-white/10"
          >
            <Image
              src="/images/bobby-hood.png"
              alt="Bobby Hood character profile"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FACTS.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="border-l-2 border-bobby-lime/30 pl-4"
              >
                <p className="text-xs uppercase tracking-widest text-muted-fog mb-1">
                  {fact.label}
                </p>
                <p className="font-display text-lg sm:text-xl text-warm-ivory">
                  {fact.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}