import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const SndMenu = () => {
  return(
    <>
      <h1>2ndMenu</h1>
      <div className='flex justify-center items-center gap-24'>
        <DotLottieReact
        src="https://lottie.host/1fb4ae0a-ff4c-4a2c-b348-cf8eb87c02a3/UH9uxfqNYm.lottie"
        loop
        autoplay
        />
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
    </>
  )
}