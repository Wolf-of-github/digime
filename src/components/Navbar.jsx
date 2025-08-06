import React, { useState, useEffect } from 'react';
import { Github, Linkedin, PenTool } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 text-white w-full py-4 px-6 sm:px-12 transition-all duration-300 ${
      isScrolled ? 'bg-black/40 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center gap-4 sm:gap-0">
        
        {/* Left: Name */}
        <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto">
          <a href="/" className="text-2xl sm:text-3xl font-mono font-bold hover:cursor-pointer group transition-all duration-300">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-400 transition-all duration-300">
              Ishaan Apte
            </span>
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-6 text-sm sm:text-base justify-center sm:justify-end w-full sm:w-auto">
          <a
            href="https://github.com/Wolf-of-github"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/10"
          >
            <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-mono">GitHub</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/ishaan-apte-839619212/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/10"
          >
            <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-mono">LinkedIn</span>
          </a>
          
          <a
            href="#/blogs"
            className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/10 font-bold"
          >
            <PenTool className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-mono">Blog</span>
          </a>
        </div>
      </div>
    </nav>
  );
}