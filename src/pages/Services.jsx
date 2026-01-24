import React from "react";
import data from "../data/data.json";
import { FaTools, FaWrench, FaSyncAlt } from "react-icons/fa";

const Services = () => {
  const { services } = data;

  const icons = [
    <FaTools size={28} />,
    <FaWrench size={28} />,
    <FaSyncAlt size={28} />,
  ];

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-10">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-[#F2F2F2] p-8 rounded-lg hover:shadow-md transition"
            >
              <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-full bg-white text-[#C9A24D]">
                {icons[index]}
              </div>

              <h3 className="text-lg font-medium text-gray-800">
                {service.title}
              </h3>

              <p className="text-sm text-gray-600 mt-3">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;
