import { motion as m } from "framer-motion";
import { projectDatas } from "@/lib/helper/datas";
import "swiper/css";
import "swiper/css/scrollbar";
import { CardContainer } from "@/components/3dCard/CardContainer";
import CardItem from "@/components/3dCard/CardItem";
import { MouseEnterContextProvider } from "@/components/general/MouseEnterContext";

export default function ProjectPage() {
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

  const descAnimation = {
    initial: {
      opacity: 0,
      y: 10,
    },
    inView: {
      opacity: 1,
      y: 0,
    },
  };

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
    <div className="snap-start h-[800px] md:h-screen lg:h-[800px] max-h-screen text-white overflow-auto sm:overflow-hidden">
      <div className="px-5 md:px-0 md:pl-14 pt-20 md:pt-24">
        <m.h1
          variants={titleAnimation}
          initial="initial"
          whileInView="inView"
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 1,
            delay: 0.2,
          }}
          className="greeting-text-shadow text-xl sm:text-3xl md:text-4xl text-blue-50"
        >
          {projectDatas.title}
        </m.h1>
        <m.p
          className="pt-3 w-full md:w-10/12 text-xs md:text-[16px] leading-2 sm:leading-5 md:leading-6"
          variants={descAnimation}
          initial="initial"
          whileInView="inView"
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 1,
            delay: 0.3,
          }}
        >
          {projectDatas.description}
        </m.p>
      </div>

      <MouseEnterContextProvider>
        <div className="mt-8 flex items-center gap-10 px-5 md:px-14">
          {projectDatas.projects.slice(0, 2).map((data, k) => (
            <m.div
              variants={projectsAnimation}
              initial="initial"
              whileInView="inView"
              transition={{
                type: "spring",
                stiffness: 100,
                duration: 1,
                delay: k * 0.1 + 0.3,
              }}
            >
              <CardContainer
                key={k}
                index={k}
                className="relative w-fit h-auto rounded-xl border-2 border-white/20 p-6 text-white"
              >
                <CardItem translateZ={50} index={k}>
                  <div className="flex items-center gap-2">
                    {data.image.map((image, i) => (
                      <img src={image.source} alt={"project"} key={i} />
                    ))}
                  </div>
                </CardItem>
                <CardItem index={k} translateZ={40} className="pt-2">
                  <h1 className="text-2xl">{data.title}</h1>
                  <p className="pt-1">{data.desc}</p>
                </CardItem>
              </CardContainer>
            </m.div>
          ))}
          <m.div
            variants={projectsAnimation}
            initial="initial"
            whileInView="inView"
            transition={{
              type: "spring",
              stiffness: 100,
              duration: 1,
              delay: 0.6,
            }}
          >
            <CardContainer
              index={1}
              className="relative w-fit h-auto rounded-xl border-2 border-white/20 p-6 text-white"
            >
              <CardItem translateZ={50} index={1}>
                <h1>Click More</h1>
              </CardItem>
            </CardContainer>
          </m.div>
        </div>
      </MouseEnterContextProvider>
    </div>
  );
}
