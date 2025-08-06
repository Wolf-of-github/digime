import React from 'react';

const skillsData = {
  'Languages': [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'SQL', level: 80 },
    { name: 'C++', level: 75 }
  ],
  'Frameworks & Libraries': [
    { name: 'React', level: 88 },
    { name: 'Node.js', level: 82 },
    { name: 'Express', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Scikit-learn', level: 78 }
  ],
  'Tools & Platforms': [
    { name: 'Git', level: 85 },
    { name: 'Docker', level: 75 },
    { name: 'Kubernetes', level: 70 },
    { name: 'AWS', level: 72 },
    { name: 'Vite', level: 80 }
  ],
  'ML & Data': [
    { name: 'Pandas', level: 88 },
    { name: 'NumPy', level: 85 },
    { name: 'YOLOX', level: 70 },
    { name: 'RetinaFace', level: 68 },
    { name: 'TensorFlow', level: 75 }
  ]
};

const categoryIcons = {
  'Languages': '🔤',
  'Frameworks & Libraries': '⚛️',
  'Tools & Platforms': '🛠️',
  'ML & Data': '📊'
};

export default function Skills() {
  return (
    <section id="skills" className="mt-20 text-gray-100">
      <h2 className="text-3xl font-bold font-mono text-center mb-8">Skills</h2>
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-700 border-opacity-30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category} className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  {/* <span className="text-2xl">{categoryIcons[category]}</span> */}
                  <h3 className="text-xl font-semibold font-mono text-gray-200">
                    {category}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {skills.map((skill, idx) => (
                    <div key={idx} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-mono text-gray-200 group-hover:text-gray-100 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-400 font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-gray-600 to-gray-400 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-gray-500/50"
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute inset-0 bg-white bg-opacity-20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Stats Summary */}
          <div className="mt-12 pt-8 border-t border-gray-700 border-opacity-50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-gray-200 font-mono">
                  {Object.values(skillsData).flat().length}
                </div>
                <div className="text-sm text-gray-400">Total Skills</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-2xl font-bold text-gray-200 font-mono">
                  {Object.keys(skillsData).length}
                </div>
                <div className="text-sm text-gray-400">Categories</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-2xl font-bold text-gray-200 font-mono">
                  {Math.round(Object.values(skillsData).flat().reduce((acc, skill) => acc + skill.level, 0) / Object.values(skillsData).flat().length)}%
                </div>
                <div className="text-sm text-gray-400">Avg Proficiency</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-2xl font-bold text-gray-200 font-mono">
                  {Object.values(skillsData).flat().filter(skill => skill.level >= 80).length}
                </div>
                <div className="text-sm text-gray-400">Expert Level</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}