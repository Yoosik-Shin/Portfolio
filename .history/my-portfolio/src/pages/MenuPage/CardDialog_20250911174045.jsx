import React from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const CardDialog = ({ open, onClose, project }) => {

  const [openSections, setOpenSections] = useState({});

  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const CollapsibleSection = ({ title, children, id, icon: Icon }) => (
    <div className="mb-6 bg-gray-800 rounded-lg overflow-hidden">
      <button
        onClick={() => toggleSection(id)}
        className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-700 hover:bg-gray-600 transition-colors"
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon size={20} className="text-blue-400" />}
          <h2 className="text-xl font-semibold text-white">{title}</h2>
        </div>
        {openSections[id] ? <ChevronDown size={20} className="text-gray-400" /> : <ChevronRight size={20} className="text-gray-400" />}
      </button>
      {openSections[id] && (
        <div className="px-6 py-4 text-gray-300">
          {children}
        </div>
      )}
    </div>
  );

  const TechBadge = ({ tech }) => (
    <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
      {tech}
    </span>
  );

  const FeatureItem = ({ feature }) => (
    <div className="flex items-start gap-2 mb-2">
      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
      <span>{feature}</span>
    </div>
  );

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
