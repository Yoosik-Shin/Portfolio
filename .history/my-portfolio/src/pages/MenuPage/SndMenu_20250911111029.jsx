import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from "framer-motion";
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaJs, FaPython } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { SiSpringboot, SiMysql, SiStyledcomponents, SiTailwindcss, SiBootstrap, SiCssmodules, SiDjango } from "react-icons/si";

export const SndMenu = () => {

  const skills = [
    { name: "Java", icon: <FaJava size={50} className="text-red-600" /> },
    { name: "Spring Boot", icon: <SiSpringboot size={50} className="text-green-500" /> },
    { name: "HTML5", icon: <FaHtml5 size={50} className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt size={50} className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs size={50} className="text-yellow-400" /> },
    { name: "React", icon: <FaReact size={50} className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={50} className="text-cyan-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap size={50} className="text-violet-900" /> },
    { name: "Styled-Components", icon: <SiStyledcomponents size={50} className="text-pink-500" /> },
    { name: "CSS Modules", icon: <SiCssmodules size={50} className="text-blue-500" /> },
    { name: "MySQL", icon: <SiMysql size={50} className="text-blue-400" /> },
    { name: "GitHub", icon: <VscGithub size={50} className="text-white" /> },
  ];
  const skills2 = [
    { name: "Python", icon: <FaPython size={50} className="text-yellow-400" /> },
    { name: "Django", icon: <SiDjango size={50} className="text-green" /> },
  ];

  return(
    <>
      <div className='relative flex flex-col justify-center items-center gap-24 top-[100px]'>
        <DotLottieReact
          src="https://lottie.host/1fb4ae0a-ff4c-4a2c-b348-cf8eb87c02a3/UH9uxfqNYm.lottie"
          loop
          autoplay
          className='w-[800px] h-[400px]'
        />

        <div className="flex flex-wrap gap-10 justify-center mt-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="flex flex-col items-center text-[#fff]"
            >
              {skill.icon}
              <p className="mt-2 text-lg font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-wrap gap-10 justify-center mt-10">
          {skills2.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="flex flex-col items-center text-[#fff]"
            >
              {skill.icon}
              <p className="mt-2 text-lg font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}