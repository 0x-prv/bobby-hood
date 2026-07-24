"use client";

import { motion } from "motion/react";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";
import { OFFICIAL_X_URL } from "@/data/socialLinks";

const STEPS = [
  { title: "Scan", description: "Read live Robinhood Chain token and market activity." },
  { title: "Analyze", description: "Evaluate liquidity, momentum, concentration and risk indicators." },
  { title: "Publish", description: "Release a signal with reasoning, confidence and a timestamp." },
  { title: "Verify", description: "Measure the outcome and update Bobby's public performance record." },
];

const CONCEPT_FIELDS = ["Token", "Signal", "Confidence", "Risk", "Published", "Result"];

const STATUS = [
  ["Product", "In development"],
  ["Network target", "Robinhood Chain mainnet"],
  ["Onchain registry", "Planned"],
  ["Trading execution", "Not enabled"],
];

export default function AgentSection() {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <section id="agent" className="relative border-t border-white/5 bg-deep-forest/40 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-old-gold">
            Bobby Alpha Agent
          </p>
          <h2 className="font-display text-3xl leading-tight text-warm-ivory sm:text-4xl md:text-5xl">
            Bobby never deletes a bad call.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-warm-ivory/70 sm:text-base">
            The planned Bobby Alpha Agent will scan Robinhood Chain market activity,
            publish explainable signals and measure every result. Important signals
            are intended to be timestamped onchain before their outcomes are known.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-white/10 bg-soft-black/65 p-6">
              <span className="text-xs font-medium text-bobby-lime">0{index + 1}</span>
              <h3 className="mt-5 font-display text-2xl uppercase text-warm-ivory">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-warm-ivory/65">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[1.75rem] border border-old-gold/25 bg-forest-black/70 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-old-gold">
              Product concept — not live data
            </p>
            <dl className="mt-7 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              {CONCEPT_FIELDS.map((field) => (
                <div key={field} className="flex items-center justify-between gap-6 border-b border-white/10 pb-3">
                  <dt className="text-xs uppercase tracking-wider text-muted-fog">{field}</dt>
                  <dd className="font-display text-lg text-warm-ivory">—</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-soft-black/65 p-6 sm:p-8">
            <dl className="space-y-5">
              {STATUS.map(([label, value]) => (
                <div key={label} className="flex flex-col gap-1 border-b border-white/10 pb-4 sm:flex-row sm:justify-between">
                  <dt className="text-xs uppercase tracking-wider text-muted-fog">{label}</dt>
                  <dd className="text-sm text-warm-ivory sm:text-right">{value}</dd>
                </div>
              ))}
            </dl>
            <a href={OFFICIAL_X_URL} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex w-full justify-center rounded-full bg-bobby-lime px-6 py-3 text-sm font-medium uppercase tracking-wider text-forest-black transition-colors hover:bg-dark-lime">
              Follow the Build
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
