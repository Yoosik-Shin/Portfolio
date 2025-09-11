import React from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const CardDialog = ({ open, onClose, project }) => {

  const [first, setfirst] = useState(second)

  if (!project) return null; // null 체크

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <DialogTitle>{project.title}</DialogTitle>
        <DialogContent>
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg mb-4 w-[800px] h-[500px]"
          />
          <p className="text-gray-700 mb-4">{project.description}</p>
          <h4 className="font-semibold mb-2">사용 기술</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.github && (
            <Button
              variant="contained"
              startIcon={<FaGithub />}
              href={project.github}
              target="_blank"
            >
              GitHub 바로가기
            </Button>
          )}
        </DialogContent>
      </motion.div>
    </Dialog>
  );
};

export default CardDialog;
