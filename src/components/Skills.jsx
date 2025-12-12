import React from 'react';
import { Code, Database, Cloud, GitBranch, Container, Cpu, Sparkles, Network, Settings } from 'lucide-react';

const skillsData = [
  {
    category: 'Programming Languages',
    icon: <Code className="w-5 h-5" />,
    color: 'from-yellow-400 to-yellow-600',
    borderColor: 'border-yellow-400/30',
    skills: [
      { name: 'Python', proficiency: 'Expert' },
      { name: 'Java', proficiency: 'Advanced' }
    ]
  },
  {
    category: 'Cloud & Infrastructure',
    icon: <Cloud className="w-5 h-5" />,
    color: 'from-blue-400 to-blue-600',
    borderColor: 'border-blue-400/30',
    skills: [
      { name: 'Cloud Computing', proficiency: 'Advanced' },
      { name: 'Computer Networks', proficiency: 'Advanced' },
      { name: 'Operating Systems', proficiency: 'Advanced' }
    ]
  },
  {
    category: 'AI & Machine Learning',
    icon: <Cpu className="w-5 h-5" />,
    color: 'from-orange-400 to-orange-600',
    borderColor: 'border-orange-400/30',
    skills: [
      { name: 'Artificial Intelligence', proficiency: 'Advanced' },
      { name: 'Machine Learning', proficiency: 'Advanced' },
      { name: 'Big Data Analytics', proficiency: 'Advanced' }
    ]
  },
  {
    category: 'Data Management',
    icon: <Database className="w-5 h-5" />,
    color: 'from-purple-400 to-purple-600',
    borderColor: 'border-purple-400/30',
    skills: [
      { name: 'Database Management Systems', proficiency: 'Advanced' }
    ]
  },
  {
    category: 'Software Engineering',
    icon: <Settings className="w-5 h-5" />,
    color: 'from-green-400 to-green-600',
    borderColor: 'border-green-400/30',
    skills: [
      { name: 'Software Development Lifecycle Management', proficiency: 'Advanced' }
    ]
  }
];

// Proficiency badge styling
const proficiencyStyles = {
  'Expert': 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/40 text-purple-200',
  'Advanced': 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-400/40 text-blue-200',
  'Intermediate': 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-400/40 text-green-200'
};

export default function Skills() {
  return (
    <section className="mt-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-100 font-mono mb-4">
          Technical Skills
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4"></div>
        <p className="text-gray-300 font-mono text-sm max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise across various domains
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="bg-white bg-opacity-10 text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-opacity-15 group border border-gray-700/50"
          >

            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-600/30">
              <div className={`p-3 bg-gradient-to-r ${category.color} bg-opacity-20 border ${category.borderColor} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-white font-mono">
                {category.category}
              </h3>
            </div>

            {/* Skills List */}
            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="group/skill bg-gray-700/30 hover:bg-gray-600/40 rounded-lg p-3 transition-all duration-200 border border-gray-600/20 hover:border-gray-500/40"
                >
                  {/* Skill Name and Proficiency */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-100 font-mono text-sm font-semibold">
                      {skill.name}
                    </span>
                    <span className={`text-xs font-mono px-2 py-1 rounded-md border ${proficiencyStyles[skill.proficiency]}`}>
                      {skill.proficiency}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/40 text-purple-200 px-4 py-2 rounded-lg font-mono text-xs">
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          Expert: Extensive professional experience
        </div>
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/40 text-blue-200 px-4 py-2 rounded-lg font-mono text-xs">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          Advanced: Strong hands-on experience
        </div>
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/40 text-green-200 px-4 py-2 rounded-lg font-mono text-xs">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          Intermediate: Working knowledge
        </div>
      </div>

      {/* Summary Stats */}
      {/* <div className="mt-8 text-center">
        <div className="inline-flex flex-wrap items-center gap-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-xl px-8 py-4">
          <div>
            <div className="text-2xl font-bold text-white font-mono">
              {skillsData.reduce((total, category) => total + category.skills.length, 0)}
            </div>
            <div className="text-gray-300 font-mono text-xs">
              Core Skills
            </div>
          </div>
          <div className="w-px h-10 bg-gray-600"></div>
          <div>
            <div className="text-2xl font-bold text-white font-mono">
              {skillsData.length}
            </div>
            <div className="text-gray-300 font-mono text-xs">
              Categories
            </div>
          </div>
          <div className="w-px h-10 bg-gray-600"></div>
          <div>
            <div className="text-2xl font-bold text-white font-mono">
              {skillsData.reduce((total, category) =>
                total + category.skills.filter(s => s.proficiency === 'Expert').length, 0
              )}
            </div>
            <div className="text-gray-300 font-mono text-xs">
              Expert Level
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
