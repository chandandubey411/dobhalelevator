import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Contact Us
          </h1>
          <p className="mt-4 max-w-3xl text-gray-600">
            Get in touch with Dobhal Elevator for enquiries, quotations,
            or service support.
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="bg-[#F2F2F2] py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h2>

            <div className="flex items-center gap-4 mb-5">
              <FaPhoneAlt className="text-[#C9A24D]" />
              <p className="text-gray-700">+91 8130708265</p>
            </div>

            <div className="flex items-center gap-4 mb-5">
              <FaEnvelope className="text-[#C9A24D]" />
              <p className="text-gray-700">
                Sales.dobhalelevator@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#C9A24D]" />
              <p className="text-gray-700">
                India
              </p>
            </div>

            {/* Optional Map Placeholder */}
            <div className="mt-8 h-fit bg-gray-200 rounded-lg" >
              <img src="/images/logo.png" className="hover:h-auto"></img>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={onSubmit} className="space-y-4">
              <input
                type="hidden"
                name="subject"
                value="New Contact Enquiry - Dobhal Elevator"
              />

              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#C9A24D]"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#C9A24D]"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#C9A24D]"
              />

              <textarea
                name="message"
                required
                rows="4"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#C9A24D]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#C9A24D] text-white py-3 rounded-md font-medium hover:opacity-90 transition"
              >
                Send Message
              </button>

              {result && (
                <p className="text-sm text-gray-600 mt-2">{result}</p>
              )}
            </form>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
