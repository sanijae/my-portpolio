import React from 'react';

const certifications = [
  {
    institution: "Digital Regenesys",
    certification: "Cyber Security Professional",
    year: "2024"
  },
  {
    institution: "Ec - Council University",
    certification: "Frontend Developer",
    year: "2024"
  },
  {
    institution: "Ec - Council University",
    certification: "Javascript Developer",
    year: "2024"
  },
  {
    institution: "Ec - Council University",
    certification: "Python Developer",
    year: "2024"
  },
  {
    institution: "Simplilearn",
    certification: "Data Science with Python",
    year: "2024"
  },
  {
    institution: "Simplilearn",
    certification: "MongoDB Developer",
    year: "2024"
  },
  {
    institution: "Simplilearn",
    certification: "Big data Analytics",
    year: "2024"
  },
  {
    institution: "Quantun Analytics",
    certification: "Dashboard Developer",
    year: "2024"
  }
];

const Certification = () => {
  return (
    <section className="text-gray-100 bg-gray-900 border-b-2 border-gray-400 pb-3">
      <h2 className="text-3xl font-bold mb-6 text-center">Certifications</h2>
      <div className="list-disc list-inside">
        {certifications.map((cert, index) => (
          <p key={index} className="mb-2">
            <span className="font-semibold">{cert.institution}</span> - {cert.certification}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Certification;
