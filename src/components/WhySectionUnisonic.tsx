import React from "react";
import Image from "next/image";
import slide1 from "../assets/images/pantry2.png";
import { FaCheckCircle } from "react-icons/fa";

const WhySectionUnisonic = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-green-950 to-black text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12 animate-fade-in-down">
          Why Unisonic?
        </h1>
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <Image
                src={slide1}
                alt="Why Unisonic"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl animate-fade-in-left"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-green-900 p-4 rounded-lg shadow-xl animate-fade-in-up">
                <p className="font-semibold text-lg">Crafting Excellence</p>
                <p>Since 1995</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl font-semibold mb-6 animate-fade-in-right">
              Elevate Your Living Space
            </h2>
            <p className="text-lg mb-8 animate-fade-in-right delay-100">
              At Unisonic, we don&apos;t just create furniture; we craft
              experiences. Our commitment to quality, innovation, and customer
              satisfaction sets us apart in the world of interior design.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Bespoke Designs: Tailored to your unique style and space",
                "Premium Materials: Ensuring durability and timeless elegance",
                "Master Craftsmanship: Bringing visions to life with precision",
                "Unparalleled Service: Dedicated support from concept to creation",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start animate-fade-in-right"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <FaCheckCircle className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg font-semibold animate-fade-in-right delay-500">
              Choose Unisonic for furniture that transcends the ordinary – where
              every piece tells your unique story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySectionUnisonic;
