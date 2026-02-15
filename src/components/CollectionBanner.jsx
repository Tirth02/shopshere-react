import React from "react";
import { Link } from "react-router-dom";
const CollectionBanner = () => {
  return (
    <>
      {/* BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
        alt="Summer Collection"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <p className="text-sm tracking-widest mb-4">SUMMER 2026</p>

        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          The Summer Collection
        </h2>

        <p className="max-w-xl text-gray-200 mb-8">
          Refined silhouettes. Timeless essentials. Designed for modern everyday
          elegance.
        </p>

        <Link to="/products">
          <button className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-200 transition">
            Explore Now
          </button>
        </Link>
      </div>
    </>
  );
};

export default CollectionBanner;
