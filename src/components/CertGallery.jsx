import React, { useState } from "react";
import aiforbusiness from "../assets/aiforbusiness.png";
import blockchain from "../assets/blockchain.png";
import mernstack from "../assets/mernstack.jpg";

const certificates = [
  {
    title: 'AWS Certified Solutions Architect',
    image: aiforbusiness,
  },
  {
    title: 'Deep Learning Specialization',
    image: blockchain,
  },
  {
    title: 'Machine Learning with Python',
    image: mernstack,
  },
  {
    title: 'Introduction to Cloud Computing',
    image: aiforbusiness,
  },
  {
    title: 'Responsive Web Design',
    image: blockchain,
  },
  {
    title: 'Python for Everybody',
    image: mernstack,
  },
];

export default function CertGallery() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="text-gray-100">
      <h2 className="text-3xl font-bold font-mono text-center mb-8">Certifications</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {certificates.map((cert, index) => (
          <div key={index} className="w-full sm:w-[45%] lg:w-[28%] cursor-pointer" onClick={() => setSelectedCert(cert)}>
            <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-56 object-contain object-center bg-white bg-opacity-10"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{cert.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg relative max-w-3xl w-[90%]">
            <button
              className="absolute top-2 right-4 text-white text-2xl"
              onClick={() => setSelectedCert(null)}
            >
              &times;
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full max-h-[80vh] object-contain rounded"
            />
            <h3 className="text-xl font-bold text-center mt-4">{selectedCert.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
}