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
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const OurCompany = () => {
  return (
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-gray-800"
          >
            Our Company
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-5xl text-gray-600 space-y-4"
          >
            <p className="text-lg leading-relaxed">
              Since its inception in <strong>2014</strong>, Dobhal Elevator has
              established itself as a pioneering force in the vertical
              transportation industry. We are dedicated to delivering reliable,
              safe, and innovative elevator solutions that blend cutting-edge
              technology with superior craftsmanship.
            </p>
            <p className="text-lg leading-relaxed">
              Backed by strong engineering expertise and a state-of-the-art
              in-house manufacturing unit, we ensure that every product meets
              the highest national and international standards of quality and
              performance. From residential complexes to high-rise commercial
              towers and industrial facilities, we tailor our solutions to meet
              the unique mobility needs of our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT COMPANY ================= */}
      <section className="bg-[#F2F2F2] py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-200 shadow-lg group"
          >
            {/* Soft glow effect */}
            <div className="absolute inset-0 bg-[#C9A24D]/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <img
              src={logo}
              alt="Dobhal Elevator"
              className="relative z-10 w-full h-full object-contain p-10 transition duration-500 group-hover:scale-105"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= MANUFACTURING UNIT ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Built In-House, Built for Trust
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              At Dobhal Elevator, we don't just install elevators; we manufacture
              them. owning the entire production process means we guarantee the
              origin, quality, and reliability of every component—giving you
              peace of mind that your elevator is built to last.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left Column: Details & Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Why Our Manufacturing Matters
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Reliability starts at the source. By manufacturing key components
                in-house, we eliminate dependency on third-party vendors,
                ensuring that every part meets our strict safety standards. This
                control allows us to deliver consistent quality and rapid support
                that trading companies simply cannot match.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-[#C9A24D] transition-colors">
                  <h4 className="font-semibold text-[#C9A24D] mb-2">100% Quality Assurance</h4>
                  <p className="text-sm text-gray-600">Every bolt and panel is inspected by us before it reaches you.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-[#C9A24D] transition-colors">
                  <h4 className="font-semibold text-[#C9A24D] mb-2">Lifetime Spare Parts</h4>
                  <p className="text-sm text-gray-600">We make the parts, so replacements are always available instantly.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-[#C9A24D] transition-colors">
                  <h4 className="font-semibold text-[#C9A24D] mb-2">No Third-Party Delays</h4>
                  <p className="text-sm text-gray-600">Direct manufacturing means faster delivery and installation.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-[#C9A24D] transition-colors">
                  <h4 className="font-semibold text-[#C9A24D] mb-2">Tailored Reliability</h4>
                  <p className="text-sm text-gray-600">Designed specifically for Indian usage conditions and loads.</p>
                </div>
              </div>

              {/* Office Address Box */}
              <div className="bg-[#F2F2F2] p-6 rounded-xl border-l-4 border-[#C9A24D] mb-6">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <FaBuilding className="text-[#C9A24D]" /> Office Address
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  B-12, Krishna Complex,
                  <br />
                  Maharaja Aggarsain Marg, Sector 31,
                  <br />
                  Noida, Ghaziabad, Uttar Pradesh 201303
                </p>
              </div>

              {/* Factory Address Box */}
              <div className="bg-[#F2F2F2] p-6 rounded-xl border-l-4 border-[#C9A24D]">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <FaIndustry className="text-[#C9A24D]" /> Factory Address
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Plot No. 15, Behind Santosh Hospital, Near Anuja Petrol Pump,
                  <br />
                  Scheme Shani Gate G2B Factory Area,
                  <br />
                  44 & 45 Phase-1, UPSIDC, MG Road,
                  <br />
                  Hapur, Uttar Pradesh, India
                </p>
              </div>
            </motion.div>

            {/* Right Column: Gallery & Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://www.schindler.com/content/dam/website/us/images/company/sec-clinton-plant.jpg/_jcr_content/renditions/original./sec-clinton-plant.jpg"
                  alt="Factory Floor"
                  className="w-full h-48 object-cover rounded-lg shadow-sm hover:scale-105 transition duration-500"
                />
                <img
                  src="https://framerusercontent.com/images/LGX849Em7KCAPJjPmi0v2z1cc.jpg?width=650&height=441"
                  alt="Elevator Cabin Manufacturing"
                  className="w-full h-48 object-cover rounded-lg shadow-sm hover:scale-105 transition duration-500"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKdQ8Xg9v1QYL-28pIYxnPKgntUHS04oT2TA&s"
                  alt="Assembly Line"
                  className="w-full h-48 object-cover rounded-lg shadow-sm hover:scale-105 transition duration-500"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQipZm_uXqiFZvjTNZyKP8P_eAugkFGSoqJmA&s"
                  alt="Quality Testing"
                  className="w-full h-48 object-cover rounded-lg shadow-sm hover:scale-105 transition duration-500"
                />
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                  alt="Elevator Manufacturing Process"
                  className="w-full h-48 object-cover rounded-lg shadow-sm hover:scale-105 transition duration-500"
                />
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
                  alt="Industrial Factory Floor"
                  className="w-full h-48 object-cover rounded-lg shadow-sm hover:scale-105 transition duration-500"
                />
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 text-center bg-gray-800 text-white p-6 rounded-xl shadow-lg">
                <div>
                  <div className="text-2xl font-bold text-[#C9A24D]">10k+</div>
                  <div className="text-xs text-gray-400 mt-1">Sq. Ft. Area</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#C9A24D]">500+</div>
                  <div className="text-xs text-gray-400 mt-1">Units / Year</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#C9A24D]">50+</div>
                  <div className="text-xs text-gray-400 mt-1">Skilled Staff</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE STATS ================= */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { count: "600+", label: "Satisfied Clients", icon: <FaUsers /> },
              { count: "100+", label: "Societies Served", icon: <FaBuilding /> },
              { count: "50+", label: "Commercial Projects", icon: <FaBriefcase /> },
              { count: "125+", label: "Expert Team Members", icon: <FaIndustry /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 rounded-xl bg-[#F2F2F2] hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer border border-transparent hover:border-[#C9A24D]/20"
              >
                <div className="text-[#C9A24D] text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-800">{stat.count}</h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="bg-[#F2F2F2] py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border-t-4 border-[#C9A24D]"
          >
            <FaEye size={40} className="text-[#C9A24D] mb-6" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To become a trusted and recognized leader in the elevator industry
              by delivering innovative, safe, and sustainable vertical mobility
              solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border-t-4 border-[#C9A24D]"
          >
            <FaBullseye size={40} className="text-[#C9A24D] mb-6" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To provide high-quality elevators and services through advanced
              manufacturing, skilled professionals, and a strong customer-first
              approach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12 text-center"
          >
            Our Core Values
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { title: "Quality Engineering", icon: <FaTools /> },
              { title: "Safety First", icon: <FaShieldAlt /> },
              { title: "Customer Commitment", icon: <FaAward /> },
              { title: "Reliable Support", icon: <FaBuilding /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#F2F2F2] p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-white text-[#C9A24D] text-3xl shadow-sm">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-xl text-gray-800">{item.title}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= QUALITY & SAFETY ================= */}
      <section className="bg-[#F2F2F2] py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
              Quality & Safety Standards
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              We follow strict quality control processes and comply with
              national and international safety standards to ensure maximum
              reliability and passenger safety.
            </p>
            <p className="text-gray-600 text-lg">
              Every elevator is thoroughly tested to deliver smooth operation,
              long service life, and consistent performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-80 bg-gray-300 rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="/images/service1.png"
              alt="Quality and Safety"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#C9A24D] py-20 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Building Trust Through Technology Since 2014
          </h2>
          <p className="mt-4 text-xl max-w-2xl mx-auto opacity-90">
            Partner with Dobhal Elevator for safe, reliable, and future-ready
            vertical mobility solutions.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default OurCompany;
