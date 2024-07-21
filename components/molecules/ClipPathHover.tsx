import React from "react";
import { motion as m, useAnimate } from "framer-motion";
import { twMerge } from "tailwind-merge";

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

type Side = "left" | "right" | "top" | "bottom";

type BoxProps = {
  Icon: React.ElementType;
  href: string;
  className?: string;
  delay: number;
};

const Box: React.FC<BoxProps> = ({ Icon, href, className, delay }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: React.MouseEvent): Side => {
    const box = e.currentTarget.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as Side,
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right" as Side,
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as Side,
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as Side,
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    const side: Side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const side: Side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <m.a
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 10, duration: 1, delay: delay }}
      href={href}
      target="_blank"
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
      className={twMerge(
        "relative grid w-full place-content-center",
        className
      )}
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl" />
      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-white text-black"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </m.a>
  );
};

export default Box;
