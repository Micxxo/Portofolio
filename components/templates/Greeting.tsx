import React from "react";
import { Boxes } from "../ui/BackgroundBoxex";
import { TypewriterEffectSmooth } from "../ui/Typewritter";
import { name, role } from "@/constant";

const Greeting = () => {
  return (
    <main className="h-screen relative w-full overflow-hidden bg-slate-950 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-black/85 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <TypewriterEffectSmooth
        words={name}
        className="relative z-20"
        cursorClassName="h-4 sm:h-6 md:h-10 xl:h-12 ml-1 lg:ml-0"
      />
      <TypewriterEffectSmooth
        words={role}
        className="relative z-20"
        cursorClassName="hidden"
      />
    </main>
  );
};

export default Greeting;
