import { FaGithub, FaLinkedin, FaPenNib } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md text-white w-full py-4 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center gap-4 sm:gap-0">
        {/* Left: Name */}
        <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto">
          <a href="/" className="text-2xl sm:text-3xl font-calibri font-bold hover:cursor-pointer">
            Ishaan Apte
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-sm sm:text-base justify-center sm:justify-end w-full sm:w-auto">
          <a
            href="https://github.com/Wolf-of-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 flex items-center gap-1"
          >
            <FaGithub /> <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ishaan-apte-839619212/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 flex items-center gap-1"
          >
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
          <a
            href="#/blogs"
            className="hover:text-gray-300 flex items-center gap-1 font-bold"
          >
            <FaPenNib /> <span>Blog</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
