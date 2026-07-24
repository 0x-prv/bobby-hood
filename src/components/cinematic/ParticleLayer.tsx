"use client";

import { useMemo } from "react";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

const PARTICLE_SEED = 0xb0bb7;

function createSeededGenerator(seed: number) {
  let state = seed;

  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function createParticles(count: number): Particle[] {
  const nextValue = createSeededGenerator(PARTICLE_SEED);

  return Array.from({ length: count }, (_, id) => ({
    id,
    left: nextValue() * 100,
    delay: nextValue() * 8,
    duration: 6 + nextValue() * 6,
    size: 1 + nextValue() * 2,
  }));
}

export default function ParticleLayer({ count = 18 }: { count?: number }) {
  const prefersReducedMotion = useReducedMotionPreference();
  const particles = useMemo(() => createParticles(count), [count]);

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
