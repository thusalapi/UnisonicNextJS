import Image from "next/image";
import aboutImage from "../assets/images/pantry2.png"; // Adjust the path as necessary

const AboutSection = () => {
  return (
    <div className="py-20 bg-green-950 text-white">
      <div className="container w-3/4 mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Side - Content */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-6">
            At Unisonic, we are dedicated to creating personalized furniture
            solutions that reflect your unique style and needs. With a
            commitment to quality and craftsmanship, our team of experts ensures
            that every piece of furniture we design is both functional and
            aesthetically pleasing. Our mission is to provide you with
            exceptional service and innovative designs that enhance your living
            spaces.
          </p>
          <p className="text-lg">
            From custom furniture design to space planning and consultation, we
            offer a range of services to help you bring your vision to life.
            Explore our offerings and discover how we can transform your home
            with beautifully crafted, bespoke furniture.
          </p>
        </div>
        {/* Right Side - Image */}
        <div className="md:w-1/2">
          <div className="relative w-full h-64 md:h-auto">
            <Image
              src={aboutImage}
              alt="About Us"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
