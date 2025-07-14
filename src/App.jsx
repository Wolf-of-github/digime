import React from 'react'
import backgroundImage from './assets/background.jpg'
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
    <div
      className="flex flex-col min-h-screen bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <div className="px-4 sm:px-8 md:px-16 lg:px-40">
        {/* About Me */}
        <div id="about" className="flex flex-col pt-10 bg-gradient-to-b from-gray-800/60 to-transparent rounded-xl px-6 py-12">
          <div className="flex justify-center mt-16 bg-cover">
            <ProfileImage />
          </div>

          <div className="text-3xl font-bold text-gray-100 font-mono mt-16 text-center">
            About Me
          </div>

          <div className="text-lg sm:text-xl text-gray-100 font-mono mt-8 text-justify leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>

        {/* Education */}
        <section id="education" className="mt-20">
          <div className="text-3xl font-bold text-gray-100 font-mono text-center">
            Education
          </div>
          <div className="mt-8 text-gray-100 font-mono text-center">
            <Education />
          </div>
        </section>

        {/* Competitive Exams */}
        <CompetitiveExams />

        {/* Projects */}
        <Projects />

        {/* Work Experience */}
        <WorkExperience />

        {/* Certifications */}
        <section id="certifications" className="mt-20 pb-8">
          <CertGallery />
        </section>

        {/* Skills */}
        <section id="skills" className="mt-20">
          <Skills />
        </section>

        {/* Endorsements */}
        <Endorsements />

        {/* Contact */}
        <section id="contact" className="mt-20">
          <Contact />
        </section>

      </div>
      <Footer />
    </div>
  )
}

export default App
