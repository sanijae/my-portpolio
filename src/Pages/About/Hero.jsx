import React from 'react';
import data from '../../Assets/Data';
import Education from './Education';
import Certification from './Certification';

const Hero = () => {
  return (
    <section className="hero bg-gray-900 text-white p-8 md:p-16 flex flex-col items-center">
      <div className="w-2/3 mb-8 flex items-center justify-center">
        <img src={data.personal.profilePicture} alt="Profile" className="rounded-full w-48 h-48 mx-auto md:mx-0 md:w-64 md:h-64 border-4 border-gray-800 shadow-lg" />
      </div>
      <div className="w-full text-center ">
        <div className='border-b-2 border-gray-400 mb-2'>
          <h1 className="text-4xl font-bold mb-4">{data.personal.name}</h1>
          <p className="text-2xl mb-4">{data.personal.title}</p>
          <p className="text-lg mb-4">
            {data.personal.summary}
          </p>
        </div>
        <Education/>
        <Certification/>
      </div>
    </section>
  );
};

export default Hero;
