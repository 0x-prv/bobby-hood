"use client";

import { motion } from "motion/react";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

export default function ChapterQuote({ quote }: { quote: string }) {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <motion.p
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-10 font-display italic text-xl sm:text-2xl text-bobby-lime border-l-2 border-bobby-lime/40 pl-5"
    >
      {quote}
    </motion.p>
  );
}