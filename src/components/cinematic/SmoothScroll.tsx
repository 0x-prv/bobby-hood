"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Lenis from "lenis";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const prefersReducedMotion = useReducedMotionPreference();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [prefersReducedMotion]);

  return <>{children}</>;
}