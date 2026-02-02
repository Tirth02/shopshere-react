import React from "react";

const FilterBar = ({ categories, category, onCategoryChange,sort, onSortChange,hasActiveFilters,onResetFilters }) => {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-6 ">
      <div className="flex items-center gap-2">
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
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-gray-700">Sort:</label>

        <select
        value={sort}
          className="
        border border-gray-300
        rounded-full
        px-4 py-1
        text-sm
        bg-white
        focus:outline-none
        focus:ring-2 focus:ring-black
      "
        onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="">Featured</option>
          <option value="price-asc">Price ↑</option>
          <option value="price-desc">Price ↓</option>
          <option value="rating-desc">Rating</option>
          <option value="newest">Newest</option>
        </select>
      </div>
      <button
        onClick={onResetFilters}
        disabled={!hasActiveFilters}
          className="self-start sm:self-auto px-4 py-2 rounded-lg border border-gray-300
                     text-gray-600 hover:bg-gray-100 transition"
        >
          Clear Filters
        </button>
    </div>
  );
};

export default FilterBar;
