import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-black text-gray-300">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        {/* Logo & About */}
        <motion.div variants={itemVariants}>
          <img
            src={logo}
            alt="Dobhal Elevator Logo"
            className="h-12 mb-4"
          />
          <p className="text-sm text-gray-400 leading-relaxed">
            Dobhal Elevator delivers safe, reliable, and modern elevator
            solutions with a strong focus on quality, technology, and
            customer satisfaction.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "Our Company", "Products", "Services", "Aesthetics & Fixtures", "Contact Us"].map((link, index) => (
              <li key={index}>
                <Link
                  to={link === "Home" ? "/" : `/${link.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                  className="hover:text-[#C9A24D] transition-colors duration-300 block"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div variants={itemVariants}>
          <h4 className="text-white font-semibold mb-4 text-lg">Services</h4>
          <ul className="space-y-2 text-sm">
            {["Elevator Installation", "Maintenance & AMC", "Modernization", "Repair & Support"].map((service, index) => (
              <li key={index} className="hover:text-[#C9A24D] transition-colors duration-300 cursor-pointer">
                {service}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={itemVariants}>
          <h4 className="text-white font-semibold mb-4 text-lg">Contact</h4>

          <div className="space-y-4">
            <div className="flex items-center gap-3 group">
              <div className="p-2 bg-gray-800 rounded-full group-hover:bg-[#C9A24D] transition-colors duration-300">
                <FaPhoneAlt className="text-[#C9A24D] group-hover:text-white transition-colors duration-300" size={14} />
              </div>
              <span className="text-sm group-hover:text-white transition-colors duration-300">+91 8130708265</span>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="p-2 bg-gray-800 rounded-full group-hover:bg-[#C9A24D] transition-colors duration-300">
                <FaEnvelope className="text-[#C9A24D] group-hover:text-white transition-colors duration-300" size={14} />
              </div>
              <span className="text-sm group-hover:text-white transition-colors duration-300">Sales.dobhalelevator@gmail.com</span>
            </div>

            <div className="flex items-start gap-3 group">
              <div className="p-2 bg-gray-800 rounded-full group-hover:bg-[#C9A24D] transition-colors duration-300 mt-1">
                <FaMapMarkerAlt className="text-[#C9A24D] group-hover:text-white transition-colors duration-300" size={14} />
              </div>
              <span className="text-sm group-hover:text-white transition-colors duration-300">
                Factory Address: Plot No. 15, Behind Santosh Hospital, Near Anuja Petrol Pump,
                Scheme Shani Gate G2B Factory Area,
                44 & 45 Phase-1, UPSIDC, MG Road,
                Hapur, Uttar Pradesh, India
              </span>
            </div>
            <div className="flex items-start gap-3 group">
              <div className="p-2 bg-gray-800 rounded-full group-hover:bg-[#C9A24D] transition-colors duration-300 mt-1">
                <FaMapMarkerAlt className="text-[#C9A24D] group-hover:text-white transition-colors duration-300" size={14} />
              </div>
              <span className="text-sm group-hover:text-white transition-colors duration-300">
                Corporate office : B-12, Krishna Complex, Maharaja Aggarsain Marg, Sector 31, Noida, Ghaziabad, Uttar Pradesh 201303
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500 bg-black/95">
        &copy; {new Date().getFullYear()} Dobhal Elevator. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
