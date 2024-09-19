"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { navLinks } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="padding-x py-2 absolute z-10 w-full shadow-lg">
      <div className="max-w-3/4 mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-extrabold">
            Unisonic
          </Link>
          <div className="hidden md:flex flex-1 justify-center items-center gap-16">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-itim leading-normal text-lg hover:text-blue-400 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center"
          >
            <MenuIcon className="text-white" />
          </button>
        </nav>
      </div>
      {isOpen && (
        <ul className="absolute top-full right-0 bg-white shadow-md flex flex-col items-center gap-4 py-4 w-3/4 max-w-xs md:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="font-itim leading-normal text-lg text-black hover:text-blue-400 transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <button onClick={toggleMenu} className="absolute top-2 right-2">
              <CloseIcon className="text-black h-6 w-6" />
            </button>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
