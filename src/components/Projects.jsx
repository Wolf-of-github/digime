import React from 'react'

export default function Projects() {
  return (

    <div className="flex flex-col mt-16">
        

        <div className="flex text-2xl font-bold text-gray-100 font-mono text-justify">
            Significant Projects
        </div>

        <div class="grid grid-cols-6 grid-rows-[repeat(5,80px)] mt-8">
            
            <div className="row-span-5 col-span-2 border border-white">
                <img
                src={usclogo}
                alt="Usc Logo"
                className="h-full w-full object-cover"
                />
            </div>
            
            <div class="row-span-5 col-span-4 text-xl font-mono text-white ml-20 flex-col">
                <div className="text-3xl font-bold mb-8">University of Southern California </div>
                
                <div>Course: Master's of Science in Computer Science</div>
                <div>Course Ranking: #21 (US News)</div>

                <div className="mt-4 flex-col">
                    Classes Enrolled:
                    <li className="mt-2">CSCI 572: Analysis of Algorithms, <a href="https://viterbi.usc.edu/directory/faculty/Adamchik/Victor">Victor Adamchik</a></li>
                    <li className="mt-2">CSCI 566: Deep learning and it's applications, <a href="https://viterbi.usc.edu/directory/faculty/Liu/Yan">Yan Liu</a></li>
                    <li className="mt-2">CSCI 572: Information retrieval and web search engines, <a href="https://viterbi.usc.edu/directory/faculty/Raghavachary/Saty">Saty Raghavachary</a></li>
                    <li className="mt-2">CSCI 531: Applied Cryptogtaphy, <a href="https://viterbi.usc.edu/directory/faculty/Ryutov/Tatyana">Tatyana Ryutov</a></li>
                </div>
                <div className="mt-2">Graduating, May 2026</div>

            </div>

        </div>

        <div class="grid grid-cols-6 grid-rows-[repeat(5,80px)] mt-8">
            
            <div className="row-span-5 col-span-2 border border-white">
                <img
                src={vitlogo}
                alt="Vit Logo"
                className="h-full w-full object-cover"
                />
            </div>
            
            <div class="row-span-5 col-span-4 text-xl font-mono text-white ml-20 flex-col">
                <div className="text-3xl font-bold mb-8">Vidyalankar Institute of Technology</div>
                
                <div>Course: Bachelor's degree in Computer Engineering</div>
                <div>Affiliation: University of Mumbai</div>

                <div className="mt-4 mb-2">Relevant Classes:</div>
                <div className="flex justify-between mb-4">
                    <div className="w-full">
                        <li className="mt-2">Operating Systems</li>
                        <li className="mt-2">C programming</li>
                        <li className="mt-2">Databases (sql & noSQl)</li>
                        <li className="mt-2">Microprocessors</li>
                    </div>
                    <div className="w-full">
                    <li className="mt-2">Object oriented programming using Java</li>
                        <li className="mt-2">System Design</li>
                        <li className="mt-2">Cloud Computing</li>
                        <li className="mt-2">AI/ML</li>
                    </div>
                </div>

                <div className="mt-2">Graduated, August 2024, <b>GPA: 9.8</b></div>

            </div>

        </div>
        
        {/* 
        <div className="text-white text-2xl mt-8 font-bold">Pre-University</div>
        <div className="ml-8 mt-4 text-white text-xl flex-col">
            <div> <b>HSC:</b> D.G. Ruparel College of Arts, Science and Commerce</div>
            <div><b>Stream</b>: Science</div>
            <div><b>Score</b>: 91%</div>
        </div> */}

    </div>
  )
}
