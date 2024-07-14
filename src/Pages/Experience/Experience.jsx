import React, { useEffect } from 'react';

const experiences = [
  {
    company: "WALMART",
    role: "Advance Software Engineer Virtual Experience",
    duration: "Feb 2024 – Present",
    tasks: [
      "Developed a novel version of a heap data structure in Java showcasing problem-solving skills.",
      "Designed a UML class diagram for a data processor, considering different operating modes and database connections.",
      "Created an entity relationship diagram to design a new database accounting for all requirements."
    ]
  },
  {
    company: "QUANTUM ANALYTICS",
    role: "Data Analyst",
    duration: "Jan 2023 – Present",
    tasks: [
      "Extract, clean, and analyze large datasets to identify trends, patterns, and outliers.",
      "Develop and automate reports and dashboards using Tableau for visualization of key performance metrics.",
      "Collaborate with cross-functional teams to define data requirements and develop data-driven solutions to business challenges."
    ]
  },
  {
    company: "LYFT",
    role: "Backend Engineer Virtual Experience",
    duration: "Oct 2023 – Jan 2024",
    tasks: [
      "Implemented unit tests and added new functionality using test-driven development.",
      "Drafted a UML class diagram representing a new reorganized architecture.",
      "Refactored a messy codebase inherited from another team to accurately reflect new design."
    ]
  },
  {
    company: "SKYSCANNER",
    role: "Frontend Engineer Virtual Experience",
    duration: "Jul 2023 – Sep 2023",
    tasks: [
      "Assisted in the development and maintenance of client-facing websites and web applications.",
      "Implemented responsive designs to ensure optimal viewing experience across various devices.",
      "Worked closely with senior developers to debug and troubleshoot frontend issues."
    ]
  },
  {
    company: "BRITISH AIRWAYS",
    role: "Data Scientist Intern",
    duration: "Dec 2023 – May 2024",
    tasks: [
      "Conducted data scraping from the British Airways website to gather real-time data on flight information, customer feedback, and booking trends.",
      "Utilized Python and SQL to extract and preprocess data from multiple sources, ensuring data integrity and accuracy.",
      "Developed machine learning models to predict customer behavior and enhance personalized marketing strategies."
    ]
  },
  {
    company: "PWC",
    role: "Power BI Analyst Intern",
    duration: "Jun 2023 – Dec 2023",
    tasks: [
      "Collaborated with business users, collected requests, and updated the set of existing BI reports to accommodate business needs.",
      "Generated and delivered quality reports to customers by conducting quality assurance checks and recorded a 65% increase in customer satisfaction.",
      "Developed reporting systems to provide accessible information for accurate decision making."
    ]
  }
];

const Experience = () => {
  useEffect(()=>{
    document.title = 'Muhammad Sani - Experience'
  })
  return (
    <section className="p-8 text-gray-100 bg-gray-900 flex justify-center">
      <div className='w-full lg:w-2/3'>
        <h2 className="text-3xl font-bold mb-6 text-center">Professional Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-6 p-2 border-b-2 border-gray-400">
            <h3 className="text-2xl font-semibold">{exp.role}</h3>
            <p className="text-lg italic">{exp.company} - {exp.duration}</p>
            <ul className="list-disc list-inside">
              {exp.tasks.map((task, i) => (
                <li key={i} className="ml-4">{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
