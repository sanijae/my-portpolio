import React, { useEffect } from 'react';
import Hero from './Hero';
import WhatICanDo from './WhatCanIDo';

const About = () => {
  const link = 'https://drive.google.com/file/d/1f2NIudMhK01YaMMTWZDG-EK3g9HD1YJ0/view?usp=drive_link'
  useEffect(()=>{
    document.title = 'Muhammad Sani - About'
  })
  return (
    <div className='flex justify-center items-center'>
      <div className='w-full md:w-2/3'>
        <Hero/>
        <WhatICanDo/>
        <div className='w-full p-4 m-2 border-b-2 border-gray-400 mb-10'>
          <a href={link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-white hover:bg-gray-700 hover:text-white text-blue-900 text-2xl py-2 px-4 rounded w-full text-center">Resume</a>
          {/* <Link to="/contact" className="mt-4 inline-block bg-white hover:bg-gray-700 hover:text-white text-blue-900 text-2xl py-2 px-4 rounded">Cover Letter</Link> */}
        </div>
      </div>
    </div>
  );
}

export default About;
