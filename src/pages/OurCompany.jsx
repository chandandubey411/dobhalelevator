import React from "react";
import {
  FaBuilding,
  FaBullseye,
  FaEye,
  FaAward,
  FaTools,
  FaShieldAlt,
  FaUsers,
  FaIndustry,
  FaBriefcase,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const OurCompany = () => {
  return (
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Our Company
          </h1>
          <p className="mt-4 max-w-4xl text-gray-600">
            Serving the elevator industry since <strong>2014</strong>, Dobhal
            Elevator delivers reliable, safe, and innovative vertical
            transportation solutions backed by strong engineering expertise and
            in-house manufacturing.
          </p>
        </div>
      </section>

      {/* ================= ABOUT COMPANY ================= */}
      <section className="bg-[#F2F2F2] py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4">
              Dobhal Elevator has been working in the elevator service industry
              since 2014, offering end-to-end solutions including design,
              manufacturing, installation, maintenance, and modernization of
              elevators.
            </p>
            <p className="text-gray-600 mb-4">
              With our <strong>own manufacturing unit</strong> and a highly
              skilled technical team, we ensure strict quality control,
              customized solutions, and reliable long-term performance.
            </p>
            <p className="text-gray-600">
              Our focus remains on safety, innovation, energy efficiency, and
              customer satisfaction across residential, commercial, and
              industrial projects.
            </p>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-200 shadow-lg group">
            {/* Soft glow effect */}
            <div className="absolute inset-0 bg-[#C9A24D]/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <img
              src={logo}
              alt="Dobhal Elevator"
              className="relative z-10 w-full h-full object-contain p-10 transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE STATS ================= */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-lg bg-[#F2F2F2] hover:rotate-3">
              <FaUsers className="text-[#C9A24D] text-3xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-800">600+</h3>
              <p className="text-sm text-gray-600">Satisfied Clients</p>
            </div>

            <div className="p-6 rounded-lg bg-[#F2F2F2] hover:rotate-3">
              <FaBuilding className="text-[#C9A24D] text-3xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-800">100+</h3>
              <p className="text-sm text-gray-600">Societies Served</p>
            </div>

            <div className="p-6 rounded-lg bg-[#F2F2F2] hover:rotate-3">
              <FaBriefcase className="text-[#C9A24D] text-3xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-800">50+</h3>
              <p className="text-sm text-gray-600">Commercial Projects</p>
            </div>

            <div className="p-6 rounded-lg bg-[#F2F2F2] hover:rotate-3">
              <FaIndustry className="text-[#C9A24D] text-3xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-800">125+</h3>
              <p className="text-sm text-gray-600">Expert Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="bg-[#F2F2F2] py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg hover:scale-105">
            <FaEye size={32} className="text-[#C9A24D] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To become a trusted and recognized leader in the elevator industry
              by delivering innovative, safe, and sustainable vertical mobility
              solutions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg hover:scale-105">
            <FaBullseye size={32} className="text-[#C9A24D] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To provide high-quality elevators and services through advanced
              manufacturing, skilled professionals, and a strong customer-first
              approach.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Quality Engineering", icon: <FaTools /> },
              { title: "Safety First", icon: <FaShieldAlt /> },
              { title: "Customer Commitment", icon: <FaAward /> },
              { title: "Reliable Support", icon: <FaBuilding /> },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#F2F2F2] p-6 rounded-lg text-center hover:shadow-md transition"
              >
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-white text-[#C9A24D] text-2xl">
                  {item.icon}
                </div>
                <h4 className="font-medium text-gray-800">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUALITY & SAFETY ================= */}
      <section className="bg-[#F2F2F2] py-16">
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
              Every elevator is thoroughly tested to deliver smooth operation,
              long service life, and consistent performance.
            </p>
          </div>

          <div className="h-72 bg-gray-300 rounded-lg overflow-hidden">
            <img
              src="/images/service1.png"
              alt="Quality and Safety"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#C9A24D] py-16 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Building Trust Through Technology Since 2014
        </h2>
        <p className="mt-4">
          Partner with Dobhal Elevator for safe, reliable, and future-ready
          vertical mobility solutions.
        </p>
      </section>
    </div>
  );
};

export default OurCompany;
