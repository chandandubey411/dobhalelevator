import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png"; // <-- apna logo yahan rakho

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Company", path: "/our-company" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Aesthetics & Fixtures", path: "/aesthetics" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Dobhal Elevator Logo"
              className="h-10 w-auto"
            />
            <span className="font-semibold text-lg text-gray-800 hidden sm:block">
              Dobhal Elevator
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-[#C9A24D]"
                      : "text-gray-700 hover:text-[#C9A24D]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* CTA Button */}
            <a
              href="tel:8130708265"
              className="ml-4 bg-[#C9A24D] text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
            >
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#F2F2F2] border-t">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 px-2 rounded text-sm font-medium ${
                    isActive
                      ? "bg-white text-[#C9A24D]"
                      : "text-gray-700 hover:bg-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <a
              href="tel:8130708265"
              className="mt-2 bg-[#C9A24D] text-white text-center py-2 rounded-md font-medium"
            >
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
