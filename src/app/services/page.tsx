import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { FaCouch, FaPencilRuler, FaHome, FaTools } from "react-icons/fa";

const services = [
  {
    icon: FaCouch,
    title: "Custom Furniture Design",
    description:
      "We create bespoke furniture pieces tailored to your specific needs and style preferences.",
  },
  {
    icon: FaPencilRuler,
    title: "Interior Design Consultation",
    description:
      "Our expert designers help you create cohesive, beautiful spaces that reflect your personality.",
  },
  {
    icon: FaHome,
    title: "Space Planning",
    description:
      "We optimize your living or working areas for maximum functionality and aesthetic appeal.",
  },
  {
    icon: FaTools,
    title: "Furniture Restoration",
    description:
      "Breathe new life into your cherished pieces with our professional restoration services.",
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <service.icon className="text-4xl text-green-600 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Our Process
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {["Consultation", "Design", "Creation", "Delivery"].map(
              (step, index) => (
                <div key={index} className="flex items-center mb-4 md:mb-0">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 font-medium">{step}</span>
                </div>
              )
            )}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 mb-8">
            Contact us today for a free consultation and quote.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
