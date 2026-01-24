import React from "react";
import data from "../data/data.json";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const { testimonials } = data;

  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Testimonials
          </h1>
          <p className="mt-4 max-w-3xl text-gray-600">
            Hear what our clients say about Dobhal Elevator’s quality,
            reliability, and professional service.
          </p>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-[#F2F2F2] py-16">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
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
                <p className="text-gray-600 text-sm mb-6">
                  “{item.message}”
                </p>

                {/* Client Info */}
                <div className="border-t pt-4">
                  <h4 className="font-medium text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {item.designation}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#C9A24D] py-16 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Trusted by Clients Across Industries
        </h2>
        <p className="mt-4">
          Join our growing list of satisfied customers.
        </p>
      </section>

    </div>
  );
};

export default Testimonials;
