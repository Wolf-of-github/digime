import React from 'react';
import { Code, Database, Cloud, GitBranch, Container, Cpu } from 'lucide-react';

const skillsData = [
  {
    category: 'Programming',
    icon: <Code className="w-4 h-4" />,
    color: 'from-yellow-400 to-yellow-600',
    skills: [
      { name: 'Python', level: 90 }
    ]
  },
  {
    category: 'DevOps',
    icon: <Container className="w-4 h-4" />,
    color: 'from-blue-400 to-blue-600',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 80 }
    ]
  },
  {
    category: 'AI/ML',
    icon: <Cpu className="w-4 h-4" />,
    color: 'from-orange-400 to-orange-600',
    skills: [
      { name: 'Amazon SageMaker AI', level: 85 },
      { name: 'Amazon Bedrock', level: 75 }
    ]
  },
  {
    category: 'Version Control',
    icon: <GitBranch className="w-4 h-4" />,
    color: 'from-red-400 to-red-600',
    skills: [
      { name: 'Git', level: 90 }
    ]
  },
  {
    category: 'Big Data',
    icon: <Database className="w-4 h-4" />,
    color: 'from-purple-400 to-purple-600',
    skills: [
      { name: 'Apache Spark', level: 80 },
      { name: 'Hadoop', level: 75 }
    ]
  }
];

export default function Skills() {
  return (
    <section className="mt-20">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-100 font-mono mb-4">
          Technical Skills
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
      </div>

      {/* Compact Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {skillsData.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="bg-white bg-opacity-10 text-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-opacity-15 group"
          >
            
            {/* Compact Category Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 bg-gradient-to-r ${category.color} bg-opacity-20 border border-gray-600/30 rounded-md group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              <h3 className="text-sm font-bold text-white font-mono">
                {category.category}
              </h3>
            </div>

            {/* Compact Skills List */}
            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="group/skill">
                  
                  {/* Skill Name and Level */}
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-200 font-mono text-xs font-medium truncate">
                      {skill.name}
                    </span>
                    <span className="text-gray-400 font-mono text-xs ml-2">
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Compact Progress Bar */}
                  <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-700 ease-out group-hover/skill:animate-pulse`}
                      style={{ width: `${skill.level}%` }}
                    >
                      {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover/skill:animate-[shimmer_1s_ease-out] group-hover/skill:translate-x-[200%]"></div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Compact Summary */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-lg px-8 py-4">
          <div>
            <div className="text-xl font-bold text-white font-mono">
              {skillsData.reduce((total, category) => total + category.skills.length, 0)}
            </div>
            <div className="text-gray-300 font-mono text-xs">
              Skills
            </div>
          </div>
          <div className="w-px h-8 bg-gray-600"></div>
          <div>
            <div className="text-xl font-bold text-white font-mono">
              {skillsData.length}
            </div>
            <div className="text-gray-300 font-mono text-xs">
              Categories
            </div>
          </div>
          <div className="w-px h-8 bg-gray-600"></div>
          <div>
            <div className="text-xl font-bold text-white font-mono">
              {Math.round(skillsData.reduce((total, category) => 
                total + category.skills.reduce((catTotal, skill) => catTotal + skill.level, 0), 0
              ) / skillsData.reduce((total, category) => total + category.skills.length, 0))}%
            </div>
            <div className="text-gray-300 font-mono text-xs">
              Avg Level
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}</style>
    </section>
  );
}