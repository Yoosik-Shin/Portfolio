import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import ProjectCard from './ProjectCard.jsx';
import CardDialog from "./CardDialog.jsx";
import main1 from '../../assets/img/main1.png';
import main2 from '../../assets/img/main2.png';
import main3 from '../../assets/img/main3.png';
import ZootopiaProject from './ZootopiaProject.jsx';

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
      title: "The Joyful Delivery",
      image: main1,
      description: "웹페이지를 통한 간편한 택배 접수 및 조회 시스템",
      stack: ["Java", "Servlet", "JSP", "BootStrap"],
      github: "https://github.com/skymin022/the_joyful_delivery"
    },
    {
      title: "반려동물 커뮤니티 (Zootopia)",
      image: main2,
      description: "Spring Boot, Thymeleaf 등을 이용해 사용자가 이해하기 쉬운 직관적인 UI, 자유게시판 등의 여러 기능들을 동물의 종류에 상관없이 모두 즐길 수 있는 커뮤니티",
      stack: ["Thymeleaf", "Spring Boot", "Spring Security", "BootStrap"],
      github: "https://github.com/Yoosik-Shin/AI3_TEAM_ZOOTOPIA"
    },
    {
      title: "반려동물 커뮤니티 (zootopia_react)",
      image: main3,
      description: "반려동물 커뮤니티 프로젝트의 백엔드를 REST 방식으로 변경, 프론트엔드를 React로 변경 후 추가 기능 구현 ",
      stack: ["React", "Spring Boot", "JWT", "Tailwind CSS"],
      github: "https://github.com/jjwon55/zootopia_react"
    }
  ];

  return (
    <>
      <div className='relative w-[1480px] h-full top-[100px] flex flex-col justify-center items-center gap-8'>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} onOpen={handleOpen} />
          ))}

          {/* <CardDialog open={open} onClose={handleClose} project={selectedProject} /> */}
          <ZootopiaProject />
          
        </div>
      </div>
    </>
  );
}