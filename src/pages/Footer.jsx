import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div>
          <img
            src={logo}
            alt="Dobhal Elevator Logo"
            className="h-12 mb-4"
          />
          <p className="text-sm text-gray-400">
            Dobhal Elevator delivers safe, reliable, and modern elevator
            solutions with a strong focus on quality, technology, and
            customer satisfaction.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#C9A24D]">Home</Link></li>
            <li><Link to="/our-company" className="hover:text-[#C9A24D]">Our Company</Link></li>
            <li><Link to="/products" className="hover:text-[#C9A24D]">Products</Link></li>
            <li><Link to="/services" className="hover:text-[#C9A24D]">Services</Link></li>
            <li><Link to="/aesthetics" className="hover:text-[#C9A24D]">Aesthetics & Fixtures</Link></li>
            <li><Link to="/contact" className="hover:text-[#C9A24D]">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Services
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#C9A24D]">Elevator Installation</li>
            <li className="hover:text-[#C9A24D]">Maintenance & AMC</li>
            <li className="hover:text-[#C9A24D]">Modernization</li>
            <li className="hover:text-[#C9A24D]">Repair & Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Contact
          </h4>

          <div className="flex items-center gap-3 mb-3">
            <FaPhoneAlt className="text-[#C9A24D]" />
            <span className="text-sm">+91 8130708265</span>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <FaEnvelope className="text-[#C9A24D]" />
            <span className="text-sm">
              Sales.dobhalelevator@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-[#C9A24D]" />
            <span className="text-sm">India</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Dobhal Elevator. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
