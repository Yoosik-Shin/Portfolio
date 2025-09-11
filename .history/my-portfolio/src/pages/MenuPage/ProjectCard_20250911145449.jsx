import React from 'react'
import React, { useState } from "react";
import { Card, CardContent, CardMedia, Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import { FaReact, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ title, image, description, stack }) => {


  
  return (
    <>
      {/* 카드 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -8, scale: 1.03 }}
        className="cursor-pointer"
      >
        <Card className="shadow-lg hover:shadow-xl transition-all rounded-2xl overflow-hidden">
          <CardMedia component="img" height="160" image={image} alt={title} />
          <CardContent>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <FaReact className="text-blue-500" /> {title}
            </h3>
            <p className="text-gray-600 text-sm mt-2 line-clamp-2">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3 text-sm text-gray-700">
              {stack.map((tech, idx) => (
                <span key={idx} className="px-2 py-1 bg-gray-100 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
            <Button
              variant="outlined"
              size="small"
              className="mt-4"
              onClick={handleOpen}
            >
              자세히 보기
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </>
  )
}

export default ProjectCard