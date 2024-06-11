import { CardContainer } from "@/components/3dCard/CardContainer";
import CardItem from "@/components/3dCard/CardItem";
import { MouseEnterContextProvider } from "@/components/general/MouseEnterContext";
import Layout from "@/components/sructure/Layout";
import { projectDatas } from "@/lib/helper/datas";
import { motion as m } from "framer-motion";

export default function AllProjectCert() {
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

  const projectsAnimation = {
    initial: {
      opacity: 0,
      y: 5,
    },
    inView: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 1,
        delay: i * 0.1 + 0.3,
      },
    }),
  };

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Layout className="text-white font-micrhroma overflow-auto">
      <div className="mt-28 px-5 md:px-14">
        <h1 className="text-3xl greeting-text-shadow">
          PROJECTS & CERTIFICATES
        </h1>
        <div className="flex items-center gap-2 mt-10">
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
            viewport={{ once: true }}
            className="text-white/50"
          >
            Projects
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
            viewport={{ once: true }}
            className="h-[1px] w-full bg-white/50 mt-1"
          ></m.div>
        </div>
        <MouseEnterContextProvider>
          <m.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-5 w-fit"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {projectDatas.projects.map((data, k) => (
              <m.div
                key={k}
                custom={k}
                variants={projectsAnimation}
                viewport={{ once: true }}
              >
                <CardContainer
                  index={k + 1}
                  className="relative w-full max-w-[380px] h-auto md:h-[289px] rounded-xl border-2 border-white/20 p-6 text-white"
                >
                  <CardItem translateZ={50} index={k + 1}>
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
                  <CardItem index={k + 1} translateZ={40} className="pt-2">
                    <h1 className="text-2xl">{data.title}</h1>
                    <p className="pt-1">{data.desc}</p>
                  </CardItem>
                </CardContainer>
              </m.div>
            ))}
          </m.div>
          <div className="flex items-center gap-2 mt-10">
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
              viewport={{ once: true }}
              className="text-white/50"
            >
              Certificates
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
              viewport={{ once: true }}
              className="h-[1px] w-full bg-white/50 mt-1"
            ></m.div>
          </div>
          <m.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {projectDatas.certificates.map((data, k) => (
              <m.div
                key={k + projectDatas.projects.length}
                custom={k}
                variants={projectsAnimation}
                className="w-full"
                viewport={{ once: true }}
              >
                <CardContainer
                  index={k + projectDatas.projects.length + 1}
                  className="relative w-full h-auto md:h-[289px] rounded-xl border-2 border-white/20 p-6 text-white"
                >
                  <CardItem
                    translateZ={50}
                    index={k + projectDatas.projects.length + 1}
                  >
                    <div className="flex items-center gap-2">
                      {data.image.map((image, i) => (
                        <img
                          src={image.source}
                          alt={"certificate"}
                          key={i}
                          className={`${image.width} h-[171px]`}
                        />
                      ))}
                    </div>
                  </CardItem>
                  <CardItem
                    index={k + projectDatas.projects.length + 1}
                    translateZ={40}
                    className="pt-2"
                  >
                    <h1 className="text-2xl">{data.title}</h1>
                    <p className="pt-1">{data.desc}</p>
                  </CardItem>
                </CardContainer>
              </m.div>
            ))}
          </m.div>
        </MouseEnterContextProvider>
      </div>
    </Layout>
  );
}
