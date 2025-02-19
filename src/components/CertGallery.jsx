import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import cert1 from "../assets/cert1.png";
import cert2 from "../assets/cert2.png";
import cert3 from "../assets/cert3.jpg";
import cert4 from "../assets/cert4.jpg";

const CertGallery = () => {
  const certificates = [cert1, cert2, cert3, cert4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const getVisibleCertificates = () => {
    const visibleCerts = [];
    const length = certificates.length;
    const prevIndex = (currentIndex - 1 + length) % length;
    visibleCerts.push({ index: prevIndex, position: 'prev' });
    visibleCerts.push({ index: currentIndex, position: 'current' });
    const nextIndex = (currentIndex + 1) % length;
    visibleCerts.push({ index: nextIndex, position: 'next' });
    return visibleCerts;
  };

  return (
    <div className="mt-16 flex flex-col">
      
      <div className="flex text-2xl font-bold text-gray-100 font-mono">
        Certifications
      </div>
    
    <div className="items-center">  
    
      <div className="relative flex items-center justify-center w-full">
        <button
          onClick={prevSlide}
          className="absolute left-4 p-3 bg-gray-800 text-white rounded-full z-30 hover:bg-gray-700 transition-colors"
        >
          <ChevronLeft size={36} />
        </button>

        <div className="flex justify-center items-center w-full overflow-hidden px-20 min-h-[40rem]">
          <div className="flex justify-center items-center w-full h-full relative">
            {getVisibleCertificates().map(({ index, position }) => (
              <div
                key={index}
                className={`transition-all duration-500 ease-in-out absolute ${
                  position === 'current'
                    ? 'z-20 scale-110 opacity-100 translate-x-0'
                    : position === 'prev'
                    ? 'z-10 scale-90 opacity-60 -translate-x-56' 
                    : 'z-10 scale-90 opacity-60 translate-x-56'  
                }`}
              >
                <img
                  src={certificates[index]}
                  alt={`Certificate ${index + 1}`}
                  className="w-[32rem] h-[36rem] object-contain rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-4 p-3 bg-gray-800 text-white rounded-full z-30 hover:bg-gray-700 transition-colors"
        >
          <ChevronRight size={36} />
        </button>
      </div>
    
    </div>

    </div>
  );
};

export default CertGallery;