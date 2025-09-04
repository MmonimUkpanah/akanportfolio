// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { Routes, Route, Link } from "react-router-dom";
import selfie from '@/assets/picture.svg'
import button1 from '@/assets/button1.svg'
import button2 from '@/assets/button2.svg'
function Index() {


  return (
    <>
    <nav className='lg:flex grid grid-cols-2 lg:justify-between lg:items-center font-semibold mt-8 mb-8 lg:p-5 p-2 lg:ml-[15rem] lg:mr-[15rem]'>
      <a href="https://nibss-plc.com.ng/" className='lg:text-3xl text-2xl'>Home</a>
      <a href="https://nibss-plc.com.ng/" className='lg:text-3xl text-2xl'>About Me</a>
      <a href="https://nibss-plc.com.ng/" className='lg:text-3xl text-2xl'>Work</a>
      <a href="https://nibss-plc.com.ng/" className='lg:text-3xl text-2xl'>Skills</a>
      <a href="https://nibss-plc.com.ng/" className='lg:text-3xl text-2xl'>Contact Me</a>
    </nav>
    <div className="flex first justify-center items-center lg:ml-90 lg:mr-90 ">
      <p className="lg:text-6xl text-3xl text-center font-bold mont">
        Crafting Beautiful and Functional Designs
      </p>
    </div>
    <div className="second mont flex justify-center flex-col items-center lg:text-5xl text-2xl mt-8 mb-8 lg:p-5 p-3 font-bold text-center">
      <p>Hi, <span className='text-[#183BAE]'>I'm Akaninyene E. Bassey - Product Designer</span> </p>
      <p>Full Stack UI/UX Designer</p>
      <p>With Figma</p>
    </div>
    <div className="third grid lg:grid-cols-2 p-2 mont grid-cols-1 gap-10 lg:ml-[5rem] lg:mr-[5rem] mb-8">
      <div className='lg:mt-[9rem]'>
        <p className='font-medium text-[25px] text-center '>Akaninyene's exceptional product design
        ensured our website’s success. He specializes
        in creating intuitive digital experiences that solve
        real problems.
        Highly recommended!!!
        </p>
        <div className='grid grid-cols-2 gap-5 mt-5'>
          <img src={button1} alt="" /> <img src={button2} alt="" />
        </div>
        <div className='grid grid-cols-2 gap-5 mt-5'>
          <div>
            <p className='font-bold text-2xl'>15+</p>
            <p className='font-semibold text-[20px]'>Projects Completed</p>
          </div>
          <div>
            <p className='font-bold text-2xl'>
              4+
            </p>
            <p className='font-semibold text-[20px]'>
              Years Experience
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src={selfie} alt="" className='w-full'/>
      </div>
    </div>
    </>
  )
}

export default Index
