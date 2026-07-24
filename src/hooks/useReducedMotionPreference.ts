"use client";

import { useState, useEffect } from "react";

export function useReducedMotionPreference() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    const timeout = window.setTimeout(
      () => setPrefersReducedMotion(mediaQuery.matches),
      0
    );
    mediaQuery.addEventListener("change", handler);
    return () => {
      window.clearTimeout(timeout);
      mediaQuery.removeEventListener("change", handler);
    };
  }, []);

  return prefersReducedMotion;
}
