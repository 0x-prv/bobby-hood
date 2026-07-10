"use client";

import { useState, useEffect } from "react";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export default function ParticleLayer({ count = 18 }: { count?: number }) {
  const prefersReducedMotion = useReducedMotionPreference();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 6,
        size: 1 + Math.random() * 2,
      }))
    );
  }, [count]);

  if (prefersReducedMotion || particles.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-bobby-lime/40"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            bottom: "-10px",
            animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}