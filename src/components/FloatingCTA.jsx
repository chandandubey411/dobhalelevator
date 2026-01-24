import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918130708265"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={22} />
      </a>

      {/* Call Button */}
      <a
        href="tel:8130708265"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#C9A24D] text-white shadow-lg hover:scale-110 transition"
        aria-label="Call Now"
      >
        <FaPhoneAlt size={18} />
      </a>

    </div>
  );
};

export default FloatingCTA;
