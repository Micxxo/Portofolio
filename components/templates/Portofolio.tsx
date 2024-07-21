"use client";
import React from "react";
import { HeroParallax } from "../molecules/PortoParallax";
import { achievments } from "@/constant";

export function Portofolio() {
  return (
    <main className="bg-slate-950 relative">
      <div className="absolute inset-0 w-full h-full bg-black/85 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <HeroParallax products={achievments} />
    </main>
  );
}
