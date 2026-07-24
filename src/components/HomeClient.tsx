import IntroSequence from "@/components/cinematic/IntroSequence";
import CinematicHero from "@/components/cinematic/CinematicHero";
import FilmGrain from "@/components/cinematic/FilmGrain";
import BobbyProfile from "@/components/sections/BobbyProfile";
import HomeRouteCards from "@/components/sections/HomeRouteCards";
import WhyBobby from "@/components/sections/WhyBobby";
import MemeArsenal from "@/components/sections/MemeArsenal";
import FinalCTA from "@/components/sections/FinalCTA";
import AgentSection from "@/components/sections/AgentSection";
import GameSection from "@/components/sections/GameSection";

export default function HomeClient() {
  return (
    <main className="flex-1">
      <FilmGrain />
      <IntroSequence />
      <CinematicHero />

      <BobbyProfile />
      <HomeRouteCards />
      <AgentSection />
      <GameSection />
      <WhyBobby />
      <MemeArsenal />
      <FinalCTA />
    </main>
  );
}
