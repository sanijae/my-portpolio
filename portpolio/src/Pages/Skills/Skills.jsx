import React, { useEffect } from 'react';
import { Rotate } from 'react-awesome-reveal';

const skills = {
  hardSkills: [
    "Knowledge of AJAX, JSON, and RESTful APIs",
    "Languages: Python, JavaScript, TypeScript, Java, C#, HTML, CSS",
    "Frameworks: ReactJS, NodeJS, Flutter, React-native, Django",
    "Databases: SQL (MySQL, MSSQL, PostgreSQL), NoSQL (MongoDB)",
    "Version Control: Git, Bitbucket and Gitlab",
    "Deployment: Heroku, AWS, Netlify, Google Cloud, Microsoft Azure",
    "Others: Redux, Webpack, Jest, GraphQL, Responsive Design",
    "Proficient in statistical analysis using Python, R, and SAS",
    "Experienced in data visualization tools such as Excel, Tableau, Power BI, and matplotlib",
    "Strong SQL skills for data extraction, transformation, and loading (ETL)",
    "Familiarity with machine learning algorithms and techniques for predictive modeling",
    "Expertise in data cleaning, preprocessing, and feature engineering",
  ],
  softSkills: [
    "Ability to communicate complex technical concepts to non-technical stakeholders.",
    "Excellent problem-solving, critical thinking and attention to detail skills.",
    "Time management, prioritization, flexibility, adaptability and creativity.",
    "Collaboration, self-motivation and initiative.",
    "Agile methodology and scrum experience."
  ]
};
const Skills = () => {
  useEffect(()=>{
    document.title = 'Muhammad Sani - Skills'
  })
  return (
    <section className="p-8 flex justify-center text-gray-100 bg-gray-900">
      <div className='w-full lg:w-2/3'>
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="mb-6 border-b-2 border-gray-400 p-4">
          <h3 className="text-2xl font-semibold mb-2">Hard Skills</h3>
          <ul className="list-disc list-inside">
            {skills.hardSkills.map((skill, index) => (
              <Rotate right>
                <li key={index} className="ml-4">{skill}</li>
              </Rotate>
            ))}
          </ul>
        </div>
        <div className="mb-6 border-b-2 border-gray-400 p-4">
          <h3 className="text-2xl font-semibold mb-2">Soft Skills</h3>
          <Rotate top>
            <ul className="list-disc list-inside">
              {skills.softSkills.map((skill, index) => (
                <li key={index} className="ml-4">{skill}</li>
              ))}
            </ul>
          </Rotate>
        </div>
      </div>
    </section>
  );
};

export default Skills;
