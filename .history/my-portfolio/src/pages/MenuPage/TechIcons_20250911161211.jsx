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
  HTML5: <FaHtml5 className="text-orange-500" />,
  CSS3: <FaCss3Alt className="text-blue-600" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
  "Styled-Components": <SiStyledcomponents className="text-pink-500" />,
  "CSS Modules": <SiCssmodules className="text-blue-500" />,
  GitHub: <VscGithub className="text-white" />,
  Python: <FaPython className="text-yellow-400" />,
  Django: <SiDjango className="text-green-950" />,
  Flutter: <SiFlutter className="text-blue-500" />,
  MUI: <SiMui className="text-blue-400" />,
};
