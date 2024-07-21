import About from "@/components/templates/About";
import Contact from "@/components/templates/Contact";
import Greeting from "@/components/templates/Greeting";
import { Portofolio } from "@/components/templates/Portofolio";
import Tools from "@/components/templates/Tools";
import React from "react";

const Home = () => {
  return (
    <div className="h-screen font-micrhroma">
      <Greeting />
      <About />
      <Portofolio />
      <Tools />
      <Contact />
    </div>
  );
};

export default Home;
