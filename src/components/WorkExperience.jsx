import React from 'react';

const experiences = [
  {
    role: 'Machine Learning Intern',
    company: 'TechVision AI',
    duration: 'May 2024 – Aug 2024',
    description:
      'Developed and deployed object detection models for manufacturing defect analysis using YOLOX. Optimized pipelines for M1/M3 chips.',
    image: 'https://images.unsplash.com/photo-1622465911368-72162f8da3e2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcGFueSUyMGxvZ298ZW58MHwwfDB8fHww',
  },
  {
    role: 'Software Developer Intern',
    company: 'HealthBridge Systems',
    duration: 'Jan 2023 – Apr 2023',
    description:
      'Worked on backend microservices for healthcare management. Developed REST APIs, implemented security protocols, and integrated AWS services.',
    image: 'https://images.unsplash.com/photo-1659893982154-d4f9a9f0922e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNvbXBhbnklMjBsb2dvfGVufDB8MHwwfHx8MA%3D%3D',
  },
  {
    role: 'Frontend Engineer (Freelance)',
    company: 'Studio Om',
    duration: 'Jun 2022 – Dec 2022',
    description:
      'Designed and deployed a responsive website for a wellness studio using React and Tailwind. Integrated booking system and optimized performance.',
    image: 'https://images.unsplash.com/photo-1696654149774-6674b4d1ee35?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGNvbXBhbnklMjBsb2dvfGVufDB8MHwwfHx8MA%3D%3D',
  },
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
                href="https://example.com/letter.pdf"
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