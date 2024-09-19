"use client";

import React from "react";
import Image from "next/image";
import customDesignIcon from "../assets/images/custom-design.png";
import readyMadeIcon from "../assets/images/ready-made.png";
import spacePlanningIcon from "../assets/images/space-planning.png";

const services = [
  {
    icon: customDesignIcon,
    title: "Custom Furniture Design",
    description:
      "Your vision, handcrafted. Bespoke furniture tailored to your style & space.",
  },
  {
    icon: readyMadeIcon,
    title: "Ready-made with Customization",
    description:
      "Stylish designs ready to personalize. Choose size, materials & more.",
  },
  {
    icon: spacePlanningIcon,
    title: "Space Planning & Consultation",
    description:
      "Expert advice to maximize functionality & style. Create your dream layout.",
  },
];

const ServicesSection = () => {
  return (
    <div className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-black mb-8">
          Our Services
        </h1>
        <p className="text-lg text-center text-black mb-12">
          Experience the Unisonic difference: Personalized furniture solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-lg rounded-lg p-6 w-full sm:w-1/2 md:w-1/3 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="mb-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={128}
                  height={128}
                />
              </div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                {service.title}
              </h2>
              <p className="text-black">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
