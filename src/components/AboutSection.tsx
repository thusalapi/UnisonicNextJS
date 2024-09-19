import Image from "next/image";
import aboutImage from "../assets/images/pantry2.png";
import { FaLeaf, FaTools, FaPaintBrush } from "react-icons/fa";

const AboutSection = () => {
  const features = [
    {
      icon: FaLeaf,
      title: "Eco-Friendly",
      description: "Sustainable materials and practices",
    },
    {
      icon: FaTools,
      title: "Expert Craftsmanship",
      description: "Skilled artisans with years of experience",
    },
    {
      icon: FaPaintBrush,
      title: "Custom Designs",
      description: "Tailored solutions for your unique style",
    },
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-green-950 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div className="lg:w-1/2">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src={aboutImage}
                alt="About Us"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
                <div className="p-6 bg-gradient-to-t from-black to-transparent w-full">
                  <h2 className="text-3xl font-bold mb-2">Crafting Dreams</h2>
                  <p className="text-lg">Your vision, our expertise</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold mb-6 text-green-400">
              About Unisonic
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              At Unisonic, we breathe life into spaces through our dedication to
              personalized furniture solutions. Our passion lies in crafting
              pieces that not only reflect your unique style but also stand the
              test of time.
            </p>
            <p className="text-xl mb-10 leading-relaxed">
              From concept to creation, our team of experts collaborates with
              you to ensure every detail aligns with your vision. We believe in
              the power of innovative design, quality craftsmanship, and
              exceptional service to transform your living spaces into true
              reflections of your personality.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-green-900 bg-opacity-50 p-6 rounded-lg hover:bg-opacity-70 transition-colors duration-300"
                >
                  <feature.icon className="text-4xl text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
