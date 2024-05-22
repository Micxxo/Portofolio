import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion as m } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-creative";

import { EffectCreative, Autoplay } from "swiper/modules";
import { aboutData } from "@/lib/helper/datas";
import Star from "./Star";
import CountUp from "react-countup";

export default function ExpSlider() {
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

  return (
    <Swiper
      grabCursor={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectCreative, Autoplay]}
      className="px-5 mt-10"
    >
      {aboutData.experience.map((data, key) => {
        return (
          <SwiperSlide key={key} className="flex items-center gap-2 bg-black">
            <Star width="45" height="45" />
            <m.div
              variants={expAnimation}
              initial="initial"
              whileInView="inView"
              transition={{ duration: 1, delay: 0.1 }}
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
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
