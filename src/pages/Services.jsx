import React from "react";
import data from "../data/data.json";
import {
  FaTools,
  FaWrench,
  FaSyncAlt,
  FaBolt,
  FaShieldAlt,
  FaCogs,
  FaRegCheckCircle,
  FaLeaf
} from "react-icons/fa";

const Services = () => {
  const { services } = data;

  // Icon mapping based on service title
  const iconMap = {
    "Elevator Installation": <FaTools />,
    "Maintenance & AMC": <FaWrench />,
    "Modernization": <FaSyncAlt />,
    "Elevator Repair & Breakdown Support": <FaBolt />,
    "Safety Inspection & Audits": <FaShieldAlt />,
    "Custom Elevator Solutions": <FaCogs />,
    "Control Panel & System Upgrades": <FaRegCheckCircle />,
    "Energy-Efficient Solutions": <FaLeaf />,
  };

  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="mb-14 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Our Services
          </h1>
          <p className="mt-4 text-gray-600">
            We provide complete elevator solutions covering installation,
            maintenance, modernization, and long-term operational reliability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-[#F2F2F2] p-8 rounded-xl transition hover:shadow-lg hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-full bg-white text-[#C9A24D] text-2xl group-hover:scale-110 transition">
                {iconMap[service.title]}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
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
