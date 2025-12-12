import React from 'react';
import { ExternalLink, Calendar, Building, Award, MapPin } from 'lucide-react';

// Placeholder for company logo - replace with your actual import
import credenceLogo from '../assets/credencelogonew.png'
import nslogo from '../assets/neuralseek.jpg'
// import neuralseekLogo from '../assets/neuralseek-logo.png' // Add your logo here

const experiences = [
  {
    role: 'AI Engineering Intern',
    company: 'NeuralSeek', // Update with actual company name
    duration: 'Jun 2024 – Jul 2024', // Update with actual dates
    period: '6 weeks',
    location: 'Miami (Remote)', // Update with actual location
    description: "Completed an intensive AI engineering internship focused on building no-code agentic AI workflows and configuring RAG (Retrieval-Augmented Generation) pipelines. Applied ethical AI practices throughout the development process to ensure responsible AI implementation. Delivered a functional multi-agent automation solution showcasing advanced workflow orchestration. Built an automated resume-optimization agent using NeuralSeek's mAIstro platform, leveraging LLM-driven retrieval and intelligent workflow orchestration to align user resumes with job descriptions, improving application success rates through AI-powered content optimization.",
    technologies: ['LLMs', 'RAG Pipelines', 'mAIstro Platform', 'Multi-Agent Systems', 'Workflow Orchestration', 'NLP', 'Ethical AI'],
    achievements: [
      'Built automated resume-optimization agent with LLM-driven retrieval',
      'Configured and deployed RAG pipelines for intelligent content generation',
      'Delivered functional multi-agent automation solution',
      'Applied ethical AI practices across all development stages'
    ],
    image: nslogo,
  },
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
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 font-mono mb-4">
          Work Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Timeline line - hidden on mobile, visible on larger screens */}
        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-6 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-50"></div>

              {/* Experience Card */}
              <div className="md:ml-20 bg-white/80 text-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Company Logo */}
                  <div className="lg:col-span-3 flex justify-center lg:justify-start">
                    <div className="relative group">
                      <img
                        src={exp.image}
                        alt={`${exp.company} logo`}
                        className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Main Content */}
                  <div className="lg:col-span-8">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 font-mono mb-3">
                        {exp.role}
                      </h3>

                      {/* Company & Duration Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <Building className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <span className="text-lg text-gray-700 font-mono truncate">
                            {exp.company}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-purple-600 flex-shrink-0" />
                          <span className="text-sm text-gray-600 font-mono">
                            {exp.duration}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-600 font-mono">
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Period Badge */}
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-400 text-blue-700 px-4 py-2 rounded-full text-sm font-mono font-medium">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <p className="text-gray-700 leading-relaxed font-mono text-sm lg:text-base">
                        {exp.description}
                      </p>
                    </div>

                    {/* Technologies Grid */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-700 font-mono mb-4 uppercase tracking-wider flex items-center gap-2">
                        <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                        Technologies & Tools
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {exp.technologies.map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className="group px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 rounded-lg text-xs font-mono font-medium transition-all duration-200 text-center border border-gray-300 hover:border-gray-400"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-sm font-bold text-gray-700 font-mono mb-4 uppercase tracking-wider flex items-center gap-2">
                        <Award className="w-4 h-4 text-yellow-600" />
                        Key Achievements
                      </h4>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start gap-3 group">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                            <span className="text-sm text-gray-700 font-mono leading-relaxed group-hover:text-gray-900 transition-colors duration-200">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Recommendation Link */}
                  <div className="lg:col-span-1 flex justify-center lg:justify-end">
                    <a
                      href="https://drive.google.com/file/d/1jNoR-XC1pDN1PRNdpPc3aENfcIjtusRQ/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 text-gray-900 hover:text-gray-700 p-4 rounded-xl transition-all duration-300 border border-blue-400 hover:border-blue-500 hover:scale-105"
                      title="View Letter of Recommendation"
                    >
                      <ExternalLink className="w-6 h-6 transition-transform duration-200" />
                      <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-ping opacity-75"></div>
                      <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-600 rounded-full"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}