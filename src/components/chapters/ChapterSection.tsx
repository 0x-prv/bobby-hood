import type { Chapter } from "@/data/story";
import ChapterHeading from "./ChapterHeading";
import StoryLine from "./StoryLine";
import ChapterQuote from "./ChapterQuote";

const ACCENT_BORDER_MAP: Record<string, string> = {
  "leather-brown": "bg-leather-brown/30",
  "old-gold": "bg-old-gold/30",
  "dark-lime": "bg-dark-lime/30",
  "bobby-lime": "bg-bobby-lime/30",
  "warm-ivory": "bg-warm-ivory/30",
};

export default function ChapterSection({ chapter }: { chapter: Chapter }) {
  const accentClass = ACCENT_BORDER_MAP[chapter.accent] ?? "bg-bobby-lime/30";

  return (
    <section
      id={chapter.id}
      className="relative py-16 sm:py-20 px-6 border-t border-white/5"
    >
      <div
        className={`pointer-events-none absolute left-0 top-0 h-full w-1 ${accentClass}`}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-2xl">
        <ChapterHeading label={chapter.label} title={chapter.title} />

        <div>
          {chapter.paragraphs.map((p, i) => (
            <StoryLine key={i} text={p} index={i} />
          ))}
        </div>

        <ChapterQuote quote={chapter.quote} />
      </div>
    </section>
  );
}