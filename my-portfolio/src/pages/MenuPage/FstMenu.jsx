import React from 'react'

export const FstMenu = () => {
  return(
    <>
      <h1>1thMenu</h1>
      <div className='w-auto h-auto flex flex-col gap-10 text-lg'>
        <div id='photo-container' className='flex gap-24'>
          <div>
            <img src="" alt="이력서사진" />
          </div>
          <div>
            <h1>개발자 신유식 입니다.</h1>
            <p>성실하게</p>
            <p>포기하지 않고</p>
            <p>항상 성장을 위해 노력합니다.</p>
          </div>
        </div>
        <div>
          <h2>Profile</h2>
          <div className='flex gap-15 justify-start items-start'>
            <ul>
              <li>학력</li>
              <ul>
                <li>▶ 국립 공주대학교 산업시스템공학과 졸업 </li>
              </ul>
            </ul>
          </div>
        </div>
        <div>
          <h2>Skills</h2>
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
      </div>
    </>
  )
}