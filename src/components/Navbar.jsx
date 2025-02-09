import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Navbar() {

  return (
    <nav className="fixed text-white mt-8 left-40 right-40">
      <div className="flex justify-between items-center">
        <span href="#" className="text-3xl font-mono font-bold hover:cursor-pointer">Ishaan Apte</span>

        <div className="flex space-x-10 text-lg">
          <a href="https://github.com/Ishaanapte0108" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 flex items-center space-x-2">
            <FaGithub /> <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/ishaan-apte-839619212/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 flex items-center space-x-2">
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
          <a href="mailto:iapte@usc.edu" className="hover:text-gray-400 flex items-center space-x-2">
            <FaEnvelope /> <span>iapte@usc.edu</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

