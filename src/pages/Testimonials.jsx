import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Mr. Manish Tiwari",
    message:
      "Their AMC program is worth every rupee. Regular visits, quick response, and round-the-clock support ensure our elevators never face downtime.",
    rating: 5,
    bg: "bg-blue-100",
  },
  {
    name: "Mr. K Mishra",
    message:
      "Dobhal Elevators is a brand you can trust for quality and support.",
    rating: 5,
    bg: "bg-red-100",
  },
  {
    name: "Ms. Sakshi Sharma",
    message:
      "The team at Dobhal Elevators handled our hospital elevator installation with complete professionalism. Their solutions are safe, fast, and perfect for critical environments.",
    rating: 5,
    bg: "bg-yellow-100",
  },
  {
    name: "Mr. Arun Bharadwaj",
    message:
      "We’ve been using Dobhal Elevators’ AMC services for over two years now. Their 24/7 support and regular maintenance visits have kept our elevators running without a single breakdown.",
    rating: 5,
    bg: "bg-gray-100",
  },
  {
    name: "Mrs. Madhumita",
    message:
      "Dobhal Elevators installed passenger lifts in our residential project. The lifts are smooth, quiet, and reliable – our residents are extremely satisfied.",
    rating: 5,
    bg: "bg-purple-100",
  },
  {
    name: "Ms. Gunjan Bansal",
    message:
      "Dobhal Elevators combines technical expertise with great customer service. They tailored solutions to fit our unique requirements and delivered beyond expectations.",
    rating: 5,
    bg: "bg-orange-100",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Building Trust Together
          </h1>
          <p className="mt-4 max-w-4xl text-gray-600">
            Real experiences from clients who trust Dobhal Elevator for quality,
            safety, and long-term reliability.
          </p>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-[#F2F2F2] py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} p-6 rounded-2xl shadow-sm hover:shadow-md transition relative`}
            >
              {/* Quote Icon */}
              <span className="absolute -top-4 -left-4 bg-[#C9A24D] text-white w-10 h-10 flex items-center justify-center rounded-full text-xl">
                “
              </span>

              {/* Rating */}
              <div className="flex mb-3">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-[#C9A24D] mr-1"
                  />
                ))}
              </div>

              {/* Message */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {item.message}
              </p>

              {/* Name */}
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-800">
                  {item.name}
                </h4>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#C9A24D] py-16 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Trusted by 600+ Clients Since 2014
        </h2>
        <p className="mt-4">
          Experience the Dobhal Elevator difference.
        </p>
      </section>

    </div>
  );
};

export default Testimonials;
