import React, { useEffect, useRef } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const { products, loadMore, loading, error, hasMore } =
    useProducts();
  console.log(products);
  const loaderRef = useRef(null);
  useEffect(() => {
    if (loading || !hasMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      { 
        root: null,
        rootMargin: "200px",
        threshold: 0,
      },
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.disconnect();
    };
  }, [loading, hasMore,loadMore]);
  if (error) return <p>Error</p>;
  if (!Array.isArray(products)) console.log("Invalid Data");
  // if (products.length === 0) return <p>No products found</p>;
  return (
    <div className="p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* <button
          onClick={loadMore}
          disabled={!hasMore || loading}
          className="mx-auto mt-8 px-6 py-3 rounded-lg bg-black text-white
             disabled:bg-gray-400 disabled:cursor-not-allowed
             hover:bg-gray-800 transition"
        >
          {loading ? "Loading..." : hasMore ? "Load More" : "No More Products"}
      </button> */}
      {hasMore && <div ref={loaderRef} className="h-10" />}

       {loading && (
        <p className="text-center mt-4 text-gray-500">
          Loading more products…
        </p>
      )}
    </div>
  );
};

export default ProductList;
