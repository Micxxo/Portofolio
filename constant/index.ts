import pms from "../assets/images/Login_pms.png";
import crm from "../assets/images/CRM.png";
import hms from "../assets/images/HMS.png";
import lks from "../assets/images/2nd Web-tech LKS Jabar.jpg";
import fcc from "../assets/images/Responsive-web-design-FCC.png";
import admin1 from "../assets/images/admin-panel-1.png";
import admin2 from "../assets/images/admin-panel-2.png";
import obic from "../assets/images/obic.png";

import { FaReact, FaVuejs } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  TbBrandKotlin,
  TbBrandRedux,
  TbBrandFramerMotion,
  TbBrandTypescript,
  TbApi,
  TbBrandLaravel,
  TbBrandDocker,
  TbBrandMysql,
} from "react-icons/tb";
import { SiExpress, SiGithub, SiGitlab, SiQuasar } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

const name = [
  {
    text: "MICO",
    className: "text-white md:text-4xl text-xl font-bold",
  },
  {
    text: ".",
    className: "opacity-0",
  },
  {
    text: "FEBRIAN",
    className: "text-white md:text-4xl text-xl font-bold",
  },
];

const role = [
  {
    text: "Software",
    className: "text-neutral-300 text-sm font-normal",
  },
  {
    text: "Engineer",
    className: "text-neutral-300 text-sm font-normal",
  },
];

const aboutAdditionData = [
  {
    text: "Maintainable",
  },
  {
    text: "Modular",
  },
  {
    text: "Readable",
  },
];

const achievments = [
  {
    title: "Project Management System",
    link: "/",
    thumbnail: pms.src,
  },
  {
    title: "Customer Relationship Management",
    link: "/",
    thumbnail: crm.src,
  },
  {
    title: "Hotel Management System",
    link: "/",
    thumbnail: hms.src,
  },
  {
    title: "Free Code Camp Certification",
    link: "/",
    thumbnail: fcc.src,
  },
  {
    title: "2nd Place on Web Competition",
    link: "/",
    thumbnail: lks.src,
  },
  {
    title: "Admin Panel",
    link: "/",
    thumbnail: admin1.src,
  },
  {
    title: "Admin Panel",
    link: "/",
    thumbnail: admin2.src,
  },
  {
    title: "Obic alarm app",
    link: "/",
    thumbnail: obic.src,
  },
];

const tools = [
  {
    id: 1,
    name: "React",
    icon: FaReact,
    href: "https://react.dev/",
  },
  {
    id: 2,
    name: "VueJs",
    icon: FaVuejs,
    href: "https://vuejs.org/",
  },
  {
    id: 3,
    name: "GitLab",
    icon: SiQuasar,
    href: "https://quasar.dev/",
  },
  {
    id: 4,
    name: "Next.js",
    icon: RiNextjsLine,
    href: "https://nextjs.org/",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
    href: "https://tailwindcss.com/",
  },
  {
    id: 6,
    name: "Kotlin",
    icon: TbBrandKotlin,
    href: "https://kotlinlang.org/",
  },
  {
    id: 7,
    name: "Redux",
    icon: TbBrandRedux,
    href: "https://redux.js.org/",
  },
  {
    id: 8,
    name: "Framer Motion",
    icon: TbBrandFramerMotion,
    href: "https://www.framer.com/motion/",
  },
  {
    id: 9,
    name: "TypeScript",
    icon: TbBrandTypescript,
    href: "https://www.typescriptlang.org/",
  },
  {
    id: 10,
    name: "API",
    icon: TbApi,
    href: "https://swagger.io/",
  },
  {
    id: 11,
    name: "Laravel",
    icon: TbBrandLaravel,
    href: "https://laravel.com/",
  },
  {
    id: 12,
    name: "Express.js",
    icon: SiExpress,
    href: "https://expressjs.com/",
  },
  {
    id: 13,
    name: "Go",
    icon: FaGolang,
    href: "https://go.dev/",
  },
  {
    id: 14,
    name: "Docker",
    icon: TbBrandDocker,
    href: "https://www.docker.com/",
  },
  {
    id: 15,
    name: "MySQL",
    icon: TbBrandMysql,
    href: "https://www.mysql.com/",
  },
  {
    id: 16,
    name: "GitHub",
    icon: SiGithub,
    href: "https://github.com/",
  },
  {
    id: 17,
    name: "GitLab",
    icon: SiGitlab,
    href: "https://gitlab.com/",
  },
];

export { name, role, aboutAdditionData, achievments, tools };
