import React from "react";
import { EvervaultCard } from "../ui/card/Evervault";
import { aboutAdditionData } from "@/constant";

const About = () => {
  return (
    <main className="h-screen relative w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 w-full h-full bg-black/85 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <EvervaultCard
        text="Digitizing your businesses"
        desc="& Providing technological solutions"
        addition={aboutAdditionData}
        className="rounded-none"
      />
    </main>
  );
};

export default About;
