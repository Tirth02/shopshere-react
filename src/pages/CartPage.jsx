import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import EmptyCartShow from "../components/EmptyCartShow";
import CartSummary from "../components/CartSummary";

const CartPage = () => {
  const { cart, setCart } = useCart();

  const removeFromCart = (id) => {
    const filteredCart = cart.filter(function (item) {
      if (item._id == id) return false;
      return true;
    });
    setCart(filteredCart);
  };

  const totalQuantity = cart.reduce(
    (accumulator, curr) => accumulator + curr.quantity,
    0,
  );
  const subTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const increaseQuantity = (id) => {
    const updatedIncrementalCart = cart.map((item) => {
      if (item._id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedIncrementalCart);
  };

  const decreaseQuantity = (id) => {
    const clickedItem = cart.find((item) => item._id === id);

    if (!clickedItem) return;
    if (clickedItem.quantity === 1) removeFromCart(id);
    else {
      const updatedDecrementalCart = cart.map((item) => {
        if (item._id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setCart(updatedDecrementalCart);
    }
  };
  if (!cart || cart.length == 0) {
    return <EmptyCartShow />;
  }
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
                    <button
                      className="px-3 py-1 border-r cursor-pointer"
                      onClick={() => decreaseQuantity(item._id)}
                    >
                      −
                    </button>
                    <span className="px-4 py-1">{item.quantity}</span>
                    <button
                      className="px-3 py-1 border-l cursor-pointer"
                      onClick={() => increaseQuantity(item._id)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: Summary */}
        <CartSummary cart={cart} totalQuantity={totalQuantity} subTotal={subTotal} />
      </div>
    </div>
  );
};

export default CartPage;
