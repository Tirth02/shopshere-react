import React from "react";
import { Link } from "react-router-dom";
const ShopByCategory = () => {
  return (
    <>
      {/* SHOP BY CATEGORY */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* MEN */}
          <Link
            to="/products?category=men"
            className="relative group overflow-hidden rounded-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1520975954732-35dd22299614"
              alt="Men Collection"
              className="w-full h-[400px] object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-semibold">Men</h3>
            </div>
          </Link>

          {/* WOMEN */}
          <Link
            to="/products?category=women"
            className="relative group overflow-hidden rounded-xl"
          >
            <img
              src="women-poster.jpg"
              alt="Women Collection"
              className="w-full h-[400px] object-cover  transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-semibold">Women</h3>
            </div>
          </Link>

          {/* NEW ARRIVALS */}
          <Link
            to="/products?category=new"
            className="relative group overflow-hidden rounded-xl"
          >
            <img
              src="New-Arrival.jpg"
              alt="New Arrivals"
              className="w-full h-[400px] object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-semibold">
                New Arrivals
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShopByCategory;
