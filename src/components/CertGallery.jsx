import { Award, Calendar, Building, Sparkles } from "lucide-react";

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
    credentialId: 'AWS-MLE-A-2025',
    featured: true
  }
];

export default function CertGallery() {
  return (
    <div className="text-gray-900 mt-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-4">
          <Award className="w-8 h-8 text-blue-600" />
          <h2 className="text-4xl font-bold text-gray-900 font-mono">
            Certifications
          </h2>
          <Award className="w-8 h-8 text-purple-600" />
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
      </div>

      {/* All Certificates - Scrollable */}
      <div className="space-y-20">
        {certificates.map((cert, index) => (
          <div key={index} className="max-w-6xl mx-auto">
            {/* Featured Badge */}
            {cert.featured && (
              <div className="flex justify-end mb-4">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold font-mono flex items-center gap-2 shadow-lg">
                  <Sparkles className="w-4 h-4" />
                  Featured
                </div>
              </div>
            )}

            {/* Certificate Info */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-2 rounded-full text-sm font-mono font-medium mb-4">
                <Award className="w-4 h-4" />
                {cert.category}
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 font-mono mb-4">
                {cert.title}
              </h3>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <Building className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700 font-mono text-base">
                    {cert.issuer}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-600 font-mono text-base">
                    {cert.date}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-gray-600 font-mono text-sm">ID:</span>
                  <span className="text-gray-900 font-mono text-sm font-medium bg-gray-100 px-3 py-1 rounded">
                    {cert.credentialId}
                  </span>
                </div>
              </div>
            </div>

            {/* Large Certificate Image - No Box */}
            <div className="w-full">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Divider */}
            {index < certificates.length - 1 && (
              <div className="mt-20 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            )}
          </div>
        ))}
      </div>

      {/* Stats Section */}
      {/* <div className="mt-20 flex flex-wrap justify-center gap-8">
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
      </div> */}
    </div>
  );
}
