import React from 'react'
import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import { FaReact, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ title, image, description, stack }) => {
  return (
    <>
      {/* 다이얼로그 */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <img src={image} alt={title} className="rounded-lg mb-4" />
            <p className="text-gray-700 mb-4">{description}</p>
            <h4 className="font-semibold mb-2">사용 기술</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {stack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <Button
              variant="contained"
              startIcon={<FaGithub />}
              href="https://github.com/your-repo"
              target="_blank"
            >
              GitHub 바로가기
            </Button>
          </DialogContent>
        </motion.div>
      </Dialog>
    </>
  )
}

export default ProjectCard