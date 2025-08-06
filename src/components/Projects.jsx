import React from 'react';
import mlx from '../assets/mlx.png'
import symptomsft from '../assets/symptomsft.png'
import chip from '../assets/chip.png'

export default function Projects() {
  const projectList = [
    {
      title: 'Fine-Tuned Medical Diagnosis LLM on Apple Silicon',
      tech: [	'Python', 'Pandas', 'MLX', 'LoRA / QLoRA ', 'JSONL'],
      description: 'Fine-tuned a quantized 8B large language model (Ministral-8B-Instruct) using Apple\'s MLX framework and LoRA on a dataset of patient symptoms and diagnoses. Preprocessed data from CSV to natural language JSONL format and trained the model on-device using an Apple M2 Pro chip. The project demonstrates efficient, domain-specific LLM adaptation using parameter-efficient fine-tuning methods like LoRA and QLoRA.',
      github: 'https://github.com/Wolf-of-github/Symptom-Diagnosis/',
      image: chip,
    },
  ];

  return (
    <section id="projects" className="mt-20">
      <div className="text-3xl font-bold text-gray-100 font-mono text-center mb-8">
        Projects
      </div>
      <div className="flex flex-col gap-8">
        {projectList.map((proj, idx) => (
          <div key={idx} className="relative">
            {/* GitHub Icon Button - top-right on desktop, hidden on mobile */}
            {proj.github && (
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 md:top-4 md:right-4 md:absolute md:block hidden text-white hover:text-gray-300"
                aria-label="View on GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 0a12 12 0 00-3.794 23.399c.6.11.82-.26.82-.578v-2.256c-3.338.726-4.042-1.61-4.042-1.61-.546-1.384-1.332-1.752-1.332-1.752-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.833 2.808 1.304 3.493.997.108-.774.418-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.932 0-1.31.469-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.912 1.234 3.222 0 4.61-2.807 5.625-5.48 5.921.43.37.814 1.102.814 2.222v3.293c0 .32.217.694.824.576A12 12 0 0012 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            )}
            <div id="projectInnerTile" className="bg-white bg-opacity-10 text-white rounded-xl p-4 shadow-lg hover:shadow-2xl transition duration-300 w-full flex flex-col md:flex-row gap-4">
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
                {/* GitHub icon shown below content on mobile */}
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:hidden inline-block text-white hover:text-gray-300 mt-2"
                    aria-label="View on GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 0a12 12 0 00-3.794 23.399c.6.11.82-.26.82-.578v-2.256c-3.338.726-4.042-1.61-4.042-1.61-.546-1.384-1.332-1.752-1.332-1.752-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.833 2.808 1.304 3.493.997.108-.774.418-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.932 0-1.31.469-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.912 1.234 3.222 0 4.61-2.807 5.625-5.48 5.921.43.37.814 1.102.814 2.222v3.293c0 .32.217.694.824.576A12 12 0 0012 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}