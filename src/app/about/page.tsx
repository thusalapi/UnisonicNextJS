import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="bg-gray-200">
      <Navbar textColor="text-black" />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 mt-36">
          About Unisonic
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/about-image.jpg"
              alt="Unisonic workshop"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4">
              Founded in 1995, Unisonic has been at the forefront of innovative
              furniture design and manufacturing. Our journey began with a
              passion for creating unique, high-quality pieces that blend
              functionality with aesthetic appeal.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we've grown from a small workshop to a leading
              name in the furniture industry, never losing sight of our
              commitment to craftsmanship and customer satisfaction.
            </p>
            <h2 className="text-2xl font-semibold text-gray-700 my-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              At Unisonic, our mission is to transform living spaces with
              thoughtfully designed, meticulously crafted furniture. We strive
              to combine traditional techniques with modern innovation, creating
              pieces that are not just functional, but also works of art.
            </p>
          </div>
        </div>

        <div className="mt-20 pb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description:
                  "We never compromise on the quality of our materials or craftsmanship.",
              },
              {
                title: "Innovation",
                description:
                  "We constantly push the boundaries of design and functionality.",
              },
              {
                title: "Sustainability",
                description:
                  "We're committed to environmentally responsible practices in our production.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
