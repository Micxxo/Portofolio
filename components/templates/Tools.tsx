"use client";
import React from "react";
import { tools } from "@/constant";
import { AnimatedTooltip } from "../molecules/Tooltip";

const Tools = () => {
  return (
    <main className="bg-slate-950 relative h-screen">
      <div className="absolute inset-0 w-full h-full bg-black/85 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <h1 className="text-blue-50 greeting-text-shadow text-xl sm:text-3xl md:text-4xl px-5 md:px-0 md:pl-14 pt-20 md:pt-28">
        DEV TOOLS
      </h1>
      <div className="px-5 md:px-14 mt-10 relative z-10"></div>
      <AnimatedTooltip items={tools} />
    </main>
  );
};

export default Tools;
