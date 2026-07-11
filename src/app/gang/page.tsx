import FilmGrain from "@/components/cinematic/FilmGrain";
import GangSection from "@/components/sections/GangSection";

export default function GangPage() {
  return (
    <main className="flex-1 bg-forest-black pt-24">
      <FilmGrain />

      <section className="relative overflow-hidden border-t border-white/5 px-6 py-20 sm:py-28">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bobby-lime/10 blur-[100px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-old-gold">
            The Bobby Hood Gang
          </p>
          <h1 className="font-display text-4xl leading-tight text-warm-ivory sm:text-5xl md:text-6xl">
            Every holder wears the hood.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-warm-ivory/70 sm:text-base">
            Meet the makers, believers, survivors, and timeline outlaws turning
            Bobby into the legend Robin never saw coming.
          </p>
        </div>
      </section>

      <GangSection />
    </main>
  );
}
