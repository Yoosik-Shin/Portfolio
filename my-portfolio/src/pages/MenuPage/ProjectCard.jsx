import React from "react";
import { Card, CardContent, CardMedia, Button } from "@mui/material";
import { FaReact, FaJava } from "react-icons/fa";
import { RiPagesFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { techIcons } from "./TechIcons";

const ProjectCard = ({ project, onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4, scale: 1.03 }}
      className=""
    >
      <Card className="relative w-[350px] h-full shadow-lg hover:shadow-xl transition-all overflow-hidden select-none"
                      sx={{ borderRadius: "1rem" }}>
        <div className="w-full h-[160px] rounded-t-2xl overflow-hidden">
        <CardMedia component="img" height="160" image={project.image} alt={project.title}
                    className="relative h-45 w-full object-cover rounded-2xl"
                    sx={{
                            backgroundColor: 'rgba(0, 0, 0, 0.096)', // 살짝 어두운 오버레이
                            backdropFilter: 'blur(2px)',          // 블러 효과로 톤다운 + 차분해짐
                          }}></CardMedia>
        </div>
        <div className="absolute inset-0 bg-[#00000011]" />
        <CardContent className="h-full flex flex-col flex-grow-1 gap-3"
                      sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.158)', // 살짝 어두운 오버레이
                            backdropFilter: 'blur(1px)',          // 블러 효과로 톤다운 + 차분해짐
                          }}>
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <RiPagesFill className="text-shadow-blue-900" /> {project.title}
          </h3>
          <p className="text-gray-600 text-sm mt-2 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-3 text-sm text-gray-700 line-clamp-1">
            {project.stack.map((tech, idx) => (
              // <span key={idx} className="px-2 py-1 bg-gray-100 rounded-md">
              //   {tech}
              // </span>
              <div key={idx} className="flex items-center gap-1 bg-[#a8a8a82a] rounded-xl">
                {techIcons[tech] && techIcons[tech]}
                <span className="text-sm">{tech}</span>
              </div>
            ))}
          </div>
          <div className="mt-auto w-auto flex gap-1.5">
            <Button
              variant="outlined"
              size="small"
              className="mt-4"
              onClick={() => onOpen(project)}
            >
              자세히 보기
            </Button>
            <Button
              variant="outlined"
              size="small"
              className="mt-4 normal-case"
              sx={{ textTransform: "none" }}  // 글씨 그대로(MUI는 Uppercase 기본적용되어있음)
              // onClick={() => onOpen(project)}
              component={project.linkComponent || "a"}
              href={project.notion}
              target={project.linkTarget || "_blank"}  // 새 탭 열기 옵션
              rel={project.linkRel || "noopener noreferrer"} // 보안 권장
            >
              {project.linkLabel || "Notion에서 보기"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
