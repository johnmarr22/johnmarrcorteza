import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link component for routing

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, name: 'Home', to: '/' }, // Home page links to '/'
    { id: 2, name: 'About', to: '/about' },
    { id: 3, name: 'Portfolio', to: '/portfolio' },
    { id: 4, name: 'Experience', to: '/experience' },
    { id: 5, name: 'Contact', to: '/contact' },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">John Marr</h1>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex">
        {links.map(({ id, name, to }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-extrabold text-gray-400 hover:scale-105 duration-200"
          >
            <Link to={to}>{name}</Link> {/* Use Link component to navigate */}
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Nav */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black md:hidden">
          {links.map(({ id, name, to }) => (
            <li
              key={id}
              className="px-4 py-6 cursor-pointer capitalize text-4xl text-white"
            >
              <Link to={to} onClick={() => setNav(false)}>{name}</Link> {/* Close menu on click */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
