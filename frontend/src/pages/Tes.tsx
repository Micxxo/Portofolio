import React from "react";
import { CardContainer } from "@/components/3dCard/CardContainer";
import img from "../assets/images/admin-panel-1.png";
import CardItem from "@/components/3dCard/CardItem";
import CardBody from "@/components/3dCard/CardBody";
import { MouseEnterContextProvider } from "@/components/general/MouseEnterContext";

const Tes = () => {
  return (
    <MouseEnterContextProvider>
      <div className="grid w-full place-content-center bg-black px-4 py-12 text-slate-900  font-micrhroma">
        <CardContainer index={2}>
          <CardBody className="relative w-full min-w-[10rem] h-auto rounded-xl border-2 border-white/[0.2] p-6 text-white ">
            <CardItem translateZ={50} className="text-xl font-bold ">
              <div className="flex items-center gap-2">
                <img src={img} alt="tes" />
                <img src={img} alt="tes" />
              </div>
            </CardItem>
            <CardItem translateZ={40} className="pt-2">
              <h1 className="text-2xl">ADMIN PANEL</h1>
              <h1 className="pt-1">Schoolarship Project</h1>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </MouseEnterContextProvider>
  );
};

export default Tes;
