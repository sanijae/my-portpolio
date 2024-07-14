import React from 'react';
import { Fade } from 'react-awesome-reveal';

const education = [
  {
    institution: "Ahmadu Bello University",
    location: "Zaria, NG",
    degree: "Master of Science in Artificial Intelligence",
    duration: "Jan 2023 - Present"
  },
  {
    institution: "Umaru Musa Yar'adua University",
    location: "Katsina, NG",
    degree: "Bachelor of Science in Computer Science",
    duration: "Mar 2016 - Dec 2019"
  }
];

const Education = () => {
  return (
    <section className="text-gray-100 bg-gray-900 border-b-2 border-gray-400 pb-3">
      <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-6">
          <Fade>
            <h3 className="text-2xl font-semibold">{edu.institution}</h3>
            <p className="text-lg italic">{edu.degree}</p>
            <p className="text-lg">{edu.location}</p>
            <p className="text-lg">{edu.duration}</p>
          </Fade>
        </div>
      ))}
    </section>
  );
};

export default Education;
