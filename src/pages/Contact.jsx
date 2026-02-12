import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully!");
      event.target.reset();
    } else {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-gray-800"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-3xl text-gray-600 text-xl"
          >
            Get in touch with Dobhal Elevator for enquiries, quotations,
            or service support.
          </motion.p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="bg-[#F2F2F2] py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">
              Contact Information
            </h2>

            <div className="space-y-8">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-6"
              >
                <div className="w-12 h-12 bg-[#C9A24D]/10 rounded-full flex items-center justify-center text-[#C9A24D] text-xl">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Phone</h4>
                  <p className="text-gray-600">+91 8130708265</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-6"
              >
                <div className="w-12 h-12 bg-[#C9A24D]/10 rounded-full flex items-center justify-center text-[#C9A24D] text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600">Sales.dobhalelevator@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-6"
              >
                <div className="w-12 h-12 bg-[#C9A24D]/10 rounded-full flex items-center justify-center text-[#C9A24D] text-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Location</h4>
                  <p className="text-gray-600">India</p>
                </div>
              </motion.div>
            </div>

            {/* Optional Map Placeholder */}
            <div className="mt-10 h-64 bg-gray-50 rounded-xl overflow-hidden border border-gray-100 flex items-center justify-center">
              <img src="/images/logo.png" className="max-h-full max-w-full hover:scale-105 transition-transform duration-500" alt="Logo"></img>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">
              Send Us a Message
            </h2>

            <form onSubmit={onSubmit} className="space-y-6">
              <input
                type="hidden"
                name="subject"
                value="New Contact Enquiry - Dobhal Elevator"
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition-all"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#C9A24D] text-white py-4 rounded-lg font-bold hover:bg-[#b08d42] transition-colors shadow-lg"
              >
                Send Message
              </motion.button>

              {result && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`text-center mt-4 font-medium ${result.includes("success") ? "text-green-600" : "text-red-600"}`}
                >
                  {result}
                </motion.p>
              )}
            </form>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
