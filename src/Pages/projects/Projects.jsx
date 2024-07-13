import React, { useEffect } from 'react';
import projects from './ProjectData';


const Projects = () => {
  useEffect(()=>{
    document.title = 'Muhammad Sani - Projects'
  })
  return (
    <section className="p-8 text-gray-100 bg-gray-900 flex justify-center">
      <div className='w-full lg:w-2/3'>
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="mb-6 border-b-2 border-gray-400 rounded-lg p-2">
            <h3 className="text-2xl font-semibold">{project.name}</h3>
            <p className="text-lg italic">Technologies: {project.technologies.join(', ')}</p>
            <ul className="list-disc list-inside">
              {project.description.map((desc, i) => (
                <li key={i} className="ml-4">{desc}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className='w-full p-4 m-2 border-b-2 border-gray-400 mb-10'>
          <a href='https://github.com/sanijae' target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-white hover:bg-gray-700 hover:text-white text-blue-900 text-2xl py-2 px-4 rounded w-full text-center">More projects</a>
          {/* <Link to="/contact" className="mt-4 inline-block bg-white hover:bg-gray-700 hover:text-white text-blue-900 text-2xl py-2 px-4 rounded">Cover Letter</Link> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
