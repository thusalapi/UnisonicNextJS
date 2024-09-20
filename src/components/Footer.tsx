import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Unisonic</h3>
            <p className="mb-4">
              Crafting bespoke furniture solutions since 1995. Your vision, our
              expertise.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-green-400 transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-green-400 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-green-400 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-green-400 transition-colors"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-green-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-green-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-green-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-green-400 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-green-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/custom-furniture"
                  className="hover:text-green-400 transition-colors"
                >
                  Custom Furniture
                </Link>
              </li>
              <li>
                <Link
                  href="/services/interior-design"
                  className="hover:text-green-400 transition-colors"
                >
                  Interior Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/space-planning"
                  className="hover:text-green-400 transition-colors"
                >
                  Space Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/restoration"
                  className="hover:text-green-400 transition-colors"
                >
                  Furniture Restoration
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">123 Furniture Street</p>
            <p className="mb-2">Colombo, Sri Lanka</p>
            <p className="mb-2">Phone: +94 123 456 789</p>
            <p>Email: info@unisonic.com</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-800 mt-8 pt-8 text-center">
          <p>
            &copy; {currentYear} Unisonic Interior Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
