import adminPanel1 from "../../assets/images/admin-panel-1.png";
import adminPanel2 from "../../assets/images/admin-panel-2.png";
import lks2024 from "../../assets/images/2nd Web-tech LKS Jabar.jpg";
import schoolProfile1 from "../../assets/images/school-profile-1.png";
import schoolProfile2 from "../../assets/images/school-profile-2.png";
import loginPms from "../../assets/images/Login_pms.png";
import obic from "../../assets/images/Obic.png";
import obicHome from "../../assets/images/Obic-home.png";
import fcc from "../../assets/images/Responsive-web-design-FCC.png";
import hms from "../../assets/images/HMS.png";
import crm from "../../assets/images/CRM.png";

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

export const servicesData = [
  {
    id: 1,
    title: "Digitizing businesses",
    desc: "I'm all for driving change. Digitizing web-based or app products, using the latest tech to shake up old-school ways and amp up efficiency, customer experience, and innovation",
  },
  {
    id: 2,
    title: "Providing technological solutions",
    desc: "With my passion for technology, I provide tech-driven solutions to tackle diverse challenges and elevate quality of life.",
  },
];

export const aboutData = {
  id: 1,
  title: "Create something useful for the future",
  desc: "As a technology enthusiast over the past three years, I've come to appreciate the significance of readable and maintainable code in creating impactful and forward-thinking applications.",
  experience: [
    {
      id: 1,
      count: 3,
      suffix: "",
      title: "YEAR EXPERIENCE",
    },
    {
      id: 2,
      count: 5,
      suffix: "+",
      title: "PROJECTS DONE",
    },
    {
      id: 3,
      count: 10,
      suffix: "",
      title: "LEARNED SKILLS",
    },
  ],
  footerData: [
    {
      id: 1,
      title: "Maintainable",
    },
    {
      id: 2,
      title: "Modular",
    },
    {
      id: 3,
      title: "Readable",
    },
  ],
};

export const projectDatas = {
  title: "PROJECTS & CERTIFICATES",
  description:
    "Specializing in frontend development and also honed my skills in backend development. I've successfully built web applications using various JavaScript frameworks, including ReactJS , VueJS and others. My focus on writing modular, readable, and maintainable code not only ensures the smooth development of current projects but also lays the foundation for easy scalability and adaptability in the future.",
  projects: [
    {
      id: 1,
      title: "ADMIN PANEL",
      desc: "Schoolarship Project",
      image: [
        {
          id: 1,
          source: adminPanel1,
          alt: "Admin Panel",
          width: "w-1/2",
        },
        {
          id: 2,
          source: adminPanel2,
          alt: "Admin Panel",
          width: "w-1/2",
        },
      ],
    },
    {
      id: 2,
      title: "SCHOOL PROFILE",
      desc: "Freelance Project",
      image: [
        {
          id: 1,
          source: schoolProfile1,
          alt: "School Profile",
          width: "w-1/2",
        },
        {
          id: 2,
          source: schoolProfile2,
          alt: "School Profile",
          width: "w-1/2",
        },
      ],
    },
    {
      id: 3,
      title: "Proj Management",
      desc: "Freelance Project",
      image: [
        {
          id: 1,
          source: loginPms,
          alt: "PMS",
          width: "w-full",
        },
      ],
    },
    {
      id: 4,
      title: "Alarm APP",
      desc: "School Project",
      image: [
        {
          id: 1,
          source: obic,
          alt: "obic",
          width: "w-[120px]",
        },
        {
          id: 2,
          source: obicHome,
          alt: "obic",
          width: "w-[120px]",
        },
      ],
    },
    {
      id: 5,
      title: "Cust Management",
      desc: "Freelance Project",
      image: [
        {
          id: 1,
          source: crm,
          alt: "CRM",
          width: "w-full",
        },
      ],
    },
    {
      id: 6,
      title: "Hotel Management",
      desc: "Freelance Project",
      image: [
        {
          id: 1,
          source: hms,
          alt: "HMS",
          width: "w-full",
        },
      ],
    },
  ],
  certificates: [
    {
      id: 1,
      title: "2nd Place",
      desc: "Web competition 2024",
      image: [
        {
          id: 1,
          source: lks2024,
          alt: "LKS JABAR",
          width: "w-full",
        },
      ],
    },
    {
      id: 2,
      title: "Free Code Camp",
      desc: "Responsive Web Design 2022",
      image: [
        {
          id: 1,
          source: fcc,
          alt: "FCC",
          width: "w-full",
        },
      ],
    },
  ],
};

export const skillDatas = {
  title: "LEARNED SKILLS",
  subtitle: "Fullstack",
  skills: [
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
      name: "Docker",
      icon: TbBrandDocker,
      href: "https://www.docker.com/",
    },
    {
      id: 14,
      name: "MySQL",
      icon: TbBrandMysql,
      href: "https://www.mysql.com/",
    },
    {
      id: 15,
      name: "GitHub",
      icon: SiGithub,
      href: "https://github.com/",
    },
    {
      id: 16,
      name: "GitLab",
      icon: SiGitlab,
      href: "https://gitlab.com/",
    },
  ],
};
