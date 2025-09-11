import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const SndMenu = () => {

  const skills = [
    { name: "React", icon: <FaReact size={50} className="text-blue-500" /> },
    { name: "Java", icon: <FaJava size={50} className="text-red-600" /> },
    { name: "HTML5", icon: <FaHtml5 size={50} className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt size={50} className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs size={50} className="text-yellow-400" /> },
  ];

  return(
    <>
      <h1>2ndMenu</h1>
      <div className='flex flex-col justify-center items-center gap-24'>
        <DotLottieReact
          src="https://lottie.host/1fb4ae0a-ff4c-4a2c-b348-cf8eb87c02a3/UH9uxfqNYm.lottie"
          loop
          autoplay
        />
        
        <div className='flex gap-15'>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>Dart</li>
          </ul>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <ul>
            <li>Spring Boot</li>
            <li>React</li>
            <li>dJango</li>
            <li>Flutter</li>
          </ul>
          <ul>
            <li>BootStrap</li>
            <li>Tailwind</li>
          </ul>
      

        </div>
      </div>
    </>
  )
}