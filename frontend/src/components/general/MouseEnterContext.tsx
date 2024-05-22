import React, { createContext, useContext, useState } from "react";

type MouseEnterContextType = {
  isMouseEntered: boolean;
  setIsMouseEntered: React.Dispatch<React.SetStateAction<boolean>>;
  mouseId: number;
  setMouseId: React.Dispatch<React.SetStateAction<number>>;
};

type MouseEnterContextProviderProps = {
  children: React.ReactNode;
};

export const MouseEnterContext = createContext<
  MouseEnterContextType | undefined
>(undefined);

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (!context) {
    throw new Error(
      "useMouseEnter must be used within a MouseEnterContextProvider"
    );
  }
  return context;
};

export const MouseEnterContextProvider: React.FC<
  MouseEnterContextProviderProps
> = ({ children }) => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const [mouseId, setMouseId] = useState(0);

  const value: MouseEnterContextType = {
    isMouseEntered,
    setIsMouseEntered,
    mouseId,
    setMouseId,
  };

  return (
    <MouseEnterContext.Provider value={value}>
      {children}
    </MouseEnterContext.Provider>
  );
};
