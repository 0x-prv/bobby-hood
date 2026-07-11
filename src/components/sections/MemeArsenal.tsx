"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

// Add tweet URLs here as the community posts memes.
// Example: "https://x.com/bobbyhood67/status/1234567890123456789"
const FEATURED_POSTS: string[] = [
  // "https://x.com/bobbyhood67/status/2075859784591630744?s=20",
];

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (el?: HTMLElement) => void;
      };
    };
  }
}

export default function MemeArsenal() {
  const prefersReducedMotion = useReducedMotionPreference();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (FEATURED_POSTS.length === 0) return;

    const existingScript = document.getElementById("twitter-widgets-js");

    function loadWidgets() {
      if (window.twttr && containerRef.current) {
        window.twttr.widgets.load(containerRef.current);
      }
    }

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "twitter-widgets-js";
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = loadWidgets;
      document.body.appendChild(script);
    } else {
      loadWidgets();
    }
  }, []);

  return (
    <section id="memes" className="relative py-20 sm:py-28 px-6 border-t border-white/5 bg-forest-black">
      <div className="mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.35em] text-old-gold mb-3"
        >
          The Meme Arsenal
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl text-warm-ivory mb-8"
        >
          Weapons For The Timeline
        </motion.h2>

        {FEATURED_POSTS.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-3xl rounded-2xl border border-dashed border-white/15 py-16 px-6"
          >
            <p className="text-sm sm:text-base text-muted-fog">
              The arsenal is being loaded.
            </p>
          </motion.div>
        ) : (
          <div
            ref={containerRef}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {FEATURED_POSTS.map((url) => (
              <div key={url} className="mx-auto w-full max-w-sm">
                <blockquote className="twitter-tweet" data-theme="dark">
                  <a href={url}></a>
                </blockquote>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}