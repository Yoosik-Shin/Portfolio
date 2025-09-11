// icons.js
import { FaJava, FaReact } from "react-icons/fa";
import { SiSpringboot, SiSpringsecurity, SiThymeleaf, SiMysql } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";

export const techIcons = {
  Java: <FaJava className="text-red-500 text-xl" />,
  React: <FaReact className="text-blue-500 text-xl" />,
  "Spring Boot": <SiSpringboot className="text-green-600 text-xl" />,
  "Spring Security": <SiSpringsecurity className="text-green-500 text-xl" />,
  Thymeleaf: <SiThymeleaf className="text-green-700 text-xl" />,
  MySQL: <SiMysql className="text-sky-600 text-xl" />,
  BootStrap: <SiBootstrap className="text-purple-500 text-xl" />,
};
