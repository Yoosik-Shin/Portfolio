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
          <h1 className='text-xl'>이전 직장 내용</h1>
          <div>초이스 국제 법인</div>
          <div>E-2 Visa를 비롯한 미국 비자 발급 서류 지원</div>
          <div>`2024.03 ~ 2024.12</div>




          {/* ... */}
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