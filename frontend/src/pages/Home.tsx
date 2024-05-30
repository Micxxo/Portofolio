import { AnimatePresence, motion as m } from "framer-motion";
import BottomShadowGreet from "@/components/general/BottomShadowGreet";
import { useState, useEffect } from "react";

export default function Home() {
  const [greet, setGreet] = useState("name");

  useEffect(() => {
    const interval = setInterval(() => {
      setGreet((prevGreet) => {
        if (prevGreet === "name") return "pause";
        if (prevGreet === "pause") return "role";
        if (prevGreet === "role") return "pause2";
        if (prevGreet === "pause2") return "role2";
        if (prevGreet === "role2") return "pause3";
        if (prevGreet === "pause3") return "name";
        return "name";
      });
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  const greetingAnimate = {
    initial: {
      opacity: 0,
      textShadow: "0",
    },
    animate: {
      opacity: 1,
      textShadow: "-1px 1px 10px rgba(255, 255, 255, 0.98)",
      transition: {
        duration: 1.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <div className="drop-shadow-2xl flex items-center justify-center font-micrhroma snap-start h-screen lg:h-[800px] max-h-screen">
      <div className="mt-0 md:mt-10">
        <AnimatePresence mode="wait">
          {greet === "name" && (
            <>
              <m.h1
                key="name"
                variants={greetingAnimate}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative text-white text-center text-3xl sm:text-4xl md:text-5xl greeting-text-shadow tracking-wide z-10"
              >
                MICO
              </m.h1>

              <m.h1
                key="pause"
                variants={greetingAnimate}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative text-white text-center text-3xl sm:text-4xl md:text-5xl pt-5 greeting-text-shadow tracking-wide z-10"
              >
                FEBRIAN
              </m.h1>

              <m.div
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 1.5,
                  },
                }}
                className="relative -top-8  -z-0"
              >
                <BottomShadowGreet />
              </m.div>
            </>
          )}

          {greet === "role" && (
            <>
              <m.h1
                key="role"
                variants={greetingAnimate}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative text-white text-center text-3xl sm:text-4xl md:text-5xl pt-5 greeting-text-shadow tracking-wide z-10"
              >
                FULLSTACK
              </m.h1>

              <m.h1
                key="pause2"
                variants={greetingAnimate}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative text-white text-center text-3xl sm:text-4xl md:text-5xl pt-5 greeting-text-shadow tracking-wide z-10"
              >
                DEVELOPER
              </m.h1>

              <m.div
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 1.5,
                  },
                }}
                className="relative -top-8 left-0 md:left-4 -z-0"
              >
                <BottomShadowGreet />
              </m.div>
            </>
          )}

          {greet === "role2" && (
            <>
              <m.h1
                key="role2"
                variants={greetingAnimate}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative text-white text-center text-3xl sm:text-4xl md:text-5xl pt-5 greeting-text-shadow tracking-wide z-10"
              >
                SOFTWARE
              </m.h1>

              <m.h1
                key="pause3"
                variants={greetingAnimate}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative text-white text-center text-3xl sm:text-4xl md:text-5xl pt-5 greeting-text-shadow tracking-wide z-10"
              >
                ENGINEER
              </m.h1>

              <m.div
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 1.5,
                  },
                }}
                className="relative -top-8 left-0 md:left-4 -z-0"
              >
                <BottomShadowGreet />
              </m.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
