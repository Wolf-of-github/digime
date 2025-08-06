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
            Hi! I'm a graduate student focused on building reliable, scalable, and efficient AI-powered applications. 
            My work centers around fine-tuning large language models, implementing retrieval-augmented generation (RAG), 
            and leveraging cloud computing, particularly AWS to streamline AI/ML development. 
            I'm especially interested in distributed machine learning using Kubernetes, with the goal of accelerating model training and optimizing resource efficiency.
            </div>
          </div>
        </div>
    )
}