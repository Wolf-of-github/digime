import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import aiforbusiness from "../assets/aiforbusiness.png";
import blockchain from "../assets/blockchain.png";
import sqlinjection from "../assets/sqlinjection.png";
import credencecompletion from "../assets/credencecompletion.jpg";
import glcloud from '../assets/glcloud.jpeg';
import webdev from '../assets/webdev.jpg';
import mernstack from '../assets/mernstack.jpg';

const CertGallery = () => {
  const certificates = [
    aiforbusiness,
    blockchain,
    sqlinjection,
    credencecompletion,
    glcloud,
    webdev,
    mernstack
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const getVisibleCertificates = () => {
    const length = certificates.length;
    
    // Get two certificates before and two after the current one
    const prevIndex2 = (currentIndex - 2 + length) % length;
    const prevIndex1 = (currentIndex - 1 + length) % length;
    const nextIndex1 = (currentIndex + 1) % length;
    const nextIndex2 = (currentIndex + 2) % length;

    return [
      { index: prevIndex2, position: "prev2" },
      { index: prevIndex1, position: "prev1" },
      { index: currentIndex, position: "current" },
      { index: nextIndex1, position: "next1" },
      { index: nextIndex2, position: "next2" }
    ];
  };

  return (
    <div className="mt-16 flex flex-col items-center w-full">
      <div className="flex text-2xl font-bold text-gray-100 font-mono">
        Certifications
      </div>

      {/* Container holding images */}
      <div className="flex justify-center items-center w-full overflow-hidden px-10 min-h-[45rem]">
        <div className="flex justify-center items-center w-full h-full relative">
          {getVisibleCertificates().map(({ index, position }) => (
            <div
              key={index}
              className={`absolute transition-all duration-500 ease-in-out ${
                position === "current"
                  ? "z-20 scale-125 opacity-100 translate-x-0"
                  : position === "prev1"
                  ? "z-10 scale-100 opacity-80 -translate-x-[42%]"
                  : position === "next1"
                  ? "z-10 scale-100 opacity-80 translate-x-[42%]"
                  : position === "prev2"
                  ? "z-0 scale-90 opacity-60 -translate-x-[85%]"
                  : "z-0 scale-90 opacity-60 translate-x-[85%]"
              }`}
            >
              <img
                src={certificates[index]}
                alt={`Certificate ${index + 1}`}
                className="w-[34rem] h-[38rem] object-contain rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows at the bottom */}
      <div className="mt-6 flex gap-8">
        <button
          onClick={prevSlide}
          className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default CertGallery;