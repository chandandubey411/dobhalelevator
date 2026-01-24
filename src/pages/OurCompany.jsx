import React from "react";
import {
  FaBuilding,
  FaBullseye,
  FaEye,
  FaAward,
  FaTools,
  FaShieldAlt,
} from "react-icons/fa";

const OurCompany = () => {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Our Company
          </h1>
          <p className="mt-4 max-w-3xl text-gray-600">
            Dobhal Elevator is committed to delivering reliable, safe, and
            innovative vertical transportation solutions for residential,
            commercial, and industrial buildings.
          </p>
        </div>
      </section>

      {/* ================= ABOUT COMPANY ================= */}
      <section className="bg-[#F2F2F2] py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4">
              Dobhal Elevator is a professionally managed company specializing
              in the design, installation, maintenance, and modernization of
              elevators. We focus on quality engineering, advanced technology,
              and customer satisfaction.
            </p>
            <p className="text-gray-600">
              Our solutions are designed to meet international safety standards
              while providing smooth, energy-efficient, and durable performance.
            </p>
          </div>

          <div className="h-96 bg-gray-300 rounded-lg overflow-hidden">
            <img src="/images/logo.png" className=""></img>
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-[#F2F2F2] p-8 rounded-lg">
            <FaEye size={32} className="text-[#C9A24D] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To become a trusted leader in the elevator industry by delivering
              innovative, safe, and reliable vertical transportation solutions.
            </p>
          </div>

          <div className="bg-[#F2F2F2] p-8 rounded-lg">
            <FaBullseye size={32} className="text-[#C9A24D] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To provide high-quality elevators and services through advanced
              engineering, skilled professionals, and customer-focused
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="bg-[#F2F2F2] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Quality Engineering",
                icon: <FaTools />,
              },
              {
                title: "Safety First",
                icon: <FaShieldAlt />,
              },
              {
                title: "Customer Commitment",
                icon: <FaAward />,
              },
              {
                title: "Reliable Support",
                icon: <FaBuilding />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition"
              >
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#C9A24D]/20 text-[#C9A24D] text-2xl">
                  {item.icon}
                </div>
                <h4 className="font-medium text-gray-800">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUALITY & SAFETY ================= */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Quality & Safety Standards
            </h2>
            <p className="text-gray-600 mb-4">
              We follow strict quality control processes and comply with
              national and international safety standards to ensure maximum
              reliability and passenger safety.
            </p>
            <p className="text-gray-600">
              Every elevator is tested thoroughly to deliver smooth operation,
              long service life, and consistent performance.
            </p>
          </div>

          <div className="h-72 bg-gray-300 rounded-lg overflow-hidden" >
            <img src="/images/service1.png"></img>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#C9A24D] py-16 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Building Trust Through Technology
        </h2>
        <p className="mt-4">
          Partner with Dobhal Elevator for safe and reliable vertical mobility
          solutions.
        </p>
      </section>

    </div>
  );
};

export default OurCompany;
