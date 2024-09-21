"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b bg-gray-200 text-white">
      <Navbar textColor="text-black" />
      <div className="container mx-auto px-4 py-12 pb-36">
        <h1 className="text-5xl font-bold text-center mb-12 text-black mt-44">
          Contact Us
        </h1>

        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          Ready to bring your furniture dreams to life?
        </h2>

        <div className="bg-gray-300 p-8 rounded-lg shadow-xl mb-24">
          <p className="text-xl text-black text-center">
            Whether you have a specific vision in mind or need expert guidance,
            we&apos;re here to help. Reach out to our friendly team through any
            of the options below, and let&apos;s spark a conversation about
            creating furniture that truly reflects your story.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <div className="bg-green-800 p-8 rounded-lg shadow-xl mb-8">
              <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <p className="flex items-center">
                  <FaEnvelope className="mr-3 text-xl" />
                  info@unisonic.lk
                </p>
                <p className="flex items-center">
                  <FaPhone className="mr-3 text-xl" />
                  +94 777 878 663
                </p>
                <p className="flex items-center">
                  <FaMapMarkerAlt className="mr-3 text-xl" />
                  173A, Siddamulla, Piliyandala, Sri Lanka.
                </p>
                <p className="flex items-center">
                  <FaMapMarkerAlt className="mr-3 text-xl" />
                  246, Negombo Road, Negombo, Kandana Sri Lanka.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form className="bg-gray-300 text-gray-800 p-8 rounded-lg shadow-xl">
              <div className="mb-6">
                <label className="block text-lg mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 bg-gray-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-6">
                <label className="block text-lg mb-2 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 bg-gray-5 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-6">
                <label className="block text-lg mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 bg-gray-5 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows={5}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-800 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-900 transition duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <p className="mt-4 text-green-600">
                  Message sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="mt-4 text-red-600">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* Map */}
          <div className="lg:w-2/3">
            <div className="w-full h-[850px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63385.41981197277!2d79.91916014083745!3d6.819769478624638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae251da45633345%3A0x866a9a8093c94550!2sUnisonic%20Interior%20Solutions%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1706104639300!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
