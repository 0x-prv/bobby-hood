"use client";

import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

export default function FeatherFall({ className = "" }: { className?: string }) {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} ${prefersReducedMotion ? "" : "animate-[featherDrop_3s_ease-in-out_infinite]"}`}
      aria-hidden="true"
    >
      <path
        d="M50 5 C35 20, 25 40, 30 65 C32 78, 40 88, 50 95 C60 88, 68 78, 70 65 C75 40, 65 20, 50 5 Z"
        fill="none"
        stroke="#C8FF00"
        strokeWidth="1.2"
        opacity="0.85"
      />
      <line x1="50" y1="10" x2="50" y2="90" stroke="#C8FF00" strokeWidth="0.8" opacity="0.6" />
      {[20, 32, 44, 56, 68, 80].map((y, i) => (
        <path
          key={i}
          d={`M50 ${y} Q${i % 2 === 0 ? 30 : 70} ${y + 6}, 50 ${y + 12}`}
          fill="none"
          stroke="#C8FF00"
          strokeWidth="0.5"
          opacity="0.4"
        />
      ))}
      <style jsx>{`
        @keyframes featherDrop {
          0% { transform: translateY(0) rotate(-8deg); }
          50% { transform: translateY(10px) rotate(8deg); }
          100% { transform: translateY(0) rotate(-8deg); }
        }
      `}</style>
    </svg>
  );
}