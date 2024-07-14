import React from 'react';
import { Rotate } from 'react-awesome-reveal';

const skills = [
  {
    title: "Data Science and AI",
    description: [
      "Develop and deploy machine learning models to solve complex problems",
      "Perform predictive analytics to forecast trends and behaviors",
      "Design and implement deep learning and neural network architectures",
      "Utilize natural language processing (NLP) for text analysis and generation",
      "Work with large datasets to extract meaningful insights",
      "Optimize algorithms for performance and accuracy",
      "Use statistical methods to validate model performance"
    ]
  },
  {
    title: "Custom Software Development",
    description: [
      "Build responsive and user-friendly web applications",
      "Develop desktop applications tailored to specific business needs",
      "Provide full-stack development services, including front-end and back-end",
      "Create RESTful APIs for seamless integration with other services",
      "Implement security best practices to protect applications",
      "Conduct code reviews and testing to ensure quality and reliability",
      "Offer ongoing maintenance and support for software solutions"
    ]
  },
  {
    title: "Data Analytics",
    description: [
      "Visualize data using tools like Tableau, Power BI, and D3.js",
      "Develop business intelligence reports to aid decision-making",
      "Extract, transform, and load (ETL) data from various sources",
      "Perform data mining to discover patterns and relationships",
      "Conduct statistical analysis to derive insights from data",
      "Create dashboards to monitor key performance indicators (KPIs)",
      "Utilize SQL for database querying and management"
    ]
  },
  {
    title: "Mobile Application Development",
    description: [
      "Develop native iOS and Android applications",
      "Create cross-platform mobile apps using frameworks like React Native and Flutter",
      "Design intuitive and engaging user experiences (UX)",
      "Implement performance optimizations for mobile apps",
      "Handle app store submission and updates",
      "Integrate third-party services and APIs into mobile apps",
      "Ensure mobile apps adhere to best security practices"
    ]
  },
  {
    title: "Cloud Infrastructure",
    description: [
      "Design scalable cloud architectures using AWS, Azure, or Google Cloud",
      "Deploy and manage cloud-based applications and services",
      "Implement DevOps practices for continuous integration and delivery (CI/CD)",
      "Automate infrastructure provisioning using tools like Terraform and Ansible",
      "Monitor and optimize cloud resource usage and costs",
      "Ensure high availability and disaster recovery for cloud services",
      "Secure cloud environments with best practices and compliance"
    ]
  },
  {
    title: "Research",
    description: [
      "Conduct thorough academic and industrial research on various topics",
      "Write and publish scientific papers in reputable journals",
      "Utilize data-driven research methodologies to validate hypotheses",
      "Perform literature reviews to stay updated with the latest advancements",
      "Collaborate with interdisciplinary teams for comprehensive research",
      "Present research findings at conferences and seminars",
      "Secure funding and grants for research projects"
    ]
  }
];

const WhatICanDo = () => {
  return (
    <section className="p-8 pt-0 pb-0 bg-transparent text-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">What I Can Do</h2>
      {skills.map((skill, index) => (
        <Rotate top>
          <div key={index} className="mb-6 border-b-2 border-gray-400 pb-3">
            <h3 className="text-2xl font-semibold mb-2">{skill.title}</h3>
            <ul className="list-disc list-inside">
              {skill.description.map((desc, i) => (
                <li key={i} className="ml-4">{desc}</li>
              ))}
            </ul>
          </div>
        </Rotate>
      ))}
    </section>
  );
};

export default WhatICanDo;
