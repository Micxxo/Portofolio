import Box from "@/components/ClipPathHover/Box";
import { skillDatas } from "@/lib/helper/datas";

export default function Skills() {
  return (
    <div className="text-white overflow-auto sm:overflow-hidden">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-6 xl:grid-cols-12 w-fit rounded-sm ">
        {skillDatas.skills.map((data, key) => {
          return (
            <Box
              key={key}
              Icon={data.icon}
              href={data.href}
              delay={key * 0.1 + 0.1}
              className="w-[91px] h-20 border-[1px] border-[#d7d7d7] border-opacity-40 "
            />
          );
        })}
      </div>
    </div>
  );
}
