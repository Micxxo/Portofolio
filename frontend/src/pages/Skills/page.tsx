import { motion as m } from "framer-motion";
import Skills from "./skills";
import { skillDatas } from "@/lib/helper/datas";

export default function SkillsPage() {
  const titleAnimation = {
    initial: {
      opacity: 0,
      y: 10,
      textShadow: "0",
    },
    inView: {
      opacity: 1,
      y: 0,
      textShadow: "-1px 1px 3px rgba(255, 255, 255, 0.98)",
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 1,
        delay: 0.2,
      },
    },
  };

  const desc = {
    initial: {
      opacity: 0,
      x: -10,
    },
    inView: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <div className="snap-start h-[800px] md:h-screen lg:h-[800px] max-h-screen ">
      <m.h1
        variants={titleAnimation}
        initial="initial"
        whileInView="inView"
        className="text-blue-50 greeting-text-shadow text-xl sm:text-3xl md:text-4xl px-5 md:px-0 md:pl-14 pt-20 md:pt-28"
      >
        {skillDatas.title}
      </m.h1>
      <div className="px-5 md:px-14 mt-10">
        <div className="flex items-center gap-2 mb-5">
          <m.p
            variants={desc}
            initial="initial"
            whileInView="inView"
            transition={{
              type: "spring",
              bounce: 0.5,
              duration: 1,
              delay: 0.3,
            }}
            className="text-white/50"
          >
            {skillDatas.subtitle}
          </m.p>
          <m.div
            variants={desc}
            initial="initial"
            whileInView="inView"
            transition={{
              type: "spring",
              bounce: 0.5,
              duration: 1,
              delay: 0.4,
            }}
            className="h-[1px] w-full bg-white/50 mt-1"
          ></m.div>
        </div>
        <Skills />
      </div>
    </div>
  );
}
