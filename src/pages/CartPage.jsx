import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, setCart } = useCart();
  console.log("cart items in cart page", cart);
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT: Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div key={item._id} className="flex gap-4 border rounded-lg p-4">
              <img
                src={item.image}
                alt="Product"
                className="w-28 h-28 object-contain border rounded"
              />

              <div className="flex-1">
                <h2 className="font-semibold text-lg">{item.title}</h2>

                <p className="text-sm text-gray-500 mb-2">{item.category}</p>

                <p className="font-bold mb-4">${item.price}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center border rounded">
                    <button className="px-3 py-1 border-r">−</button>
                    <span className="px-4 py-1">{item.quantity}</span>
                    <button className="px-3 py-1 border-l">+</button>
                  </div>

                  <button className="text-sm text-red-500 hover:underline">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: Summary */}
        <div className="border rounded-lg p-6 h-fit">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between text-sm mb-2">
            <span>Items</span>
            <span>3</span>
          </div>

          <div className="flex justify-between text-sm mb-4">
            <span>Subtotal</span>
            <span>$360</span>
          </div>

          <hr className="mb-4" />

          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Total</span>
            <span>$360</span>
          </div>

          <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
