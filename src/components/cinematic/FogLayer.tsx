"use client";

import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

export default function FogLayer() {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className={`absolute -left-1/4 top-1/3 h-64 w-[150%] rounded-full bg-muted-fog/5 blur-3xl ${
          prefersReducedMotion ? "" : "animate-[drift_20s_ease-in-out_infinite]"
        }`}
      />
      <div
        className={`absolute -right-1/4 top-1/2 h-72 w-[150%] rounded-full bg-muted-fog/5 blur-3xl ${
          prefersReducedMotion ? "" : "animate-[drift_25s_ease-in-out_infinite_reverse]"
        }`}
      />
      <style jsx>{`
        @keyframes drift {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(40px); }
        }
      `}</style>
    </div>
  );
}