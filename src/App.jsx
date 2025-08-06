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
import AboutMe from './components/AboutMe'

const App = () => {
  return (
    
    <div className="flex flex-col min-h-screen bg-black">

      <Navbar />

      <div className="px-4 sm:px-8 md:px-16 lg:px-40">

        <section className="mt-10">
          <AboutMe />
        </section>

        <section id="education" className="">
            <Education />
        </section>

        <section className="">
          <WorkExperience />
        </section>

        <section className="">
          <Projects />
        </section>

        <section id="certifications" className=" pb-8">
          <CertGallery />
        </section>

        <section id="skills" className="">
          <Skills />
        </section>

        <section id="contact" className="mt-24">
          <Contact />
        </section>

      </div>
      <Footer />
    </div>
  )
}

export default App
