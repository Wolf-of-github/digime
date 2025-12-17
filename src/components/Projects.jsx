import React, { useState } from 'react';
import { Github, ExternalLink, Code, Cpu, Database, Zap, Star, Calendar, ChevronDown } from 'lucide-react';

// Placeholder images - replace with your actual imports
import chipImage from '../assets/mlx.png'
import airflow_aws from '../assets/airflow_aws.jpg'
const symptomsftImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f093fb'/%3E%3Ctext x='150' y='95' font-family='Arial, sans-serif' font-size='16' fill='white' text-anchor='middle'%3ESymptom%3C/text%3E%3Ctext x='150' y='115' font-family='Arial, sans-serif' font-size='16' fill='white' text-anchor='middle'%3ETracker%3C/text%3E%3C/svg%3E";
// const chipImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%234facfe'/%3E%3Ctext x='150' y='95' font-family='Arial, sans-serif' font-size='18' fill='white' text-anchor='middle'%3EApple%3C/text%3E%3Ctext x='150' y='115' font-family='Arial, sans-serif' font-size='18' fill='white' text-anchor='middle'%3ESilicon%3C/text%3E%3C/svg%3E";

export default function Projects() {
  const projectList = [
    {
      title: 'Fine-Tuned Medical Diagnosis LLM on Apple Silicon',
      tech: ['Python', 'Pandas', 'MLX', 'LoRA / QLoRA', 'JSONL'],
      description: 'Fine-tuned a quantized 8B large language model (Ministral-8B-Instruct) using Apple\'s MLX framework and LoRA on a dataset of patient symptoms and diagnoses. Preprocessed data from CSV to natural language JSONL format and trained the model on-device using an Apple M2 Pro chip. The project demonstrates efficient, domain-specific LLM adaptation using parameter-efficient fine-tuning methods like LoRA and QLoRA.',
      github: 'https://github.com/Wolf-of-github/Symptom-Diagnosis/',
      image: chipImage,
      category: 'Machine Learning',
      status: 'Completed',
      date: '2025',
      highlights: [
        'On-device fine-tuning using Apple M2 Pro',
        'Parameter-efficient training with LoRA/QLoRA',
        'Medical domain specialization',
        'Quantized 8B parameter model optimization'
      ]
    },
    {
  title: 'Autonomous Recipe Recommendation Engine',
  tech: ['Python', 'FastAPI', 'PostgreSQL', 'Scikit-learn', 'Docker'],
  description: 'Built an experimental recommendation system that suggests recipes based on user mood, time constraints, and available ingredients. Implemented collaborative filtering combined with rule-based constraints and deployed the service using a containerized FastAPI backend.',
  github: 'https://github.com/example-user/recipe-recommender',
  image: airflow_aws,
  category: 'Applied AI',
  status: 'In Progress',
  date: '2024',
  highlights: [
    'Hybrid recommendation approach',
    'RESTful API with FastAPI',
    'Containerized deployment using Docker',
    'PostgreSQL-backed feature storage'
  ]
},
    {
      title: 'Mushroom Classification ML Pipeline',
      tech: ['Apache Airflow', 'AWS Glue', 'Amazon SageMaker', 'XGBoost', 'Python', 'S3', 'CloudWatch'],
      description: 'Robust Apache Airflow pipeline for processing mushroom dataset and training a binary classification model using AWS Glue ETL and SageMaker. Features intelligent conditional processing that prevents unnecessary reprocessing and handles idempotent operations safely.',
      github: 'https://github.com/Wolf-of-github/ML-Pipeline-Demo/tree/main',
      image: airflow_aws,
      category: 'Machine Learning',
      status: 'Completed',
      date: '2025',
      highlights: [
        'Intelligent processing that skips completed steps automatically',
        'Fixed version addressing common task skipping issues in ML pipelines',
        'End-to-end AWS integration with Glue ETL and SageMaker training',
        'XGBoost binary classification for edible vs poisonous mushroom prediction',
        'Comprehensive monitoring with CloudWatch logging and metrics',
        'Idempotent design allowing safe pipeline re-execution'
      ],
    }
    // {
    //   title: 'Coming Soon - More Projects',
    //   tech: ['React', 'Node.js', 'Python', 'TensorFlow'],
    //   description: 'Additional exciting projects are in development. Stay tuned for updates on full-stack applications, machine learning models, and innovative solutions.',
    //   github: '#',
    //   image: symptomsftImage,
    //   category: 'Full Stack',
    //   status: 'In Development',
    //   date: '2024',
    //   highlights: [
    //     'Modern web technologies',
    //     'Scalable architecture',
    //     'User-centric design',
    //     'Performance optimization'
    //   ]
    // }


  ];

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectList : projectList.slice(0, 1);

  return (
    <section id="projects" className="mt-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 font-mono mb-4">
          Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        <p className="text-gray-700 font-mono mt-4 max-w-2xl mx-auto">
          A showcase of innovative solutions combining cutting-edge technologies with practical applications
        </p>
      </div>

      {/* Projects Timeline */}
      <div className="relative">
        {/* Timeline line - hidden on mobile, visible on larger screens */}
        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
        
        <div className="space-y-12">
          {visibleProjects.map((project, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-6 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white z-10">
                <div className="absolute inset-1 bg-white rounded-full opacity-50"></div>
              </div>

              {/* Project Card */}
              <div className="md:ml-20 bg-white/80 border border-gray-200 text-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Project Image */}
                  <div className="lg:col-span-5 relative group">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border backdrop-blur-sm ${
                        project.status === 'Completed'
                          ? 'bg-green-100 border-green-400 text-green-700'
                          : 'bg-blue-100 border-blue-400 text-blue-700'
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${
                          project.status === 'Completed' ? 'bg-green-600' : 'bg-blue-600 animate-pulse'
                        }`}></div>
                        {project.status}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-xs font-mono font-medium backdrop-blur-sm">
                        {project.category}
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="lg:col-span-7 p-8 relative">
                    
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 font-mono mb-3 leading-tight">
                            {project.title}
                          </h3>

                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-blue-600" />
                              <span className="text-sm text-gray-600 font-mono">{project.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Code className="w-4 h-4 text-purple-600" />
                              <span className="text-sm text-gray-600 font-mono">{project.category}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          {project.github && project.github !== '#' && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-900 p-3 rounded-lg transition-all duration-300 border border-gray-300 hover:border-gray-400 hover:scale-105"
                              title="View on GitHub"
                            >
                              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                          )}
                          <a
                            href="#"
                            className="group flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 text-gray-900 p-3 rounded-lg transition-all duration-300 border border-blue-400 hover:border-blue-500 hover:scale-105"
                            title="View Demo"
                          >
                            <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <p className="text-gray-700 leading-relaxed font-mono text-sm lg:text-base">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-900 font-mono mb-4 uppercase tracking-wider flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-blue-600" />
                        Technologies & Tools
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {project.tech.map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className="group px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 rounded-lg text-xs font-mono font-medium transition-all duration-200 text-center border border-gray-300 hover:border-gray-400"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 font-mono mb-4 uppercase tracking-wider flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-600" />
                        Key Highlights
                      </h4>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-start gap-3 group">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                            <span className="text-sm text-gray-700 font-mono leading-relaxed group-hover:text-gray-900 transition-colors duration-200">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector line for mobile */}
              {index < visibleProjects.length - 1 && (
                <div className="md:hidden flex justify-center mt-8">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-purple-500 to-blue-500"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && projectList.length > 1 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 text-gray-900 hover:text-gray-700 px-8 py-4 rounded-xl transition-all duration-300 border border-blue-400 hover:border-blue-500 hover:scale-105 shadow-lg hover:shadow-2xl font-mono font-semibold"
            >
              <span>Show {projectList.length - 1} More Project{projectList.length - 1 > 1 ? 's' : ''}</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            <p className="mt-4 text-gray-600 font-mono text-sm">
              {projectList.length - 1} additional project{projectList.length - 1 > 1 ? 's' : ''} available to view
            </p>
          </div>
        )}
      </div>

      {/* Call to Action
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white font-mono mb-4">
            More Projects Coming Soon
          </h3>
          <p className="text-gray-300 font-mono mb-6 max-w-2xl mx-auto">
            I'm constantly working on new and exciting projects. Check back regularly or follow my GitHub for the latest updates.
          </p>
          <a
            href="https://github.com/Wolf-of-github"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-mono font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
          >
            <Github className="w-5 h-5" />
            Follow on GitHub
          </a>
        </div>
      </div> */}
    </section>
  );
}