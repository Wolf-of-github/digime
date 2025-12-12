import React, { useState } from "react";
import ProfileImage from './ProfileImage';

export default function AboutMe() {
    return(
        <div id="about" className="flex flex-col pt-10 bg-gradient-to-b from-gray-800/60 to-transparent rounded-xl px-6 py-12">
          <div className="flex justify-center mt-16 bg-cover">
            <ProfileImage />
          </div>

          <div className="text-3xl font-bold text-gray-100 font-mono mt-16 text-center">
            About Me
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4"></div>
          </div>

          <div className="bg-white bg-opacity-10 rounded-xl p-6 mt-8 shadow-lg">
            <div className="text-lg sm:text-xl text-gray-100 font-mono text-justify leading-relaxed">
              I am a computer science graduate student with expertise in engineering efficient backend systems, enabling AI automation and
              cloud deployment at scale. Drawing by my industry experience and project work, I bring a keen understanding of product
              development and the ability to recognize user expectations and build solutions that align with them.
            </div>
          </div>
        </div>
    )
}