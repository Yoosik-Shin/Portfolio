import React from "react";
import { Card, CardContent, CardMedia, Button } from "@mui/material";
import { FaReact, FaJava } from "react-icons/fa";
import { RiPagesFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { techIcons } from "./TechIcons";

const ProjectCard = ({ project, onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="cursor-pointer"
    >
      <Card className="shadow-lg hover:shadow-xl transition-all rounded-2xl overflow-hidden">
        <CardMedia component="img" height="160" image={project.image} alt={project.title} />
        <CardContent className="gap-3">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <RiPagesFill className="text-shadow-blue-900" /> {project.title}
          </h3>
          <p className="text-gray-600 text-sm mt-2 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-3 text-sm text-gray-700">
            {project.stack.map((tech, idx) => (
              // <span key={idx} className="px-2 py-1 bg-gray-100 rounded-md">
              //   {tech}
              // </span>
              <div key={idx} className="flex items-center gap-1">
                {techIcons[tech] && techIcons[tech]}
                <span className="text-sm">{tech}</span>
              </div>
            ))}
          </div>
          <Button
            variant="outlined"
            size="small"
            className="mt-4"
            onClick={() => onOpen(project)}
          >
            자세히 보기
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
