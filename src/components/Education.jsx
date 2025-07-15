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
        <p className="text-sm font-mono mt-2">M.S. in Computer Science (2024 – 2026)</p>
        <p className="text-sm font-mono mt-1">GPA: 3.275 / 4.0</p>
        <p className="text-sm mt-4 text-gray-300">
          Focused on Machine Learning, Deep Learning, and cloud technologies. Completed graduate-level coursework in Algorithms, Machine Learning, Deep Learning, and Information Retrieval.
        </p>
      </div>

      {/* Mumbai University */}
      <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg flex-1 text-center text-white">
        <img src={umomLogo} alt="Mumbai University" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
        <h3 className="text-xl font-bold">University of Mumbai</h3>
        <p className="text-sm font-mono mt-2">B.E. in Computer Engineering (2018 – 2022)</p>
        <p className="text-sm font-mono mt-1">GPA: 9.84 / 10</p>
        <p className="text-sm mt-4 text-gray-300">
          Built a strong foundation in software engineering principles with a focus on developing full-stack applications. Completed coursework in Python, Java, Web Development, Operating Systems, Database Management Systems, Big Data, and Cloud Computing.
        </p>
      </div>

      {/* High School */}
      <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg flex-1 text-center text-white">
        <img src={ruparelLogo} alt="High School" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
        <h3 className="text-xl font-bold">D.G. Ruparel College of Arts, Science and Commerce</h3>
        <p className="text-sm font-mono mt-2">HSC (2018 – 2020)</p>
        <p className="text-sm font-mono mt-1">Score: 91.91%</p>
        <p className="text-sm mt-4 text-gray-300">
          Pursued the science stream, building a strong foundation in Mathematics and Physics, which serves as a core base for my current work in computer science.
        </p>
      </div>
    </div>
  )
}

export default Education
