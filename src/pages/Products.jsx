import React from "react";
import data from "../data/data.json";

const Products = () => {
  const { products } = data;

  return (
    <div className="w-full bg-[#F2F2F2] py-16">
      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-10">
          Our Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-56 w-full object-contain hover:object-cover"
              />

              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-800">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 mt-3">
                  {product.description}
                </p>

                <a
                  href="/contact"
                  className="inline-block mt-4 text-[#C9A24D] font-medium hover:underline"
                >
                  Enquire Now →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Products;
