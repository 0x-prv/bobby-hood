"use client";

import { motion } from "motion/react";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

export default function ChapterHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="mb-10"
    >
      <p className="text-xs uppercase tracking-[0.35em] text-old-gold mb-3">
        {label}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-warm-ivory">
        {title}
      </h2>
    </motion.div>
  );
}