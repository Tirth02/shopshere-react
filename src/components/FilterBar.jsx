import React from "react";

const FilterBar = ({ categories,category, onCategoryChange }) => {
  return (
    <div className="flex gap-3 mb-6 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={`px-4 py-1 rounded-full text-sm border transition capitalize
            ${
              category === cat
                ? "bg-black text-white border-black"
                : "bg-white text-gray-700 border-gray-300 hover:border-black"
            }
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
