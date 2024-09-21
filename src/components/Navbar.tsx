"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import { navLinks } from "../constants";
import Image from "next/image";
import logo from "../../public/logo.png";

interface NavbarProps {
  backgroundColor?: string;
  textColor?: string;
}

const Navbar: React.FC<NavbarProps> = ({ backgroundColor, textColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header
      className={`padding-x py-2 absolute z-10 w-full shadow-lg backdrop-blur-sm ${backgroundColor}`}
    >
      <div className="max-w-3/4 mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <Link href="/" className={`text-3xl font-extrabold ${textColor}`}>
            <Image src={logo} alt="Logo" width={150} />
          </Link>
          <div className="hidden md:flex flex-1 justify-center items-center gap-16">
            {navLinks.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`font-itim leading-normal text-lg hover:text-green-500 transition-colors duration-200 ${textColor} flex items-center`}
                    >
                      {item.label}
                      <ExpandMoreIcon className="ml-1" />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20">
                        <Link
                          href={item.href}
                          className={`block px-4 py-2 text-sm ${textColor} hover:bg-gray-100`}
                        >
                          View Categories
                        </Link>
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className={`block px-4 py-2 text-sm ${textColor} hover:bg-gray-100`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`font-itim leading-normal text-lg hover:text-green-500 transition-colors duration-200 ${textColor}`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
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
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`font-itim leading-normal text-lg hover:text-green-500 transition-colors duration-200 ${textColor} flex items-center`}
                  >
                    {item.label}
                    <ExpandMoreIcon className="ml-1" />
                  </button>
                  {activeDropdown === item.label && (
                    <ul className="mt-2 space-y-2">
                      <li>
                        <Link
                          href={item.href}
                          className={`block font-itim leading-normal text-sm hover:text-green-500 transition-colors duration-200 ${textColor}`}
                        >
                          View Categories
                        </Link>
                      </li>
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.label}>
                          <Link
                            href={subItem.href}
                            className={`block font-itim leading-normal text-sm hover:text-green-500 transition-colors duration-200 ${textColor}`}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`font-itim leading-normal text-lg hover:text-green-500 transition-colors duration-200 ${textColor}`}
                >
                  {item.label}
                </Link>
              )}
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
