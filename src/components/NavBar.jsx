import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "portfolio",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between flex-row-reverse md:justify-center items-center w-full h-20 px-4 text-white bg-gradient-to-r from-slate-400 via-black to-black fixed">
      <ul className="hidden md:flex">
        <li className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200">
          <NavLink to="">Home</NavLink>
        </li>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
          >
            <NavLink to={link}>{link}</NavLink>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="md:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <NavLink onClick={() => setNav(!nav)} to={link}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      {/*  <li className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"></li>
        <li className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200">
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200">
          <NavLink to="/experience">Experience</NavLink>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      {nav && (
        <ul className="md:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <NavLink onClick={() => setNav(!nav)} to="">
              Home
            </NavLink>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <NavLink onClick={() => setNav(!nav)} to="/about">
              About
            </NavLink>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <NavLink onClick={() => setNav(!nav)} to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <NavLink onClick={() => setNav(!nav)} to="/experience">
              Experience
            </NavLink>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <NavLink onClick={() => setNav(!nav)} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      )} */}
    </div>
  );
};

export default NavBar;
