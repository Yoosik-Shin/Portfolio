import React from 'react'
import TypeIt from "typeit-react";
import user from '../../assets/img/user.png';
import { CircleUser, Github, Mail, ScrollText } from 'lucide-react';
import * as Fst from "./FstMenu.styled.js";
import { Link } from 'react-router-dom';
import Accordion from './Accordion.jsx';
import AccordionList from './AccordionList.jsx';

export const FstMenu = () => {
  return(
    <div className='relative w-[1480px] h-full top-[100px] flex flex-col justify-center items-center gap-8'>
      <TypeIt as='div' className="h-[200px] text-center text-[#ffffff8f] text-3xl leading-relaxed"
        options={{
          speed: 50, // 타이핑 속도 (밀리초 단위, 기본값은 50~100 정도)
          loop: true,
        }}
        getBeforeInit={(instance) => {
          instance
            .pause(20)
            .type("안녕하세요.")
            .break()
            .type("호기심 강하고 새로운 기술을 좋아하는")
            .break()
            .type("개발자 신유식입니다.");
          return instance;
        }}
      />
      <div id='photo-container' className='bg-[#50505017] text-[#d4d4d479] lg:w-[700px] md:w-[500px] sm:w-[300px] h-[300px] sm:h-auto rounded-4xl text-xl flex sm:flex-row justify-center items-center gap-20 shadow-md'>
        <div>
          <img className='w-[130px] h-[150px]' src={user} alt="이력서사진" />
        </div>
        <Fst.IntroMenuUl>
          <li><CircleUser className='text-[#464646]' /> 신유식</li>
          <li className='underline'><Github className='text-[#464646]' /><a href="https://github.com/Yoosik-Shin">Github</a></li>
          <li className='underline'><ScrollText className='text-[#464646]' /><a href="https://www.notion.so/26187255c04680e289cce0f6547e27b1?source=copy_link">Notion</a></li>
          <li><Mail className='text-[#464646]' /><a href="mailto:snorlax234678@gmail.com">snorlax234678@gmail.com</a></li>
        </Fst.IntroMenuUl>
      </div>
      <div className='flex gap-10'>
        <AccordionList />
      </div>
    </div>
  )
}