import { Link, useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import StarRating from "../components/StarRating";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();

  const { cart, setCart } = useCart();
  const { data, loading, error } = useProduct(id);
  const[quantity,setQuantity] = useState(1);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const AddToCart = () => {
    const existingItem = cart.find((item) => item._id === data._id);
    if (existingItem) {
      const updatedCart = cart.map((item) => {
        if (item._id == data._id) {
          const newQuantity = item.quantity + quantity;
          return { ...item, quantity: newQuantity > data.stock ? data.stock: newQuantity };
        }
        return item;
      });
      setCart(updatedCart);
      console.log("Item exist in cart");
    } else {
      console.log("Item doesn't exist in cart");
      const newItem = {
        ...data,
        quantity: quantity,
      };
      setCart([...cart, newItem]);
    }
    setQuantity(1);
  };
  console.log(cart);
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT: Image Section */}
        <div className="border rounded-lg p-6 flex items-center justify-center">
          <img
            src={data.image}
            alt="Product"
            className="max-h-[400px] object-contain"
          />
        </div>

        {/* RIGHT: Product Info */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{data.title}</h1>

          <p className="text-gray-500 text-sm mb-4">{data.category}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <StarRating rating={data.rating} />
            <span className="text-sm text-gray-600">
              ({data.rating.count} reviews)
            </span>
          </div>

          {/* Price */}
          <p className="text-3xl font-bold mb-6">${data.price}</p>

          {/* Description */}
          <p className="text-gray-700 mb-6 leading-relaxed">
            {data.description}
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-6">
            <span className="font-medium">Quantity</span>
            <div className="flex border rounded">
              <button className="px-3 py-1 border-r" onClick={() => {
                if(quantity > 1) setQuantity(quantity-1);
              }}>−</button>
              <span className="px-4 py-1">{quantity}</span>
              <button disabled={quantity >= data.stock} className="px-3 py-1 border-l" onClick={() => {
                if(quantity < data.stock) setQuantity(quantity+1);
              }}>+</button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
              onClick={AddToCart}
            >
              Add to Cart
            </button>
            <Link to="/cart">
              <button className="border px-6 py-3 rounded hover:bg-gray-100 transition" onClick={AddToCart}>
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
