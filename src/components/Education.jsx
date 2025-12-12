import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, MapPin } from 'lucide-react';

import uscLogo from '../assets/viterbiLogo.jpg'
import umomLogo from '../assets/umom.jpg'
import ruparelLogo from '../assets/dg.jpg'

const educationData = [
  {
    institution: 'University of Southern California!',
    logo: uscLogo,
    degree: 'M.S. in Computer Science',
    duration: '2024 – 2026',
    gpa: '3.275 / 4.0',
    location: 'Los Angeles, CA',
    description: 'Focused on Machine Learning, Deep Learning, and cloud technologies. Completed graduate-level coursework in Algorithms, Machine Learning, Deep Learning, and Information Retrieval.',
    coursework: ['Machine Learning', 'Deep Learning', 'Algorithms', 'Information Retrieval', 'Cloud Computing'],
    level: 'Graduate',
    status: 'In Progress'
  },
  {
    institution: 'University of Mumbai',
    logo: umomLogo,
    degree: 'B.E. in Computer Engineering',
    duration: '2018 – 2022',
    gpa: '9.84 / 10',
    location: 'Mumbai, India',
    description: 'Built a strong foundation in software engineering principles with a focus on developing full-stack applications. Completed coursework in Python, Java, Web Development, Operating Systems, Database Management Systems, Big Data, and Cloud Computing.',
    coursework: ['Python', 'Java', 'Web Development', 'Operating Systems', 'Database Management', 'Big Data'],
    level: 'Undergraduate',
    status: 'Completed'
  },
  {
    institution: 'D.G. Ruparel College of Arts, Science and Commerce',
    logo: ruparelLogo,
    degree: 'HSC - Science Stream',
    duration: '2018 – 2020',
    gpa: '91.91%',
    location: 'Mumbai, India',
    description: 'Pursued the science stream, building a strong foundation in Mathematics and Physics, which serves as a core base for my current work in computer science.',
    coursework: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science'],
    level: 'High School',
    status: 'Completed'
  }
];

const Education = () => {
  return (
    <section className="mt-10">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-100 font-mono mb-4">
          Education
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Timeline line - hidden on mobile, visible on larger screens */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-500 to-green-400 transform -translate-x-1/2"></div>
        
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="hidden lg:block absolute left-1/2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-4 border-gray-900 transform -translate-x-1/2 z-10">
                <div className="absolute inset-1 bg-white rounded-full opacity-50"></div>
              </div>
              
              {/* Education Card - Alternating sides on large screens */}
              <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:ml-auto'}`}>
                <div className="bg-white bg-opacity-10 text-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-opacity-15">
                  
                  {/* Header Section */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                    {/* Institution Logo */}
                    <div className="relative group flex-shrink-0">
                      <img
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Institution Info */}
                    <div className="text-center sm:text-left flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-white font-mono mb-2 leading-tight">
                        {edu.institution}
                      </h3>
                      
                      <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <div className="flex items-center justify-center sm:justify-start gap-2">
                            <GraduationCap className="w-4 h-4 text-blue-400 flex-shrink-0" />
                            <span className="text-lg text-gray-300 font-mono">
                              {edu.degree}
                            </span>
                          </div>
                          
                          {/* Status Badge */}
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                            edu.status === 'In Progress' 
                              ? 'bg-blue-500/20 border-blue-400/30 text-blue-200' 
                              : 'bg-green-500/20 border-green-400/30 text-green-200'
                          }`}>
                            <div className={`w-2 h-2 rounded-full ${
                              edu.status === 'In Progress' ? 'bg-blue-400 animate-pulse' : 'bg-green-400'
                            }`}></div>
                            {edu.status}
                          </div>
                        </div>
                        
                        {/* Duration and Location */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                          <div className="flex items-center justify-center sm:justify-start gap-2">
                            <Calendar className="w-4 h-4 text-purple-400 flex-shrink-0" />
                            <span className="text-sm text-gray-400 font-mono">
                              {edu.duration}
                            </span>
                          </div>
                          
                          <div className="flex items-center justify-center sm:justify-start gap-2">
                            <MapPin className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm text-gray-400 font-mono">
                              {edu.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* GPA Badge */}
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 text-yellow-200 px-4 py-2 rounded-lg text-center">
                        <div className="flex items-center gap-2 mb-1">
                          <Award className="w-4 h-4 text-yellow-400" />
                          <span className="text-xs font-mono font-medium uppercase tracking-wide">
                            {edu.level === 'High School' ? 'Score' : 'GPA'}
                          </span>
                        </div>
                        <div className="text-lg font-bold font-mono">
                          {edu.gpa}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-gray-200 leading-relaxed font-mono text-sm lg:text-base">
                      {edu.description}
                    </p>
                  </div>

                  {/* Key Coursework */}
                  <div>
                    <h4 className="text-sm font-bold text-gray-300 font-mono mb-4 uppercase tracking-wider flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-blue-400" />
                      Key Coursework
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {edu.coursework.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="group px-3 py-2 bg-gray-700/60 hover:bg-gray-600/60 text-gray-300 hover:text-white rounded-lg text-xs font-mono font-medium transition-all duration-200 text-center border border-gray-600/30 hover:border-gray-500/50"
                        >
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Connector line for mobile */}
              {index < educationData.length - 1 && (
                <div className="lg:hidden flex justify-center mt-8">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-purple-400 to-blue-400"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;