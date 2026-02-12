import React, { useState } from "react";
import data from "../data/data1.json";
import { FaArrowLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Products = () => {
  const { categories } = data;
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    window.scrollTo(0, 0); // Scroll to top when changing view
  };

  const handleBackClient = () => {
    setSelectedCategory(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full bg-[#FAFAFA] py-16 font-poppins min-h-screen">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <AnimatePresence mode="wait">
            {!selectedCategory ? (
              <motion.div
                key="categories-header"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Product Categories</h1>
                <p className="text-gray-600 max-w-2xl text-lg">Explore our wide range of premium elevator solutions designed for every need.</p>
                <div className="w-20 h-1 bg-[#C9A24D] mt-6 rounded-full"></div>
              </motion.div>
            ) : (
              <motion.div
                key="products-header"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleBackClient}
                  className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors text-[#C9A24D]"
                >
                  <FaArrowLeft size={20} />
                </motion.button>
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">{selectedCategory.title}</h1>
                  <p className="text-gray-600 text-sm mt-1">Browse products in this category</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* View Switcher */}
        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            // ================= CATEGORIES VIEW =================
            <motion.div
              key="categories-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={() => handleCategoryClick(category)}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer border border-transparent hover:border-[#C9A24D]/20"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white border border-white px-6 py-2 rounded-full backdrop-blur-sm font-medium hover:bg-white hover:text-black transition-all">View Products</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#C9A24D] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {category.description}
                    </p>
                    <div className="mt-4 flex items-center text-[#C9A24D] font-semibold text-sm group-hover:translate-x-2 transition-transform">
                      Explore Category <span className="ml-2">→</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // ================= PRODUCTS VIEW =================
            <motion.div
              key="products-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {selectedCategory.products && selectedCategory.products.length > 0 ? (
                selectedCategory.products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="h-64 overflow-hidden bg-gray-50 p-6 flex items-center justify-center relative group-hover:bg-gray-100 transition-colors">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-6 border-t border-gray-100">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                        {product.description}
                      </p>

                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href="/contact"
                        className="block w-full text-center bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-[#C9A24D] transition-colors duration-300"
                      >
                        Enquire Now
                      </motion.a>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-20 text-gray-500">
                  <p className="text-xl">No products found in this category yet.</p>
                  <button onClick={handleBackClient} className="text-[#C9A24D] mt-4 font-semibold hover:underline">Go Back to Categories</button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Products;
