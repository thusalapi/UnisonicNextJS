"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { navLinks } from "../constants";

interface NavbarProps {
  backgroundColor?: string; // Tailwind background color class
  textColor?: string; // Tailwind text color class
}

const Navbar: React.FC<NavbarProps> = ({ backgroundColor, textColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`padding-x py-2 absolute z-10 w-full shadow-lg backdrop-blur-sm ${backgroundColor}`}
    >
      <div className="max-w-3/4 mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <Link href="/" className={`text-3xl font-extrabold ${textColor}`}>
            Unisonic
          </Link>
          <div className="hidden md:flex flex-1 justify-center items-center gap-16">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`font-itim leading-normal text-lg hover:text-green-500 transition-colors duration-200 ${textColor}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center"
          >
            <MenuIcon className={textColor} />
          </button>
        </nav>
      </div>
      {isOpen && (
        <ul
          className={`absolute top-full right-0 bg-green-900 shadow-md flex flex-col items-center gap-4 py-4 w-3/4 max-w-xs md:hidden`}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`font-itim leading-normal text-lg hover:text-green-500 transition-colors duration-200 ${textColor}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <button onClick={toggleMenu} className="absolute top-2 right-2">
              <CloseIcon className={textColor} />
            </button>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
