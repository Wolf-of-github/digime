import React from 'react';

export default function Projects() {
  const projectList = [
    {
      title: 'People Detection Pipeline',
      tech: ['Python', 'YOLOX', 'RetinaFace', 'M1 GPU'],
      description: 'A real-time computer vision system for people detection and face recognition optimized for Apple M3 chips. Integrated YOLOX and RetinaFace with GPU acceleration.',
      github: 'https://github.com/Wolf-of-github/people-detection',
      image: 'https://plus.unsplash.com/premium_photo-1683121713210-97667d2e83c8?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <section id="projects" className="mt-20">
      <div className="text-3xl font-bold text-gray-100 font-mono text-center mb-8">
        Projects
      </div>
      <div className="flex flex-col gap-8">
        {projectList.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white bg-opacity-10 text-white rounded-xl p-4 shadow-lg hover:shadow-2xl transition duration-300 w-full flex flex-col md:flex-row gap-4"
          >
            <img
              src={proj.image}
              alt={`${proj.title} thumbnail`}
              className="w-full md:w-48 h-40 object-cover object-center rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 border-b border-gray-700 pb-2">
                {proj.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-xs font-mono px-2 py-1 rounded-full"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">{proj.description}</p>
              {proj.github && (
                <div className="text-right">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold px-4 py-2 rounded"
                  >
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
