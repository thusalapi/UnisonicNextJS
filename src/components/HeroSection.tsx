"use client";

import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

import slide1 from "../assets/images/hero-bg-1.png";
import slide2 from "../assets/images/pantry3.png";
import slide3 from "../assets/images/pantry2.png";

const slides = [
  {
    image: slide1,
    title: "Home",
    description: "Style meets comfort at Home & Living.",
  },
  {
    image: slide2,
    title: "Office",
    description: "Redefine your environment stylishly.",
  },
  {
    image: slide3,
    title: "Custom Made",
    description: "Shape your space with bespoke designs",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textAnimation, setTextAnimation] = useState(false);

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTextAnimation(true);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTextAnimation(true);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 7000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (textAnimation) {
      const timer = setTimeout(() => setTextAnimation(false), 500);
      return () => clearTimeout(timer);
    }
  }, [textAnimation]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
              <div className="text-center text-white px-6 md:px-12 max-w-4xl">
                <h1
                  className={`text-8xl md:text-6xl sm:text-lg font-extrabold mb-4 transition-transform duration-500 ${
                    textAnimation
                      ? "translate-x-full opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                >
                  {slide.title}
                </h1>
                <p
                  className={`text-2xl md:text-2xl mb-8 transition-transform duration-500 delay-100 ${
                    textAnimation
                      ? "translate-x-full opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                >
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 md:flex hidden items-center">
        <button
          onClick={goToPreviousSlide}
          className="text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-r-full p-2 ml-4"
        >
          <FaArrowLeft className="h-8 w-8" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 md:flex hidden items-center">
        <button
          onClick={goToNextSlide}
          className="text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-l-full p-2 mr-4"
        >
          <FaArrowRight className="h-8 w-8" />
        </button>
      </div>
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
              index === currentSlide
                ? "bg-green-600"
                : "bg-white bg-opacity-50 hover:bg-opacity-100"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
