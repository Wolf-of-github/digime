


import React from 'react';

const CompetitiveExams = () => {
  const exams = [
    {
      title: 'GRE',
      score: '320 / 340',
      description: 'Focused on quantitative reasoning and analytical writing. Scored 165 in quant and 155 in verbal.'
    },
    {
      title: 'TOEFL',
      score: '112 / 120',
      description: 'Demonstrated proficiency in academic English across reading, writing, speaking, and listening.'
    },
    {
      title: 'GATE CSE',
      score: 'AIR 1500',
      description: 'Tested on core computer science subjects. Strength in algorithms, programming, and databases.'
    }
  ];

  return (
    <section id="competitive-exams" className="mt-20">
      <div className="text-3xl font-bold text-gray-100 font-mono text-center mb-8">
        Competitive Exams
      </div>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 text-white">
        {exams.map((exam, idx) => (
          <div key={idx} className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg flex-1 text-center">
            <h3 className="text-xl font-semibold mb-2">{exam.title}</h3>
            <p className="text-sm font-mono">{exam.score}</p>
            <p className="text-sm mt-4 text-gray-300">{exam.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompetitiveExams;