import React, { useState } from "react";
import { X, Award, Calendar, Building, Eye, ExternalLink, CheckCircle, Sparkles } from "lucide-react";

// Placeholder images - replace with your actual imports
import aiforbusinessImage from '../assets/aiforbusiness.png'
import mlaco1 from '../assets/mlaco1.jpg'
import mernstackImage from '../assets/mernstack.jpg'

const certificates = [
  {
    title: 'Machine Learning Engineer - Associate',
    image: mlaco1,
    issuer: 'Amazon Web Services (AWS)',
    date: 'January 2025',
    category: 'ML Ops',
    skills: ['Machine Learning', 'MLOps', 'Model Deployment', 'AWS SageMaker'],
    credentialId: 'AWS-MLE-A-2025',
    description: 'Professional certification demonstrating expertise in designing, building, and deploying machine learning solutions on AWS.',
    featured: true
  },
  {
    title: 'AI for Business',
    image: aiforbusinessImage,
    issuer: 'Udemy',
    date: 'December 2023',
    category: 'Artificial Intelligence',
    skills: ['AI Strategy', 'Business Intelligence', 'AI Applications'],
    credentialId: 'UC-AI-BUS-2023',
    description: 'Comprehensive course on implementing AI solutions in business environments.',
    featured: false
  },
  {
    title: 'Full Stack Web Development',
    image: mernstackImage,
    issuer: 'Udemy',
    date: 'March 2024',
    category: 'Web Development',
    skills: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    credentialId: 'UC-MERN-2024',
    description: 'Advanced certification in MERN stack development and modern web application architecture.',
    featured: false
  },
];

export default function CertGallery() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="text-gray-900 mt-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-4">
          <Award className="w-8 h-8 text-blue-600" />
          <h2 className="text-4xl font-bold text-gray-900 font-mono">
            Certifications
          </h2>
          <Award className="w-8 h-8 text-purple-600" />
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
        <p className="text-gray-700 font-mono text-sm max-w-2xl mx-auto">
          Professional certifications demonstrating expertise across various technical domains
        </p>
      </div>

      {/* Certifications Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="cursor-pointer group relative"
            onClick={() => setSelectedCert(cert)}
          >
            {/* Featured Badge */}
            {cert.featured && (
              <div className="absolute -top-3 -right-3 z-10">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold font-mono flex items-center gap-1 shadow-lg">
                  <Sparkles className="w-3 h-3" />
                  Featured
                </div>
              </div>
            )}

            <div className="bg-white/80 border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">

              {/* Certificate Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-contain object-center transform group-hover:scale-105 transition-transform duration-700 relative z-10"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-2 mx-auto w-fit border border-white/20">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white font-mono text-sm font-semibold">View Details</p>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-tr-full"></div>
              </div>

              {/* Certificate Info */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Category Badge */}
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-400 text-blue-700 px-3 py-1 rounded-full text-xs font-mono font-medium">
                    <Award className="w-3 h-3" />
                    {cert.category}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 font-mono mb-3 leading-tight group-hover:text-blue-700 transition-colors duration-300">
                  {cert.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 font-mono text-sm">
                      {cert.issuer}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-600 font-mono text-sm">
                      {cert.date}
                    </span>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-mono border border-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded font-mono border border-gray-300">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Accent Bar */}
              <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-16 flex flex-wrap justify-center gap-8">
        <div className="text-center">
          <div className="text-4xl font-bold text-gray-900 font-mono mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {certificates.length}
          </div>
          <div className="text-gray-600 font-mono text-sm">
            Total Certifications
          </div>
        </div>
        <div className="w-px h-16 bg-gray-400"></div>
        <div className="text-center">
          <div className="text-4xl font-bold text-gray-900 font-mono mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {new Set(certificates.map(c => c.category)).size}
          </div>
          <div className="text-gray-600 font-mono text-sm">
            Categories
          </div>
        </div>
        <div className="w-px h-16 bg-gray-400"></div>
        <div className="text-center">
          <div className="text-4xl font-bold text-gray-900 font-mono mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {new Set(certificates.map(c => c.issuer)).size}
          </div>
          <div className="text-gray-600 font-mono text-sm">
            Issuers
          </div>
        </div>
      </div>

      {/* Modal for Certificate View */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl relative max-w-5xl w-full max-h-[95vh] overflow-y-auto border border-gray-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm flex items-center justify-between p-6 border-b border-gray-300">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 font-mono">
                    {selectedCert.title}
                  </h3>
                  {selectedCert.featured && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded text-xs font-bold font-mono flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700 font-mono text-sm">
                      {selectedCert.issuer}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-600 font-mono text-sm">
                      {selectedCert.date}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-400 text-blue-700 px-3 py-1 rounded-full text-xs font-mono font-medium">
                    <Award className="w-3 h-3" />
                    {selectedCert.category}
                  </div>
                </div>
              </div>

              <button
                className="text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-200 transition-all duration-200 ml-4"
                onClick={() => setSelectedCert(null)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 lg:p-8">
              {/* Certificate Image */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 mb-6 border border-gray-300">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full max-h-[50vh] object-contain rounded-lg"
                />
              </div>

              {/* Certificate Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Description */}
                <div className="bg-white/80 rounded-xl p-6 border border-gray-300">
                  <h4 className="text-lg font-bold text-gray-900 font-mono mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Description
                  </h4>
                  <p className="text-gray-700 font-mono text-sm leading-relaxed">
                    {selectedCert.description}
                  </p>
                </div>

                {/* Credential Info */}
                <div className="bg-white/80 rounded-xl p-6 border border-gray-300">
                  <h4 className="text-lg font-bold text-gray-900 font-mono mb-3">
                    Credential Information
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <div className="text-gray-600 font-mono text-xs mb-1">Credential ID</div>
                      <div className="text-gray-900 font-mono text-sm bg-gray-100 px-3 py-2 rounded border border-gray-300">
                        {selectedCert.credentialId}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 font-mono text-xs mb-1">Issue Date</div>
                      <div className="text-gray-900 font-mono text-sm bg-gray-100 px-3 py-2 rounded border border-gray-300 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-purple-600" />
                        {selectedCert.date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white/80 rounded-xl p-6 border border-gray-300">
                <h4 className="text-lg font-bold text-gray-900 font-mono mb-4">
                  Skills Demonstrated
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedCert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-2 rounded-lg text-sm font-mono font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
