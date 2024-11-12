import React, { useState } from 'react';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  // State to toggle the visibility of social links in mobile view
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for showing/hiding social links on mobile view
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Mobile View: Swipe Button */}
      <div className="lg:hidden fixed bottom-4 left-4 z-50">
        <button
          onClick={toggleMenu}
          className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition duration-300"
        >
          <span className="text-xl">+</span> {/* "+" symbol to indicate menu */}
        </button>
      </div>

      {/* Mobile View: Social Media Links (Visible when "isOpen" is true) */}
      {isOpen && (
        <div className="lg:hidden fixed bottom-16 left-4 z-40 flex flex-col items-center bg-gray-800 p-4 rounded-md space-y-4">
          <a
            href="https://www.instagram.com/nighttguyy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-gray-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/makoy.villafuerte/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-gray-400"
          >
            <FaFacebook />
          </a>
          <a
            href="mailto:johnmarrcorteza@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-gray-400"
          >
            <HiOutlineMail />
          </a>
        </div>
      )}

      {/* Desktop View: Fixed vertical social links */}
      <div className="hidden lg:flex flex-col fixed top-[30%] left-0 z-10">
        <ul>
          <li className="flex justify-between items-center w-35 h-10 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-600">
            <a
              href="https://www.instagram.com/nighttguyy/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full text-white font-extrabold"
            >
              Instagram <FaInstagram size={40} className="mr-4" />
            </a>
          </li>
          <li className="flex justify-between items-center w-35 h-10 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-blue-600">
            <a
              href="https://www.facebook.com/makoy.villafuerte/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full text-white"
            >
              Facebook <FaFacebook size={40} className="mr-4" />
            </a>
          </li>
          <li className="flex justify-between items-center w-35 h-10 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-600">
            <a
              href="mailto:johnmarrcorteza@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full text-white"
            >
              Email <HiOutlineMail size={40} className="mr-4" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialLinks;
