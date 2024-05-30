import { motion as m } from "framer-motion";
import me from "../assets/images/me_5.png";
import { servicesData } from "@/lib/helper/datas";

export default function Services() {
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
    },
  };

  const imageAnimation = {
    initial: { opacity: 0, x: 10 },
    inView: { opacity: 1, x: 0 },
  };

  return (
    <div className="text-white snap-start h-[800px] md:h-screen lg:h-[800px] md:max-h-screen bg-black pt-14 relative">
      <div className="block md:flex items-center justify-between">
        <div className="px-5 md:px-0 md:pl-14 pt-0 md:pt-10 w-full md:w-10/12 lg:w-1/2 ">
          {servicesData.map((data, key) => {
            return (
              <div className="mt-8 sm:mt-10">
                <m.h1
                  variants={titleAnimation}
                  initial="initial"
                  whileInView="inView"
                  transition={{
                    duration: 1,
                    delay: key * 0.1,
                  }}
                  className="greeting-text-shadow text-xl sm:text-3xl md:text-4xl text-blue-50"
                >
                  {data.title}
                </m.h1>
                <m.p
                  variants={titleAnimation}
                  initial="initial"
                  whileInView="inView"
                  transition={{
                    duration: 1,
                    delay: key * 0.1 + 0.1,
                  }}
                  className="pt-2 sm:pt-4 text-xs sm:text-sm md:text-[16px]"
                >
                  {data.desc}
                </m.p>
              </div>
            );
          })}
        </div>
        <m.div
          variants={imageAnimation}
          initial="initial"
          whileInView="inView"
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="relative md:absolute bottom-0 right-0 hidden md:block w-1/2 lg:w-[40%]"
        >
          <img src={me} alt="myself" className="w-full" />
        </m.div>
      </div>
    </div>
  );
}

// md:w-[400px] md:h-[410px] lg:w-[450px] lg:h-[510px]
