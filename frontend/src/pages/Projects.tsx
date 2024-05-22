import { motion as m, useInView } from "framer-motion";
import { projectDatas } from "@/lib/helper/datas";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { useRef } from "react";

export default function Projects() {
  const titleAnimation = {
    initial: {
      opacity: 0,
      y: 10,
      textShadow: "0",
    },
    inView: (i: number) => ({
      opacity: 1,
      y: 0,
      textShadow: "-1px 1px 3px rgba(255, 255, 255, 0.98)",
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 1,
        delay: 0.1 + i * 0.2,
      },
    }),
  };

  const descAnimation = {
    initial: {
      opacity: 0,
      y: 10,
    },
    inView: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1,
        delay: 0.3 + i * 0.2,
      },
    }),
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="snap-start h-[800px] md:h-screen lg:h-[800px] max-h-screen text-white overflow-auto sm:overflow-hidden">
      <div className="px-5 md:px-0 md:pl-14 pt-20 md:pt-24">
        <m.h1
          variants={titleAnimation}
          custom={0}
          initial="initial"
          animate={isInView ? "inView" : "initial"}
          className="greeting-text-shadow text-xl sm:text-3xl md:text-4xl text-blue-50"
        >
          {projectDatas.title}
        </m.h1>
        <m.p
          className="pt-3 w-full md:w-10/12 text-xs md:text-[16px] leading-2 sm:leading-5 md:leading-6"
          variants={descAnimation}
          custom={0}
          initial="initial"
          animate={isInView ? "inView" : "initial"}
        >
          {projectDatas.description}
        </m.p>
      </div>

      <div className="mt-8 flex items-center gap-10 px-5 md:px-14" ref={ref}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          scrollbar={{
            hide: false,
          }}
          modules={[Scrollbar]}
          className="w-full pb-4"
        >
          {/* {projectDatas.projects.map((data, key) => (
            <SwiperSlide key={key} className="!w-full md:!w-fit">
              <div className="relative flex items-center gap-10">
                <div>
                  <div className="flex items-center gap-3">
                    {data.image.map((img, i) => (
                      <m.div
                        key={i}
                        variants={projectsAnimation}
                        custom={key * data.image.length + i}
                        initial="initial"
                        animate={isInView ? "inView" : "initial"}
                        className="h-[172px] max-h-[172px] flex"
                      >
                        <m.img
                          src={img.source}
                          alt={img.alt}
                          className={`h-full w-full ${img.width}`}
                          variants={projectsAnimation}
                          custom={key * data.image.length + i}
                          initial="initial"
                          animate={isInView ? "inView" : "initial"}
                        />
                      </m.div>
                    ))}
                  </div>
                  <m.h1
                    variants={projectTitleAnimation}
                    custom={key}
                    initial="initial"
                    animate={isInView ? "inView" : "initial"}
                    className="text-xl sm:text-2xl md:text-3xl pt-4 "
                  >
                    {data.title}
                  </m.h1>
                  <m.p
                    variants={projectDescAnimation}
                    custom={key}
                    initial="initial"
                    animate={isInView ? "inView" : "initial"}
                    className="text-sm md:text-[16px] pt-2 md:pt-3"
                  >
                    {data.desc}
                  </m.p>
                  <Star
                    className="absolute right-12 sm:right-24 -bottom-4"
                    width="25"
                  />
                </div>
                <div className="w-[1px] h-[300px] bg-white hidden md:block"></div>
              </div>
            </SwiperSlide>
          ))} */}
        </Swiper>
      </div>
    </div>
  );
}
