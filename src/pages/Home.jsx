import React from "react";
import {
  FaCogs,
  FaShieldAlt,
  FaTools,
  FaHeadset,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Slider from "../components/Slider";

const Home = () => {
  const products = [
    {
      title: "Passenger Elevator",
      image: "https://easaelevators.in/wp-content/uploads/2024/12/1-6.png",
    },
    {
      title: "Hospital Elevator",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROGQ2dbXnDsNo6ZaSmvBIngSVoB_BvCxX06A&s",
    },
    {
      title: "Freight Elevator",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrV8CjwpVbG46rT56jXPPeIZbyDji9ZVEGA&s",
    },
    {
      title: "Home Elevator",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj2DI4vwE5bRegkOOYFGwpPf7DWrCtRyKj_w&s",
    },
    {
      title: "MRL Elevator",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgGX6WNwf6k3-vGB2af2LXN728oyjO-Hk_Yw&s",
    },
  ];

  const whyChoose = [
    {
      title: "Advanced Technology",
      icon: <FaCogs size={28} className="text-[#C9A24D]" />,
    },
    {
      title: "High Safety Standards",
      icon: <FaShieldAlt size={28} className="text-[#C9A24D]" />,
    },
    {
      title: "Custom Solutions",
      icon: <FaTools size={28} className="text-[#C9A24D]" />,
    },
    {
      title: "Reliable Support",
      icon: <FaHeadset size={28} className="text-[#C9A24D]" />,
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="w-full">
      {/* ================= HERO VIDEO ================= */}
      <div className="flex flex-col md:flex-row items-center gap-3">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-[90%] md:w-[50%] p-1 pt-4"
        >
          <section className="w-full h-[calc(60vh)] relative overflow-hidden object-contain rounded-lg shadow-lg">
            <Slider />
          </section>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex w-[45%] flex items-center justify-center "
        >
          <img src="/images/logo.png" className="w-auto h-[500px] hover:scale-105 transition duration-500" />
        </motion.div>
      </div>

      {/* ================= OUR PRODUCTS ================= */}
      <section className="bg-[#F2F2F2] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-gray-800 mb-8"
          >
            Our Products
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex gap-6 overflow-x-auto py-4 scrollbar-hide"
          >
            {products.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="min-w-[280px] bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-44 w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-medium text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Reliable, safe and efficient elevator solutions for modern
                    infrastructure.
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-gray-800 mb-10 text-center"
          >
            Why Choose Dobhal Elevator
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {whyChoose.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, backgroundColor: "#fff" }}
                className="bg-[#F2F2F2] p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-white group-hover:bg-[#C9A24D] transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-lg text-gray-800">
                  {item.title}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-[#F2F2F2] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-gray-800 mb-10"
          >
            Our Services
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {["Installation", "Maintenance & AMC", "Modernization"].map(
              (service, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-transparent hover:border-[#C9A24D]"
                >
                  <h4 className="font-semibold text-xl text-gray-800 mb-3">
                    {service}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Professional elevator services ensuring smooth performance
                    and long-term reliability.
                  </p>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#C9A24D] py-20 text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Looking for Reliable Elevator Solutions?
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto mb-8 opacity-90">
            Call us today or send your enquiry to get expert guidance.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="bg-white text-[#C9A24D] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Contact Us Now
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
