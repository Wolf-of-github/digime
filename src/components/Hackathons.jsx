import React from 'react'
import cbhacks from '../assets/cbhacks.png'
import cbteam from '../assets/cbteam.jpg'
import cbpeople from '../assets/cbpeople.HEIC'
import jitimplementation from '../assets/jitimplementation.mp4'

export default function Hackathons() {
  return (
    <div className="flex flex-col mt-16">
       
        <div className="flex text-2xl font-bold text-gray-100 font-mono text-justify">
            Hackathons
        </div>

        <div className="container p-6 rounded-lg shadow-lg">
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-100 font-mono">
              <a href='https://hack.cerebralbeach.com' target='blank'>The Cerebral Beach Hacks</a>
            </h1>
            <p className="text-lg text-gray-100 font-mono mt-2">
              Gen-AI hackathon at Santa Monica organized by AI LA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <img
              src={cbhacks}
              alt="Cerebral beach hacks logo"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src={cbteam}
              alt="Cerebral beach hacks team"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src={cbpeople}
              alt="Placeholder 3"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          <div className="mb-6">
            <div className='mb-6'>
              <p className='text-gray-100 text-lg font-bold font-mono pb-2'> JIT Learning</p>

              <div className='flex flex-col gap-4'> 
                <p className="text-gray-100 text-lg font-mono">
                  At the Cerebral Beach Hacks in Santa Monica, we developed an AI-powered learning application using KindoAI and LlamaIndex APIs. Our project focused on Just-in-Time learning, helping users master subjects through flashcards with spaced repetition. The system intelligently prioritized concepts users struggled with based on their past performance. On the client side, we built a React interface that allowed users to upload documents, which were then analyzed by KindoAI and LlamaIndex to generate relevant flashcards. The backend, built with Django, managed client-API communication and handled the business logic for optimizing flashcard prioritization.
                </p>      
              </div>
            </div>

            <div className='flex-col'>
              <div className="rounded-lg shadow-md">
                <p className='text-gray-100 text-lg font-bold font-mono pb-2 text-center'>Demonstration</p>
                <div className="flex items-center justify-center rounded-lg">
                  <video controls className="rounded-lg w-full h-full">
                    <source src={jitimplementation} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              <p className='underline text-gray-100 font-mono mt-4'>
                <a href="https://drive.google.com/file/d/11Xe8m2UI6YMo5-16Y1qrlS1Z1Xhrg0IA/view">View Presentation</a>
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}