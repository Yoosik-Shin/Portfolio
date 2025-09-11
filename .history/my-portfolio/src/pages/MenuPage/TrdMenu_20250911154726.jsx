import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import ProjectCard from './ProjectCard.jsx';
import CardDialog from "./CardDialog.jsx";
import main1 from '../../assets/img/main1.png';
import main2 from '../../assets/img/main2.png';
import main3 from '../../assets/img/main3.png';

export const TrdMenu = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      title: "포트폴리오 웹사이트",
      image: main1,
      description: "React + Tailwind + Framer Motion을 활용하여 제작한 개인 포트폴리오 웹사이트입니다.",
      stack: ["React", "Tailwind", "Framer Motion", "MUI"],
      github: "https://github.com/your-portfolio"
    },
    {
      title: "쇼핑몰 프로젝트",
      image: main2,
      description: "Spring Boot와 React를 연동하여 구현한 쇼핑몰 프로젝트입니다.",
      stack: ["Spring Boot", "React", "MySQL"],
      github: "https://github.com/your-shop"
    },
    {
      title: "쇼핑몰 프로젝트",
      image: main2,
      description: "Spring Boot와 React를 연동하여 구현한 쇼핑몰 프로젝트입니다.",
      stack: ["Spring Boot", "React", "MySQL"],
      github: "https://github.com/your-shop"
    }
  ];

  return (
    <>
      <div className='relative w-[1480px] h-full top-[100px] flex flex-col justify-center items-center gap-8'>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} onOpen={handleOpen} />
          ))}

          <CardDialog open={open} onClose={handleClose} project={selectedProject} />
        </div>
      </div>
    </>
  );
}