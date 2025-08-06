import React, { useState } from "react";
import { X, Award, Calendar, Building, Eye, ExternalLink } from "lucide-react";

// Placeholder images - replace with your actual imports
import aiforbusinessImage from '../assets/aiforbusiness.png'
import mlaco1 from '../assets/mlaco1.jpg'
import mernstackImage from '../assets/mernstack.jpg'

const certificates = [
  {
    title: 'AI for Business',
    image: aiforbusinessImage,
    issuer: 'Udemy',
    date: '2023',
    category: 'Artificial Intelligence'
  },
  {
    title: 'Full Stack Web Development',
    image: mernstackImage,
    issuer: 'Udemy',
    date: '2024',
    category: 'Web Development'
  },
  {
    title: 'Machine Learning Engineer - Associate',
    image: mlaco1,
    issuer: 'AWS',
    date: '2025',
    category: 'ML Ops'
  },
];

export default function CertGallery() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="text-gray-100 mt-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-100 font-mono mb-4">
          Certifications
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
      </div>

      {/* Certifications Gallery */}
      <div className="flex flex-wrap justify-center gap-8">
        {certificates.map((cert, index) => (
          <div 
            key={index} 
            className="w-full sm:w-[45%] lg:w-[28%] cursor-pointer group"
            onClick={() => setSelectedCert(cert)}
          >
            <div className="bg-white bg-opacity-10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-opacity-15 hover:scale-105">
              
              {/* Certificate Image */}
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-56 object-contain object-center bg-white bg-opacity-5 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gray-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <Eye className="w-8 h-8 text-white mb-2 mx-auto" />
                    <p className="text-white font-mono text-sm">View Certificate</p>
                  </div>
                </div>
              </div>
              
              {/* Certificate Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white font-mono mb-3 leading-tight">
                  {cert.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <Building className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 font-mono text-sm">
                      {cert.issuer}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-400 font-mono text-sm">
                      {cert.date}
                    </span>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-200 px-4 py-2 rounded-full text-xs font-mono font-medium">
                  <Award className="w-3 h-3" />
                  {cert.category}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Certificate View */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-xl relative max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-700">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div>
                <h3 className="text-2xl font-bold text-white font-mono">
                  {selectedCert.title}
                </h3>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 font-mono text-sm">
                      {selectedCert.issuer}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-400 font-mono text-sm">
                      {selectedCert.date}
                    </span>
                  </div>
                </div>
              </div>
              
              <button
                className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-800 transition-all duration-200"
                onClick={() => setSelectedCert(null)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 text-center">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full max-h-[60vh] object-contain rounded-lg bg-white bg-opacity-5 p-4"
              />
              
              <div className="mt-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-200 px-4 py-2 rounded-full font-mono font-medium">
                  <Award className="w-4 h-4" />
                  {selectedCert.category}
                </div>
              </div>
              
              {/* <div className="mt-6">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-mono font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 mx-auto">
                  <ExternalLink className="w-4 h-4" />
                  Verify Certificate
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}