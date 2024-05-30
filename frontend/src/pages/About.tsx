import { aboutData } from "@/lib/helper/datas";
import Star from "@/components/general/Star";
import CountUp from "react-countup";
import { motion as m } from "framer-motion";
import ExpSlider from "@/components/general/ExpSlider";

export default function About() {
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

  const expAnimation = {
    initial: {
      opacity: 0,
      x: -10,
    },
    inView: {
      opacity: 1,
      x: 0,
    },
  };

  const footerAnimation = {
    initial: {
      opacity: 0,
      y: 5,
    },
    inView: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="snap-start h-[800px] md:h-screen lg:h-[800px] max-h-screen text-white relative">
      <m.blockquote
        variants={titleAnimation}
        initial="initial"
        whileInView="inView"
        transition={{ duration: 1, delay: 0.1 }}
        className="pt-32 px-5 md:px-14 greeting-text-shadow text-xl sm:text-2xl md:text-4xl w-full lg:w-[80%]  leading-8 sm:leading-[50px] text-blue-50"
      >
        "{aboutData.title}"
      </m.blockquote>
      <m.p
        variants={titleAnimation}
        initial="initial"
        whileInView="inView"
        transition={{ duration: 1, delay: 0.2 }}
        className="pt-2 md:pt-5 px-5 md:px-14 text-xs md:text-[16px] leading-4 md:leading-6 w-full lg:w-[60%]"
      >
        {aboutData.desc}
      </m.p>
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="hidden sm:flex flex-col lg:flex-row md:items-start lg:items-center gap-5 space-y-5 md:space-y-0 px-5 md:px-14 mt-10"
      >
        {aboutData.experience.map((data, key) => {
          return (
            <div key={key} className="flex items-center gap-2">
              <Star width="45" height="45" />
              <m.div
                variants={expAnimation}
                initial="initial"
                whileInView="inView"
                transition={{ duration: 1, delay: key * 0.1 + 0.1 }}
              >
                <CountUp
                  className="text-3xl md:text-5xl"
                  end={data.count}
                  duration={5}
                />
              </m.div>
              <m.p
                variants={expAnimation}
                initial="initial"
                whileInView="inView"
                transition={{ duration: 1, delay: key * 0.1 + 0.2 }}
                className="text-3xl md:text-5xl"
              >
                {data.suffix}
              </m.p>
              <m.p
                variants={expAnimation}
                initial="initial"
                whileInView="inView"
                transition={{
                  duration: 0.5,
                  delay: key * 0.1 + 0.2,
                }}
                className="pr-10"
              >
                {data.title}
              </m.p>
            </div>
          );
        })}
      </m.div>
      <div className="block sm:hidden">
        <ExpSlider />
      </div>
      <div className="flex items-center gap-2 md:gap-5 absolute bottom-8 w-full justify-center">
        <m.div
          variants={footerAnimation}
          initial="initial"
          whileInView="inView"
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 1,
            delay: 0.1,
          }}
          className="w-2 h-2 md:w-3 md:h-3 bg-[#D9D9D9] rounded-full"
        ></m.div>
        {aboutData.footerData.map((data, key) => {
          return (
            <>
              <m.p
                variants={footerAnimation}
                initial="initial"
                whileInView="inView"
                transition={{
                  type: "spring",
                  stiffness: 100,
                  duration: 1,
                  delay: key * 0.1,
                }}
                key={key}
                className="text-[10px] md:text-[16px]"
              >
                {data.title}
              </m.p>
              <m.div
                variants={footerAnimation}
                initial="initial"
                whileInView="inView"
                transition={{
                  type: "spring",
                  stiffness: 100,
                  duration: 1,
                  delay: key * 0.1,
                }}
                key={key}
                className={`w-5 md:w-12 h-[1px] bg-[#D9D9D9] ${
                  key === aboutData.footerData.length - 1 ? "hidden" : "block"
                }`}
              ></m.div>
            </>
          );
        })}
        <m.div
          variants={footerAnimation}
          initial="initial"
          whileInView="inView"
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 1,
            delay: 0.5,
          }}
          className="w-2 h-2 md:w-3 md:h-3 bg-[#D9D9D9] rounded-full"
        ></m.div>
      </div>
    </div>
  );
}
