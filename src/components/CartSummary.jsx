import React from "react";

const CartSummary = ({ cart, totalQuantity, subTotal }) => {
  return (
    <div className="border rounded-xl p-6 h-fit bg-gray-50 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

      {/* ITEM LIST */}
      <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
        {cart.map((item) => (
          <div
            key={item._id}
            className="flex justify-between text-sm"
          >
            <span className="truncate max-w-[70%]">
              {item.title} × {item.quantity}
            </span>

            <span className="font-medium">
              $ {item.quantity * item.price}
            </span>
          </div>
        ))}
      </div>

      <hr className="my-4" />

      {/* SUMMARY SECTION */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Items</span>
          <span>{totalQuantity}</span>
        </div>

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subTotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Tax (13%)</span>
          <span>${subTotal * 0.13}</span>
        </div>
      </div>

      <hr className="my-4" />

      {/* FINAL TOTAL */}
      <div className="flex justify-between font-bold text-lg mb-6">
        <span>Total</span>
        <span>${subTotal + (subTotal*0.13)}</span>
      </div>

      <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;
