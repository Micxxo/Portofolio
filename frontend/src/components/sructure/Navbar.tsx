import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { MdMailOutline } from "react-icons/md";
import { motion as m } from "framer-motion";

export default function Navbar() {
  const containerAnimate = {
    initial: {
      y: -100,
    },
    animate: {
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
      },
    },
  };

  return (
    <m.div
      variants={containerAnimate}
      initial="initial"
      animate="animate"
      className="fixed top-0 w-full max-w-[2000px] xl:mx-auto p-5 md:py-8 md:px-14 z-10 "
    >
      <div className="flex items-center justify-between">
        <a href="/">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </a>
        <div className="flex items-center gap-5">
          <Button
            variant="default"
            size="icon"
            className="bg-primary text-white border-2 border-white md:border-none w-fit px-2 py-5 md:py-0 rounded-full"
          >
            <MdMailOutline className="text-2xl md:text-xl" />
          </Button>
          <Button
            variant={"outline"}
            className="bg-light2 text-black hidden md:block"
          >
            Get in touch with me!
          </Button>
        </div>
      </div>
    </m.div>
  );
}
