import React from 'react';
import { FaEye } from 'react-icons/fa'; // Import Eye icon from React Icons (FA)

const Footer = () => {
  return (
    <footer className=" text-white py-4 flex justify-between items-center px-8">
      <p className="text-lg">©2025 Ishaan Apte | Grateful for the journey. Thank you for visiting!</p>
      <div className="text-lg flex items-center gap-2">
        <FaEye /> {/* Eye Icon */}
        <span>1,234</span>
      </div>
    </footer>
  );
};

export default Footer;