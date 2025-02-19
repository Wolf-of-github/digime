import React from 'react'
import backgroundImage from './assets/background.jpg'
import ProfileImage from './components/ProfileImage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Education from './components/Education'
import Certs from './components/Certs'
import WorkEx from './components/WorkEx'
import la from './assets/la.jpeg'
import CertGallery from './components/CertGallery'

const App = () => {
  return (
    <div
      className="min-h-screen bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
        <div className="mx-40">
          
          <Navbar />

          {/* About me */}
          <div className="flex flex-col pt-10">
            
            <div className="flex justify-center mt-16 bg-cover">
              <ProfileImage />
            </div>

            <div className="flex text-2xl font-bold text-gray-100 font-mono mt-16 text-justify">
              About me
            </div>

            <div className="flex text-xl justify-center text-gray-100 font-mono mt-8 text-justify">
            I hail from a family of entrepreneurs and business professionals in Mumbai, India,
            ever since I was a kid, I have always been inquisitive about how things worked,
            and my curiosity always led me to dismantle gadgets and electronics to figure out their inner workings.
            I believe that it is this inquisitiveness that prompted me to take up a career in the field of Science, 
            during my initial years learning science at Ruparel College I was extremely intrigued by the world of 
            transistors and capacitors, I spent inordinate amounts of time wiring and re-wiring circuit boards and 
            PCBs to make cool electronic gadgets. However my passion for electronics transformed into a passion 
            for software the day I learned that I could develop a cool and useful online gadget that any number of 
            people can use that too using just a few lines of code! This led me to pursue a bachelor's degree in 
            Computer Engineering at Mumbai University. During my bachelor's I primarily built software 
            applications for small-scale enterprises and institutions. Python and Java were my go-to language. 
            Having developed a strong foundation in DSA and Software Development (SDE) 
            I assumed that would define my career, but the arrival of Artificial Intelligence and 
            Large Language Models as powerful as the GPT, available to anyone who has an internet connection, 
            completely blew my mind, and my focused completely turned towards learning more about AI, this has 
            led me to my current conquest of pursuing a master's degree in Computer Science at 
            The University of Southern California. I'm grateful to have received this opportunity and I am 
            working towards making an impact in my community. In my free time, I deeply enjoy activities like 
            meditation, playing chess, and working out at the gymcclburrel@usc.edu. Please feel feel to browse through my 
            qualifications and achievements below.
            </div>

          </div>

          <Education/>

          <Certs/>

          <WorkEx/>

          <CertGallery/>

          <Footer />

        </div>
    </div>
  );
};

export default App;
