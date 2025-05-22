import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="h-10 w-auto" />
      </div>
      <div className="flex items-center space-x-4">
        <a href="mailto:aayush4jha@gmail.com">
          <FaEnvelope className="text-white text-2xl hover:text-gray-300" />
        </a>
        <a href="https://www.linkedin.com/in/aayush4jha/">
          <FaLinkedin className="text-white text-2xl hover:text-gray-300" />
        </a>
        <a href="https://github.com/aayush4jha">
          <FaGithub className="text-white text-2xl hover:text-gray-300" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;