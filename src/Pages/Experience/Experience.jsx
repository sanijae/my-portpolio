import React, { useEffect } from 'react';
import { Flip, Rotate } from 'react-awesome-reveal';
import { experiences } from './data';


const Experience = () => {
  useEffect(()=>{
    document.title = 'Muhammad Sani - Experience'
  })
  return (
    <section className="p-8 text-gray-100 bg-gray-900 flex justify-center">
      <div className='w-full lg:w-2/3'>
        <h2 className="text-3xl font-bold mb-6 text-center">Professional Experience</h2>
        {experiences.map((exp, index) => (
          <Rotate left>
            <div key={index} className="mb-6 p-2 border-b-2 border-gray-400">
              <h3 className="text-2xl font-semibold">{exp.role}</h3>
              <p className="text-lg italic">{exp.company} - {exp.duration}</p>
              <ul className="list-disc list-inside">
                {exp.tasks.map((task, i) => (
                  <Flip>
                    <li key={i} className="ml-4">{task}</li>
                  </Flip>
                ))}
              </ul>
            </div>
          </Rotate>
        ))}
      </div>
    </section>
  );
};

export default Experience;
