import React from 'react';
import { Code, Database, Cloud, GitBranch, Container, Cpu, Sparkles, Network, Settings } from 'lucide-react';

const skillsData = [
  {
    category: 'Cloud & Infrastructure',
    icon: <Cloud className="w-5 h-5" />,
    color: 'from-blue-400 to-blue-600',
    borderColor: 'border-blue-400/30',
    skills: ['Cloud Computing', 'Computer Networks', 'Operating Systems']
  },
  {
    category: 'Programming Languages',
    icon: <Code className="w-5 h-5" />,
    color: 'from-yellow-400 to-yellow-600',
    borderColor: 'border-yellow-400/30',
    skills: ['Python', 'Java']
  },
  {
    category: 'AI & Machine Learning',
    icon: <Cpu className="w-5 h-5" />,
    color: 'from-orange-400 to-orange-600',
    borderColor: 'border-orange-400/30',
    skills: ['Artificial Intelligence', 'Machine Learning', 'Big Data Analytics']
  },
  {
    category: 'Data Management',
    icon: <Database className="w-5 h-5" />,
    color: 'from-purple-400 to-purple-600',
    borderColor: 'border-purple-400/30',
    skills: ['Database Management Systems']
  },
  {
    category: 'Software Engineering',
    icon: <Settings className="w-5 h-5" />,
    color: 'from-green-400 to-green-600',
    borderColor: 'border-green-400/30',
    skills: ['Software Development Lifecycle Management']
  }
];

export default function Skills() {
  return (
    <section className="mt-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 font-mono mb-4">
          Technical Skills
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
        <p className="text-gray-700 font-mono text-sm max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise across various domains
        </p>
      </div>

      {/* Skills List - Vertically Stacked */}
      <div className="max-w-4xl mx-auto space-y-6">
        {skillsData.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="bg-white/80 border border-gray-200 text-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >

            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-300">
              <div className={`p-3 bg-gradient-to-r ${category.color} bg-opacity-20 border ${category.borderColor} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-mono">
                {category.category}
              </h3>
            </div>

            {/* Skills List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="group/skill bg-gray-100 hover:bg-gray-200 rounded-lg p-3 transition-all duration-200 border border-gray-300 hover:border-gray-400"
                >
                  <span className="text-gray-900 font-mono text-sm font-semibold">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
