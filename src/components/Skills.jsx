

import React from 'react';

const skillsData = {
  'Languages': ['Python', 'JavaScript', 'SQL', 'C++'],
  'Frameworks & Libraries': ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Scikit-learn'],
  'Tools & Platforms': ['Git', 'Docker', 'Kubernetes', 'AWS', 'Vite'],
  'ML & Data': ['Pandas', 'NumPy', 'YOLOX', 'RetinaFace', 'TensorFlow'],
};

export default function Skills() {
  return (
    <section id="skills" className="mt-20 text-gray-100">
      <h2 className="text-3xl font-bold font-mono text-center mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-mono hover:bg-purple-600 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}