"use client";

import { motion } from "motion/react";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

export default function StoryLine({
  text,
  index,
}: {
  text: string;
  index: number;
}) {
  const prefersReducedMotion = useReducedMotionPreference();
  const lines = text.split("\n");

  return (
    <motion.p
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: Math.min(index * 0.04, 0.3) }}
      className="text-base sm:text-lg leading-relaxed text-warm-ivory/85 mb-4"
    >
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </motion.p>
  );
}