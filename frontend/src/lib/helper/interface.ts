import React from "react";

export interface layoutProps {
  children: React.ReactNode;
  className?: string;
}

export interface starProps {
  width?: string;
  height?: string;
  className?: string;
}

//3d card
export interface cardContainerProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  index: number;
}

//3d card
export interface cardBodyProps {
  children: React.ReactNode;
  className?: string;
}

//3d card
export interface CardItemProps {
  children: React.ReactNode;
  className?: string;
  translateX?: number;
  translateY?: number;
  translateZ?: number;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
  index: number;
}
