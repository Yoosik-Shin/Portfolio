// icons.js
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaJs, FaPython } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { SiSpringboot, SiMysql, SiStyledcomponents, SiTailwindcss, SiBootstrap, SiCssmodules, SiDjango, SiFlutter, SiThymeleaf, SiSpringsecurity, SiMui } from "react-icons/si";

export const techIcons = {
  Java: <FaJava className="text-red-500 text-xl" />,
  React: <FaReact className="text-blue-500 text-xl" />,
  "Spring Boot": <SiSpringboot className="text-green-600 text-xl" />,
  "Spring Security": <SiSpringsecurity className="text-green-500 text-xl" />,
  Thymeleaf: <SiThymeleaf className="text-green-700 text-xl" />,
  MySQL: <SiMysql className="text-sky-600 text-xl" />,
  BootStrap: <SiBootstrap className="text-purple-500 text-xl" />,
  HTML5: <FaHtml5 size={50} className="text-orange-500" />,
  CSS3: <FaCss3Alt size={50} className="text-blue-600" />,
  JavaScript: <FaJs size={50} className="text-yellow-400" />,
  "Tailwind CSS": <SiTailwindcss size={50} className="text-cyan-400" />,
  "Styled-Components": <SiStyledcomponents size={50} className="text-pink-500" />,
  "CSS Modules": <SiCssmodules size={50} className="text-blue-500" />,
  GitHub: <VscGithub size={50} className="text-white" />,
  Python: <FaPython size={50} className="text-yellow-400" />,
  Django: <SiDjango size={50} className="text-green-950" />,
  Flutter: <SiFlutter size={50} className="text-blue-500" />,
  MUI: <SiMui size={50} className="text-blue-400" />,
};
