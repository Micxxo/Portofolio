import Navbar from "./Navbar";
import { layoutProps } from "@/lib/helper/interface";
import { twMerge } from "tailwind-merge";

export default function Layout({ children, className }: layoutProps) {
  return (
    <section className="bg-black flex items-center justify-center font-micrhroma overflow-y-auto">
      <Navbar />
      {/* <Star /> */}
      <div
        className={twMerge(
          "w-screen h-screen max-w-[2000px] xl:mx-auto bg-black font-micrhroma snap-y snap-mandatory overflow-x-hidden",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
}
