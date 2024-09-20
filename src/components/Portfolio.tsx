"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/images/img3.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img20.png";
import img4 from "../assets/images/img21.png";

const projects = [
  {
    id: 1,
    title: "Modern Living Room",
    description:
      "A sleek and contemporary living space designed for urban comfort.",
    image: img1,
  },
  {
    id: 2,
    title: "Rustic Kitchen Renovation",
    description:
      "A complete kitchen makeover blending rustic charm with modern functionality.",
    image: img2,
  },
  {
    id: 3,
    title: "Minimalist Bedroom Suite",
    description:
      "A calming bedroom design focusing on simplicity and tranquility.",
    image: img3,
  },
  // Add more projects as needed
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-gray-800 text-center mb-16">
          Our Portfolio
        </h2>
        <div className="relative h-[600px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full h-full"
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-1/2 relative">
                  <Image
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center p-8">
                  <h3 className="text-3xl font-light text-gray-800 mb-4">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-gray-600 mb-8">
                    {projects[currentIndex].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300"
          >
            &#8594;
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-2 transition-all duration-300 ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
