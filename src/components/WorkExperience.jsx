import React from 'react';

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'Credence Analytics Pvt. Ltd.',
    duration: 'Jan 2023 – Aug 2023, (8 mos)',
    description: "Worked closely with the CEO to enhance the company's ERP system using the Frappe framework. Implemented server-side logic in Python, client-side features in JavaScript, and managed data with MariaDB. Delivered key modules like attrition tools, skill mapping, and timesheets. Designed APIs, integrated CI/CD with GitLab for streamlined development and deployment.",
    image: 'data:image/jpeg;base64,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',
  }
];

export default function WorkExperience() {
  return (
    <section id="experience" className="mt-20">
      <h2 className="text-3xl font-bold text-gray-100 font-mono text-center mb-8">Work Experience</h2>
      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col md:flex-row md:items-start justify-between gap-6"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start flex-1">
              <img
                src={exp.image}
                alt={`${exp.company} logo`}
                className="w-full md:w-32 md:h-32 h-48 object-cover rounded-lg"
              />
              <div className="text-left">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-sm text-gray-300 font-mono mb-1">{exp.company}</p>
                <p className="text-sm text-gray-400 mb-3 italic">{exp.duration}</p>
                <p className="text-sm text-gray-200 leading-relaxed">{exp.description}</p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end items-center w-full md:w-auto">
              <a
                href="https://drive.google.com/file/d/1jNoR-XC1pDN1PRNdpPc3aENfcIjtusRQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition"
                title="View Letter of Recommendation"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m0 0H5.5A2.5 2.5 0 013 9.5v-6A2.5 2.5 0 015.5 1h13A2.5 2.5 0 0121 3.5v6A2.5 2.5 0 0118.5 12H16z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12v7m8-7v7m-6 0h4" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}