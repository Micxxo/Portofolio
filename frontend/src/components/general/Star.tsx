import { starProps } from "@/lib/helper/interface";
import { twMerge } from "tailwind-merge";
import { motion as m } from "framer-motion";

export default function Star({ className, height, width }: starProps) {
  const svgAnimation = {
    initial: {
      rotate: -10,
      opacity: 0,
      filter: "drop-shadow(0px)",
    },
    animate: {
      rotate: 0,
      filter: "drop-shadow(0px 0px 3px #ffffff)",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    hover: {
      scale: 1.1,
    },
  };

  const pathAnimation = {
    initial: {
      pathLength: 0,
      opacity: 0,
    },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className={twMerge("", className)}>
      <m.svg
        width={width ? width : "53"}
        height={height ? height : "51"}
        viewBox="0 0 53 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={svgAnimation}
        whileHover="hover"
        initial="initial"
        animate="animate"
        drag
      >
        <m.path
          variants={pathAnimation}
          initial="initial"
          animate="animate"
          d="M26.4998 0L37.3251 25.5H15.6744L26.4998 0Z"
          fill="#D9D9D9"
        />
        <m.path
          variants={pathAnimation}
          initial="initial"
          animate="animate"
          d="M26.4998 51L37.3251 25.5H15.6744L26.4998 51Z"
          fill="#D9D9D9"
        />
        <m.path
          variants={pathAnimation}
          initial="initial"
          animate="animate"
          d="M1.01473 26.3699L26.1306 14.681L26.8692 36.319L1.01473 26.3699Z"
          fill="#D9D9D9"
        />
        <m.path
          variants={pathAnimation}
          initial="initial"
          animate="animate"
          d="M51.9849 24.6301L26.1305 14.681L26.8691 36.3191L51.9849 24.6301Z"
          fill="#D9D9D9"
        />
      </m.svg>
    </div>
  );
}
