import React from 'react'
import viterbiLogo from '../assets/viterbiLogo.jpg';
import umomLogo from '../assets/umom.jpg';
import ruparelLogo from '../assets/dg.jpg';

const Education = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
      {/* USC */}
      <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg flex-1 text-center text-white">
        <img src={viterbiLogo} alt="USC" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
        <h3 className="text-xl font-bold">University of Southern California</h3>
        <p className="text-sm font-mono mt-2">M.S. in Computer Science (2023 – 2025)</p>
        <p className="text-sm font-mono mt-1">GPA: 3.9 / 4.0</p>
        <p className="text-sm mt-4 text-gray-300">
          Focused on AI, ML, and web technologies. Took courses like Machine Learning, Deep Learning, and Algorithms.
        </p>
      </div>

      {/* Mumbai University */}
      <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg flex-1 text-center text-white">
        <img src={umomLogo} alt="Mumbai University" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
        <h3 className="text-xl font-bold">University of Mumbai</h3>
        <p className="text-sm font-mono mt-2">B.E. in Computer Engineering (2018 – 2022)</p>
        <p className="text-sm font-mono mt-1">GPA: 9.43 / 10</p>
        <p className="text-sm mt-4 text-gray-300">
          Built a strong foundation in programming and systems. Studied OS, DBMS, Data Structures, and AI.
        </p>
      </div>

      {/* High School */}
      <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg flex-1 text-center text-white">
        <img src={ruparelLogo} alt="High School" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
        <h3 className="text-xl font-bold">XYZ Junior College</h3>
        <p className="text-sm font-mono mt-2">HSC (2016 – 2018)</p>
        <p className="text-sm font-mono mt-1">Score: 91.38%</p>
        <p className="text-sm mt-4 text-gray-300">
          Developed an interest in Computer Science and Mathematics. Participated in coding and science fairs.
        </p>
      </div>
    </div>
  )
}

export default Education
