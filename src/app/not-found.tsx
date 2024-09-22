import React from "react";
import Link from "next/link";
import { FaHome, FaSearch } from "react-icons/fa";

const Custom404: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-950 to-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="text-4xl font-semibold mb-8">Page Not Found</h2>
        <p className="text-xl mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="/"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center"
          >
            <FaHome className="mr-2" /> Go to Homepage
          </Link>
          <Link
            href="/search"
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center"
          >
            <FaSearch className="mr-2" /> Search Site
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
