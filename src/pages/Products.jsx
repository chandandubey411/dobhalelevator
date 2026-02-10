import React, { useState } from "react";
import data from "../data/data1.json";
import { FaArrowLeft } from "react-icons/fa";

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
        <div className="mb-12">
          {!selectedCategory ? (
            <>
              <h1 className="text-4xl font-bold text-dark mb-4">Our Product Categories</h1>
              <p className="text-gray-600 max-w-2xl">Explore our wide range of premium elevator solutions designed for every need.</p>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <button
                onClick={handleBackClient}
                className="p-2 rounded-full hover:bg-gray-200 transition-colors text-primary"
              >
                <FaArrowLeft size={24} />
              </button>
              <div>
                <h1 className="text-3xl font-bold text-dark">{selectedCategory.title}</h1>
                <p className="text-gray-600 text-sm">Browse products in this category</p>
              </div>
            </div>
          )}
          <div className="w-20 h-1 bg-primary mt-4 rounded-full"></div>
        </div>

        {/* View Switcher */}
        {!selectedCategory ? (
          // ================= CATEGORIES VIEW =================
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/20"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white border border-white px-6 py-2 rounded-full backdrop-blur-sm font-medium">View Products</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary font-semibold text-sm">
                    Explore Category <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // ================= PRODUCTS VIEW =================
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animation-fade-in">
            {selectedCategory.products && selectedCategory.products.length > 0 ? (
              selectedCategory.products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-56 overflow-hidden bg-gray-100 p-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-contain mix-blend-multiply"
                    />
                  </div>

                  <div className="p-6 border-t border-gray-100">
                    <h3 className="text-lg font-bold text-dark mb-2">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {product.description}
                    </p>

                    <a
                      href="/contact"
                      className="block w-full text-center bg-dark text-white py-3 rounded-lg font-medium hover:bg-primary transition-colors duration-300"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 text-gray-500">
                <p>No products found in this category yet.</p>
                <button onClick={handleBackClient} className="text-primary mt-2 hover:underline">Go Back</button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default Products;
