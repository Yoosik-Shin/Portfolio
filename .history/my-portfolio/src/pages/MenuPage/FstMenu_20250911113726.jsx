import React from 'react'
import TypeIt from "typeit-react";
import user from '../../assets/img/user.png';
import { CircleUser, Github, Mail, ScrollText } from 'lucide-react';
import * as Fst from "./FstMenu.styled.js";
import { Link } from 'react-router-dom';
import Accordion from './Accordion.jsx';

export const FstMenu = () => {
  return(
    <div className='relative w-[1480px] h-full top-[100px] flex flex-col justify-center items-center gap-12'>
      <TypeIt as='div' className="h-[200px] text-center text-[#ffffff8f] text-4xl leading-relaxed"
        options={{
          speed: 50, // 타이핑 속도 (밀리초 단위, 기본값은 50~100 정도)
          loop: true,
        }}
        getBeforeInit={(instance) => {
          instance
            .pause(20)
            .type("안녕하세요.")
            .break()
            .type("호기심 강하고 새로운 기술을 좋아하며")
            .break()
            .type("프론트엔드를 희망하고 있는")
            .break()
            .type("개발자 신유식입니다.");
          return instance;
        }}
      />
      <div id='photo-container' className='bg-[#50505017] text-[#d4d4d479] w-[700px] w-md-[500px] w-sm-[200px] h-[300px] rounded-4xl text-xl flex justify-center items-center gap-20 shadow-md'>
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
      <div >
        <Accordion title="간단 소개" className="flex flex-col">
          {/* <TypeIt ... /> 또는 원하는 내용 */}
          <div className='flex flex-col text-white gap-7'>
            <h1 className='text-xl'>💡 저는 이런 사람입니다.</h1>
            <div>- 호기심이 강해 새로운 도전을 즐기며 성장하는 것을 좋아합니다.</div>
            <div>- 더 좋은 방법을 항상 고민하고, 적용하는 일을 좋아합니다.</div>
            <div>- 산업 시스템 공학과에서 IT 기초 지식을 습득했습니다.</div>
            <div>- 더조은 컴퓨터 아카데미에서 [AI활용 풀스택 (프론트엔드,백엔드) 부트캠프 (자바,파이썬,플러터)] 교육과정을 수료하였습니다.</div>
          </div>
        </Accordion>
      </div>
    </div>
  )
}