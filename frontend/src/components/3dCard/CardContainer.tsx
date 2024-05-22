import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { cardContainerProps } from "@/lib/helper/interface";
import { useMouseEnter } from "../general/MouseEnterContext";

export const CardContainer: React.FC<cardContainerProps> = ({
  children,
  className,
  containerClassName,
  index,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { setIsMouseEntered, setMouseId } = useMouseEnter();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 15;
    const y = (e.clientY - top - height / 2) / 15;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseEntered(true);
    setMouseId(index);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseEntered(false);
    setMouseId(-0);
    if (!containerRef.current) return;
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <div
      className={cn(
        "py-4 flex items-center justify-center",
        containerClassName
      )}
      style={{ perspective: "1000px" }}
    >
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative transition-all duration-200 ease-linear",
          className
        )}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  );
};
