import Navbar from "./Navbar";
import { layoutProps } from "@/lib/helper/interface";
import { twMerge } from "tailwind-merge";

export default function Layout({ children, className }: layoutProps) {
  return (
    <section
      className={twMerge(
        "w-screen h-screen max-w-[1440px] xl:mx-auto bg-black  font-micrhroma snap-none md:snap-y md:snap-mandatory overflow-x-hidden",
        className
      )}
    >
      <Navbar />
      {/* <Star /> */}
      {children}
    </section>
  );
}
