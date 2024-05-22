import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { CardItemProps } from "@/lib/helper/interface";
import { useMouseEnter } from "../general/MouseEnterContext";

const CardItem: React.FC<CardItemProps> = ({
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  index,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { isMouseEntered, mouseId } = useMouseEnter();

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered && index === mouseId) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  };

  return (
    <div
      ref={ref}
      className={cn("w-full transition duration-200 ease-linear", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default CardItem;
