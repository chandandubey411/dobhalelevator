import React, { useState } from "react";
import aestheticsData from "../data/aestheticsData.json";
import { motion, AnimatePresence } from "framer-motion";

const Aesthetics = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="w-full">
      {/* ================= HERO ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-gray-800"
          >
            Aesthetics & Fixtures
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-3xl text-gray-600 text-xl leading-relaxed"
          >
            <AnimatePresence mode="wait">
              {selectedCategory ? (
                <motion.p
                  key="category-desc"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  Explore our premium collection of <span className="font-semibold text-[#C9A24D]">{selectedCategory.title}</span>.
                </motion.p>
              ) : (
                <motion.p
                  key="default-desc"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  Elevate the look and feel of your elevators with premium aesthetics, modern fixtures, and customizable interior designs.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="bg-[#F2F2F2] py-20">
        <div className="max-w-7xl mx-auto px-4">

          <AnimatePresence>
            {selectedCategory && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={() => setSelectedCategory(null)}
                className="mb-8 flex items-center text-[#C9A24D] hover:text-[#b08d42] transition font-medium text-lg"
              >
                ← Back to Categories
              </motion.button>
            )}
          </AnimatePresence>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {selectedCategory
                ? // Setup for PRODUCT LIST view
                selectedCategory.products.map((product, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={product.id || index}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="h-64 overflow-hidden bg-white p-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 mt-3 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </motion.div>
                ))
                : // Setup for CATEGORY LIST view
                aestheticsData.map((category, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    key={category.id || index}
                    onClick={() => setSelectedCategory(category)}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  >
                    <div className="h-64 overflow-hidden bg-white p-4">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#C9A24D] transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 mt-3 leading-relaxed">
                        {category.description}
                      </p>
                      <span className="inline-block mt-4 text-sm font-bold text-[#C9A24D] uppercase tracking-wide group-hover:translate-x-2 transition-transform">
                        View Products →
                      </span>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ================= CUSTOMIZATION CTA ================= */}
      <section className="bg-[#C9A24D] py-20 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto px-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Customize Your Elevator Experience
          </h2>
          <p className="mt-4 text-xl opacity-90">
            Choose from a wide range of designs, materials, and finishes to
            match your building’s style.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-block mt-8 bg-white text-[#C9A24D] px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Get Custom Design
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default Aesthetics;
