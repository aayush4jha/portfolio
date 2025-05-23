import logo from "../assets/logo.png";
import leetcode from "../assets/lc1.png";
import codeforces from "../assets/cf.svg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-shrink-0 items-center">
        <a href="/">
          <img
            src={logo}
            alt="logo"
            className="h-10 w-auto hover:opacity-80 transition-opacity duration-200"
          />
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <a href="mailto:aayush4jha@gmail.com">
          <FaEnvelope className="text-red-500 text-2xl hover:text-red-400" />
        </a>
        <a href="https://www.linkedin.com/in/aayush4jha/">
          <FaLinkedin className="text-blue-700 text-2xl hover:text-blue-600" />
        </a>
        <a href="https://github.com/aayush4jha">
          <FaGithub className="text-white text-2xl hover:text-gray-200" />
        </a>
        <a href="https://leetcode.com/aayush4jha">
          <img
            src={leetcode}
            alt="LeetCode"
            className="h-6 w-6 hover:opacity-75"
          />
        </a>
        <a href="https://codeforces.com/profile/aayush4jha">
          <img
            src={codeforces}
            alt="Codeforces"
            className="h-6 w-6 hover:opacity-75"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
