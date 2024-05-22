import React from "react";
import { cardBodyProps } from "@/lib/helper/interface";
import { cn } from "@/lib/utils";

const CardBody: React.FC<cardBodyProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "h-96 w-full transform-style:preserve-3d  & > *:transform-style:preserve-3d",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
};

export default CardBody;
