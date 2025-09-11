import React, { useState } from 'react';
import Accordion from './Accordion'; // 기존 컴포넌트

function AccordionList() {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionItems = [
    {
      title: '간단 소개',
      content: (
        <div className='flex flex-col text-white gap-2'>
          <h1 className='text-xl'>💡 저는 이런 사람입니다.</h1>
          <div>- 호기심이 강해 새로운 도전을 즐기며 성장하는 것을 좋아합니다.</div>
          <div>- 더 좋은 방법을 항상 고민하고, 적용하는 일을 좋아합니다.</div>
          <div>- 산업 시스템 공학과에서 IT 기초 지식을 습득했습니다.</div>
          <div>- 더조은 컴퓨터 아카데미에서 [AI활용 풀스택 ...] 교육과정을 수료하였습니다.</div>
        </div>
      )
    },
    {
      title: '이전 직장',
      content: (
        <div className='flex flex-col text-white gap-2'>
          <table className='flex text-center gap-15'>
            <ul>
              <li className='font-bold text-blue-500 text-lg'>초이스 국제 법인</li>
              <li>과장</li>
              <li>E-2 Visa 신청 서류 작성 및 번역</li>
              <li className='text-[#777777]'>2024.03 ~ 2024.12</li>
            </ul>
            <ul>
              <li className='font-bold text-blue-500 text-lg'>미래 수학 교습소</li>
              <li className='text-indigo-600'>원장, 수학강사</li>
              <li>- 수학 교과 수업</li>
              <li>- 시험 대비</li>
              <li>- 개인 학습 관리</li>    
              <li>- 학생 관리</li>    
              <li>- 기타 교습소 운영 관련 비품 관리</li>    
              
              <li className='text-[#777777]'>2024.03 ~ 2024.12</li>
            </ul>
          </table>
        </div>
      )
    }
  ];

  return (
    <div className='flex gap-10 transition-all duration-300 ease-in-out'>
      {accordionItems.map((item, i) => (
        openIndex === null || openIndex === i ? (
        <Accordion
          key={i}
          title={item.title}
          open={openIndex === i}
          onClick={() => setOpenIndex(openIndex === i ? null : i)}
        >
          {item.content}
        </Accordion>
        ) : null
      ))}
    </div>
  );
}

export default AccordionList;