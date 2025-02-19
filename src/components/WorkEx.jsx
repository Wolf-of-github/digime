import React from 'react';
import credencelogo from '../assets/credencelogonew.png'

const WorkEx = () => {
  return (
        
    <div className='mt-16'>

        <div className="flex text-2xl font-bold text-gray-100 font-mono text-justify">
            Work Experience
        </div>

        <div class="grid grid-cols-6 grid-rows-[repeat(5,80px)] mt-8">
            
            <div className="row-span-5 col-span-2 border border-white">
                <img
                src={credencelogo}
                alt="Credence Logo"
                className="object-cover h-full w-full"
                />
            </div>
            
            <div class="row-span-5 col-span-4 text-xl font-mono text-white ml-20 flex-col">
                <div className="text-3xl font-bold">Credence Analytics Pvt Ltd.</div>

                <div className="">Software Engineering Intern (January 2023 - August 2023) </div>

                <div className='mt-8 text-justify'>As a Software Developer Intern at Credence, Mumbai, I collaborated directly with the CEO to enhance the organization's ERP system. Utilizing an open-source framework, I worked extensively with Python for server-side operations, JavaScript for client-side tasks, and MariaDB for database management. I contributed to the development of business logic, API design, and database interactions across six projects. Additionally, I engineered JavaScript scripts to manage client-side events and implemented key features such as attrition tools, employee skill mapping, timesheets, and a social wall, which were used by all employees at Credence Analytics.</div>

                <div className='mt-5 underline'><a href='https://www.credenceanalytics.com' target='blank'>Credence Analytics</a></div>

            </div>

        </div>
    </div>

  );
};

export default WorkEx;