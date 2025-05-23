import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import leetcode from '../assets/lc1.png';
import codeforces from '../assets/cf.svg';

const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 bg-transparent border-t border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-4">
            <a href="mailto:aayush4jha@gmail.com" aria-label="Email">
              <FaEnvelope className="text-red-500 text-2xl hover:text-red-400 transition" />
            </a>
            <a href="https://www.linkedin.com/in/aayush4jha/" aria-label="LinkedIn">
              <FaLinkedin className="text-blue-700 text-2xl hover:text-blue-600 transition" />
            </a>
            <a href="https://github.com/aayush4jha" aria-label="GitHub">
              <FaGithub className="text-white text-2xl hover:text-gray-200 transition" />
            </a>
            <a href="https://leetcode.com/aayush4jha" aria-label="LeetCode">
              <img src={leetcode} alt="LeetCode" className="h-6 w-6 hover:opacity-75 transition" />
            </a>
            <a href="https://codeforces.com/profile/aayush4jha" aria-label="Codeforces">
              <img src={codeforces} alt="Codeforces" className="h-6 w-6 hover:opacity-75 transition" />
            </a>
          </div>
          <p className="text-gray-200 font-light text-sm sm:text-base text-center">
            &copy; {new Date().getFullYear()} Aayush Jha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;