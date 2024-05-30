import { Swiper, SwiperSlide } from "swiper/react";

import { motion as m } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-creative";

import { EffectCreative, Autoplay } from "swiper/modules";
import { projectDatas } from "@/lib/helper/datas";
import { CardContainer } from "@/components/3dCard/CardContainer";
import CardItem from "@/components/3dCard/CardItem";

export default function ProjCertSlider() {
  const projectsAnimation = {
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
      className="px-5 mt-10 block md:hidden"
    >
      {projectDatas.projects.slice(0, 1).map((data, key) => {
        return (
          <>
            <SwiperSlide key={key + 1} className=" bg-black">
              <m.div
                variants={projectsAnimation}
                initial="initial"
                whileInView="inView"
                transition={{
                  duration: 1,
                  delay: 0.2,
                }}
              >
                <CardContainer
                  index={key + 1}
                  className="relative w-fit max-w-[380px] h-[289px] rounded-xl border-2 border-white/20 p-6 text-white"
                >
                  <CardItem translateZ={50} index={key + 1}>
                    <div className="flex items-center gap-2">
                      {data.image.map((image, i) => (
                        <img
                          src={image.source}
                          alt={"project"}
                          key={i}
                          className={`${image.width} !h-[171px]`}
                        />
                      ))}
                    </div>
                  </CardItem>
                  <CardItem index={key + 1} translateZ={40} className="pt-2">
                    <h1 className="text-2xl">{data.title}</h1>
                    <p className="pt-1">{data.desc}</p>
                  </CardItem>
                </CardContainer>
              </m.div>
            </SwiperSlide>

            <SwiperSlide key={key + 2} className="bg-black">
              {projectDatas.certificates.slice(0, 1).map((data, k) => (
                <m.div
                  variants={projectsAnimation}
                  initial="initial"
                  whileInView="inView"
                  transition={{
                    duration: 1,
                    delay: 0.2,
                  }}
                >
                  <CardContainer
                    key={k}
                    index={k + 2}
                    className="relative w-full h-auto md:h-[289px] rounded-xl border-2 border-white/20 p-6 text-white"
                  >
                    <CardItem translateZ={50} index={k + 2}>
                      <div className="flex items-center gap-2">
                        {data.image.map((image, i) => (
                          <img
                            src={image.source}
                            alt={"project"}
                            key={i}
                            className={`${image.width} h-[171px]`}
                          />
                        ))}
                      </div>
                    </CardItem>
                    <CardItem index={k + 2} translateZ={40} className="pt-2">
                      <h1 className="text-2xl">{data.title}</h1>
                      <p className="pt-1">{data.desc}</p>
                    </CardItem>
                  </CardContainer>
                </m.div>
              ))}
            </SwiperSlide>

            <SwiperSlide key={key + 3} className="bg-black">
              <m.div
                variants={projectsAnimation}
                initial="initial"
                whileInView="inView"
                transition={{
                  duration: 1,
                  delay: 0.2,
                }}
              >
                <a href="/proj-cert">
                  <CardContainer
                    index={3}
                    className="relative w-full md:w-[350px] h-[289px] rounded-xl border-2 border-white/20 p-6 text-white flex items-center justify-center flex-col"
                  >
                    <CardItem
                      translateZ={50}
                      index={3}
                      className="mx-auto w-fit text-3xl "
                    >
                      <h1>More?</h1>
                    </CardItem>
                    <CardItem
                      translateZ={50}
                      index={3}
                      className="w-fit mx-auto pr-5 text-[16px] sm:text-xl md:text-sm"
                    >
                      <p>Click Here</p>
                    </CardItem>
                  </CardContainer>
                </a>
              </m.div>
            </SwiperSlide>
          </>
        );
      })}
    </Swiper>
  );
}
