import React from 'react';
import { FaEye } from 'react-icons/fa'; // Import Eye icon from React Icons (FA)

const Footer = () => {
  return (
    <footer className="text-white py-6 px-6 w-full flex-shrink-0 mt-auto">
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <p className="text-lg">©2025 Ishaan Apte | Grateful for the journey. Thank you for visiting!</p>
        <div className="text-lg flex items-center gap-2">
          <FaEye />
          <span>1,234</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;