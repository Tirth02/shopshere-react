import { Link, useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import StarRating from "../components/StarRating";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const { cart, setCart } = useCart();
  const { data, loading, error } = useProduct(id);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10">Error loading product.</p>;

  const AddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    const existingItem = cart.find(
      (item) =>
        item._id === data._id &&
        item.selectedSize === selectedSize
    );

    if (existingItem) {
      const updatedCart = cart.map((item) => {
        if (
          item._id === data._id &&
          item.selectedSize === selectedSize
        ) {
          const newQuantity = item.quantity + quantity;

          return {
            ...item,
            quantity:
              newQuantity > data.stock ? data.stock : newQuantity,
          };
        }
        return item;
      });

      setCart(updatedCart);
    } else {
      const newItem = {
        ...data,
        quantity,
        selectedSize,
      };

      setCart([...cart, newItem]);
    }

    setQuantity(1);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT: IMAGE */}
        <div className="border rounded-xl p-6 flex items-center justify-center">
          <img
            src={data.image}
            alt={data.title}
            className="max-h-[500px] object-contain"
          />
        </div>

        {/* RIGHT: INFO */}
        <div>

          {/* BRAND */}
          <p className="text-sm text-gray-500 mb-1">
            {data.brand}
          </p>

          {/* TITLE */}
          <h1 className="text-3xl font-semibold mb-2">
            {data.title}
          </h1>

          <p className="text-gray-500 text-sm mb-4 capitalize">
            {data.category}
          </p>

          {/* RATING */}
          <div className="flex items-center gap-2 mb-4">
            <StarRating rating={data.rating} />
            <span className="text-sm text-gray-600">
              ({data.rating} stars)
            </span>
          </div>

          {/* PRICE */}
          <div className="mb-4">
            {data.discountedPrice ? (
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold">
                  ${data.discountedPrice}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  ${data.oldPrice}
                </span>
              </div>
            ) : (
              <span className="text-3xl font-bold">
                ${data.price}
              </span>
            )}
          </div>

          {/* LOW STOCK WARNING */}
          {data.stock < 5 && data.stock > 0 && (
            <p className="text-red-500 text-sm mb-4">
              Only {data.stock} left in stock!
            </p>
          )}

          {data.stock === 0 && (
            <p className="text-red-500 text-sm mb-4">
              Out of stock
            </p>
          )}

          {/* DESCRIPTION */}
          <p className="text-gray-700 mb-6 leading-relaxed">
            {data.description}
          </p>

          {/* SIZE SELECTION */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Select Size</h3>
            <div className="flex gap-3">
              {data.size.map((sizeOption) => (
                <button
                  key={sizeOption}
                  onClick={() => setSelectedSize(sizeOption)}
                  className={`px-4 py-2 border rounded-md text-sm transition
                    ${
                      selectedSize === sizeOption
                        ? "bg-black text-white border-black"
                        : "hover:border-black"
                    }`}
                >
                  {sizeOption}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY */}
          <div className="flex items-center gap-4 mb-8">
            <span className="font-medium">Quantity</span>
            <div className="flex border rounded items-center">
              <button
                className="px-3 py-1 border-r"
                onClick={() => {
                  if (quantity > 1) setQuantity(quantity - 1);
                }}
              >
                −
              </button>

              <span className="px-4 py-1">{quantity}</span>

              <button
                disabled={quantity >= data.stock}
                className="px-3 py-1 border-l disabled:opacity-50"
                onClick={() => {
                  if (quantity < data.stock)
                    setQuantity(quantity + 1);
                }}
              >
                +
              </button>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-4">
            <button
              disabled={data.stock === 0}
              onClick={AddToCart}
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition disabled:opacity-50"
            >
              {data.stock === 0 ? "Out of Stock" : "Add to Cart"}
            </button>

            <Link to="/cart">
              <button
                disabled={data.stock === 0}
                onClick={AddToCart}
                className="border px-6 py-3 rounded-md hover:bg-gray-100 transition disabled:opacity-50"
              >
                Buy Now
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
