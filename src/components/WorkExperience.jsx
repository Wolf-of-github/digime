import React from 'react';
import { ExternalLink, Calendar, Building, Award } from 'lucide-react';

// You'll need to replace this with your actual credenceLogo import
import credenceLogo from '../assets/credence.jpg'

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'Credence Analytics Pvt. Ltd.',
    duration: 'Jan 2023 – Aug 2023',
    period: '8 months',
    location: 'Mumbai, India',
    description: "Collaborated directly with executive leadership to enhance the company's enterprise resource planning (ERP) system using the Frappe framework. Developed robust server-side logic in Python, implemented dynamic client-side features in JavaScript, and optimized data management with MariaDB. Successfully delivered critical business modules including attrition analysis tools, comprehensive skill mapping systems, and automated timesheet management. Designed and implemented RESTful APIs while integrating continuous integration and deployment pipelines with GitLab to streamline development workflows and ensure reliable deployment processes.",
    technologies: ['Python', 'JavaScript', 'Frappe Framework', 'MariaDB', 'GitLab CI/CD', 'REST APIs'],
    achievements: [
      'Enhanced ERP system performance and functionality',
      'Implemented automated CI/CD pipeline with GitLab',
      'Delivered critical business modules for HR operations',
      'Collaborated directly with C-level executives'
    ],
    image: credenceLogo,
  }
];

export default function WorkExperience() {
  return (
    <section id="experience" className="mt-20">
      <h2 className="text-3xl font-bold text-gray-100 font-mono text-center mb-8">
        Work Experience
      </h2>
      
      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              {/* Main Content */}
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start flex-1">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <img
                    src={exp.image}
                    alt={`${exp.company} logo`}
                    className="w-full md:w-32 md:h-32 h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                {/* Experience Details */}
                <div className="text-left flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-gray-400" />
                        <p className="text-lg text-gray-300 font-mono">{exp.company}</p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <p className="text-sm text-gray-400 italic">{exp.duration}</p>
                      </div>
                      
                      <div className="inline-flex items-center gap-1 bg-gray-600 bg-opacity-30 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-200 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700 bg-opacity-60 text-gray-300 rounded-full text-xs hover:bg-opacity-80 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide flex items-center gap-2">
                      <Award className="w-4 h-4 text-gray-400" />
                      Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendation Link */}
              <div className="flex justify-center md:justify-end items-start w-full md:w-auto">
                <a
                  href="https://drive.google.com/file/d/1jNoR-XC1pDN1PRNdpPc3aENfcIjtusRQ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center bg-white bg-opacity-10 hover:bg-opacity-20 text-white hover:text-gray-400 p-2 rounded-full transition-all duration-300 border border-gray-600 hover:border-gray-400"
                  title="View Letter of Recommendation"
                >
                  <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}