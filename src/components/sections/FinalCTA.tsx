"use client";

import { useState } from "react";
import IntroSequence from "@/components/cinematic/IntroSequence";
import CinematicHero from "@/components/cinematic/CinematicHero";
import FilmGrain from "@/components/cinematic/FilmGrain";
import ChapterOne from "@/components/chapters/ChapterOne";
import ChapterTwo from "@/components/chapters/ChapterTwo";
import ChapterThree from "@/components/chapters/ChapterThree";
import ChapterFour from "@/components/chapters/ChapterFour";
import ChapterFive from "@/components/chapters/ChapterFive";
import BobbyProfile from "@/components/sections/BobbyProfile";
import GangSection from "@/components/sections/GangSection";
import MemeArsenal from "@/components/sections/MemeArsenal";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <main className="flex-1">
      <FilmGrain />
      <IntroSequence onComplete={() => setIntroDone(true)} />
      <CinematicHero />

      <div id="story">
        <ChapterOne />
        <ChapterTwo />
        <ChapterThree />
        <ChapterFour />
        <ChapterFive />
      </div>

      <BobbyProfile />
      <GangSection />
      <MemeArsenal />
      <FinalCTA />
    </main>
  );
}