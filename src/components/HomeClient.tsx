"use client";

import { useState } from "react";
import IntroSequence from "@/components/cinematic/IntroSequence";
import CinematicHero from "@/components/cinematic/CinematicHero";
import FilmGrain from "@/components/cinematic/FilmGrain";
import BobbyProfile from "@/components/sections/BobbyProfile";
import HomeRouteCards from "@/components/sections/HomeRouteCards";
import WhyBobby from "@/components/sections/WhyBobby";
import MemeArsenal from "@/components/sections/MemeArsenal";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomeClient() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <main className="flex-1">
      <FilmGrain />
      <IntroSequence onComplete={() => setIntroDone(true)} />
      <CinematicHero />

      <BobbyProfile />
      <HomeRouteCards />
      <WhyBobby />
      <MemeArsenal />
      <FinalCTA />
    </main>
  );
}