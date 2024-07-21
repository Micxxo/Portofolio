"use client";
import React from "react";
import { WavyBackground } from "../molecules/WavyBackground";
import { Button } from "../molecules/MovingBorder";
import { FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="h-screen relative w-full overflow-hidden bg-slate-950 text-white p-5">
      <WavyBackground
        className="max-w-4xl mx-auto pb-40"
        colors={["#f87171", "#fbbf24", "#4ade80", "#60a5fa", "#a78bfa"]}
      >
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Get in touch with me!
        </p>
        <div className="block space-x-4 md:space-x-0 md:flex items-center w-full justify-center gap-5 mt-5">
          <Link href={"https://github.com/Micxxo"}>
            <Button
              borderRadius="1.75rem"
              containerClassName="p-3 bg-white/30 backdrop-blur-lg border border-white/10 text-black"
            >
              <FaGithub className="text-2xl" />
            </Button>
          </Link>
          <Link href={"https://www.instagram.com/mico_feb"}>
            <Button
              borderRadius="1.75rem"
              containerClassName="p-3 bg-white/30 backdrop-blur-lg border border-white/10 text-black"
            >
              <FaInstagram className="text-2xl" />
            </Button>
          </Link>
        </div>
      </WavyBackground>
    </main>
  );
}
