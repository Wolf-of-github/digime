import React from 'react'
import ProfileImage from './components/ProfileImage'
import Navbar from './components/Navbar'
import Education from './components/Education'
import CompetitiveExams from './components/CompetitiveExams'
import Projects from './components/Projects';
import CertGallery from './components/CertGallery';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Endorsements from './components/Endorsements';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      
      <Navbar />
      
      <div id="about" className="flex flex-col pt-10 bg-gradient-to-b from-gray-800/60 to-transparent rounded-xl px-6 py-12">
          <div className="flex justify-center mt-16 bg-cover">
            <ProfileImage />
          </div>

          <div className="text-3xl font-bold text-gray-100 font-mono mt-16 text-center">
            About Me
          </div>

          <div className="text-lg sm:text-xl text-gray-100 font-mono mt-8 text-justify leading-relaxed">
          Hi! I'm a graduate student focused on building reliable, scalable, and efficient AI-powered applications. 
          My work centers around fine-tuning large language models, implementing retrieval-augmented generation (RAG), 
          and leveraging cloud computing, particularly AWS to streamline AI/ML development. 
          I'm especially interested in distributed machine learning using Kubernetes, with the goal of accelerating model training and optimizing resource efficiency.
          </div>
      </div>
      
      <div className="px-4 sm:px-8 md:px-16 lg:px-40">

        {/* Education */}
        
          <div id = "education" className="mt-8 text-gray-100 font-mono text-center">
            <Education />
          </div>
        
        <section id="certifications" className="mt-20 pb-8">
          <WorkExperience />
        </section>

        {/* Projects */}
        <section>
        <Projects />
        </section>

        {/* Certifications */}
        <section id="certifications" className="mt-20 pb-8">
          <CertGallery />
        </section>

        {/* Skills */}
        <section id="skills" className="mt-20">
          <Skills />
        </section>

        {/* Contact */}
        <section id="contact" className="mt-24">
          <Contact />
        </section>

      </div>
      
      <Footer />
    </div>
  )
}

export default App
