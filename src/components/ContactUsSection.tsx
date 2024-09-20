"use client";

import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
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

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace this with your actual API endpoint
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 bg-gradient-to-b from-green-950 to-black text-white">
      <div className="container mx-auto px-4 pb-6">
        <h1 className="text-5xl font-bold text-center mb-12">Get in Touch</h1>

        <div className="flex flex-wrap -mx-4">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <form
              onSubmit={sendEmail}
              className="bg-white text-gray-800 p-8 rounded-lg shadow-xl"
            >
              <div className="mb-6">
                <label className="block text-lg mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows={5}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300"
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

          {/* Contact Info and Map */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-green-800 p-8 rounded-lg shadow-xl mb-8">
              <h2 className="text-3xl font-semibold mb-6">
                Contact Information
              </h2>
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

            <div className="w-full h-80">
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
    </div>
  );
};

export default ContactUs;
