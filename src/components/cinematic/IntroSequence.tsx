"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import FeatherFall from "./FeatherFall";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

const LINES = [
  "Everyone knows Robin Hood.",
  "But nobody talks about his cousin.",
  "Bobby Hood.",
];

export default function IntroSequence() {
  const [hasSeenIntro, setHasSeenIntro, hydrated] = useLocalStorage<boolean>(
    "bobby-seen-intro",
    false
  );
  const [lineIndex, setLineIndex] = useState(0);
  const prefersReducedMotion = useReducedMotionPreference();
  const visible = hydrated && !hasSeenIntro && !prefersReducedMotion;

  useEffect(() => {
    if (!visible) return;
    if (lineIndex >= LINES.length) {
      const timer = setTimeout(() => finish(), 1200);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => setLineIndex((i) => i + 1), 1800);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, lineIndex]);

  function finish() {
    setHasSeenIntro(true);
  }

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-forest-black px-6"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grain-overlay opacity-10" />

          <FeatherFall className="w-10 h-10 mb-10 opacity-90" />

          <div className="h-24 flex items-center justify-center text-center">
            {LINES.map((line, i) => (
              <AnimatePresence key={line} mode="wait">
                {lineIndex === i && (
                  <motion.p
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -12 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="font-display text-2xl md:text-4xl text-warm-ivory max-w-xl"
                  >
                    {line}
                  </motion.p>
                )}
              </AnimatePresence>
            ))}
          </div>

          <button
            type="button"
            onClick={finish}
            className="absolute bottom-8 right-6 rounded-full border border-white/15 px-5 py-3 text-xs uppercase tracking-widest text-muted-fog transition-colors hover:border-bobby-lime/40 hover:text-bobby-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bobby-lime sm:bottom-10 sm:right-8"
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
