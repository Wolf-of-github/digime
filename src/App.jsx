import React from 'react'
import backgroundImage from './assets/background.jpg'
import ProfileImage from './components/ProfileImage'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div
      className="min-h-screen bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <div className="px-4 sm:px-8 md:px-16 lg:px-40">
        {/* About Me */}
        <div id="about" className="flex flex-col pt-10">
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

        {/* Projects */}
        <section id="projects" className="mt-20">
          <div className="text-3xl font-bold text-gray-100 font-mono text-center">
            Projects
          </div>
          <div className="mt-8 text-gray-100 font-mono text-center">
            {/* Project cards or content will go here */}
            Coming soon...
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-20">
          <div className="text-3xl font-bold text-gray-100 font-mono text-center">
            Skills
          </div>
          <div className="mt-8 text-gray-100 font-mono text-center">
            {/* Skills list will go here */}
            Coming soon...
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mt-20">
          <div className="text-3xl font-bold text-gray-100 font-mono text-center">
            Education
          </div>
          <div className="mt-8 text-gray-100 font-mono text-center">
            {/* Education content will go here */}
            Coming soon...
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="mt-20 pb-20">
          <div className="text-3xl font-bold text-gray-100 font-mono text-center">
            Certifications
          </div>
          <div className="mt-8 text-gray-100 font-mono text-center">
            {/* Certifications content will go here */}
            Coming soon...
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
