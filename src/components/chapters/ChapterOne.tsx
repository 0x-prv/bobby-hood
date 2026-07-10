import { CHAPTERS } from "@/data/story";
import ChapterSection from "./ChapterSection";

export default function ChapterOne() {
  return <ChapterSection chapter={CHAPTERS[0]} />;
}