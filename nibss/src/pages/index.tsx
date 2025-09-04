// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { Routes, Route, Link } from "react-router-dom";
import selfie from '@/assets/picture.svg'
import button1 from '@/assets/button1.svg'
import button2 from '@/assets/button2.svg'
import hotel from '@/assets/hotel.svg'
import yoga from '@/assets/yoga.svg'
import mobileapp from '@/assets/mobileapp.svg'
import buttonimg from '@/assets/button.svg'
import comp from '@/assets/comp.svg'
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
    <div className="third p-2">
      <div className=' centre-display  lg:ml-[15rem] lg:mr-[15rem] mb-10'>
        <h2 className='text-5xl mont font-bold'>Featured Work</h2>
        <p className='text-2xl mont font-semibold '>A collection of projects that showcase my approach to solving complex design challenges and creating meaningful user experiences.</p>
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 lg:ml-[5rem] lg:mr-[5rem] p-2 mb-4 lg:mb-8'>
        <div>
          <img src={hotel} alt=""className='w-full' />
         
        </div>
        <div>
          <img src={yoga} alt="" className='w-full'/>
        </div>
      </div>
      <div className='flex justify-center mb-8'>
        <div>
          <img src={mobileapp} alt=""  className='w-full'/>
           
        </div>
        
      </div>
      <div className='flex justify-center centre-display'>
        <img src={buttonimg} alt=""  className=' mt-10 w-40'/>
      </div>
    </div>
    <div className="fourth mt-8 p-2">
      <div className='flex flex-col text-center centre-display justify-center items-center lg:ml-[8rem] lg:mr-[8rem]'>
        <h2 className='mont text-2xl lg:text-5xl font-bold'>About Me</h2>
        <p className='month lg:text-2xl font-semibold mt-3'>l am a skilled full stack UI/UX Designer with a passion for designing, as a user experience designer. I understand the process of creating meaningful experiences for users.  I empathize with the user to discover problems and design creative solutions. I am passionate about how design and technology can bring about change in education. This could inspire new ways of learning and bridge diverse communities</p>
      </div>
    </div>
     <div className="five mt-8 p-2">
      <div className='flex flex-col text-center centre-display justify-center items-center lg:ml-[8rem] lg:mr-[8rem]'>
        <h2 className='mont text-2xl lg:text-5xl font-bold'>Skills & Expertise</h2>
        <p className='month lg:text-2xl font-semibold mt-3'>A comprehensive skill set spanning the entire design process, from research to
implementation.</p>
      </div>
      
    </div>
    <div className='mt-8'>
        <div className='p-2 lg:ml-[5rem] lg:mr-[5rem] mb-8'>
          <img src={comp} alt="" />
        </div>
    </div>
    </>
  )
}

export default Index
