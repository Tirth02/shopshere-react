import React from 'react'

const CartSummary = ({totalQuantity,subTotal}) => {
  return (
    <div className="border rounded-lg p-6 h-fit">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between text-sm mb-2">
            <span>Items</span>
            <span>{totalQuantity}</span>
          </div>

          <div className="flex justify-between text-sm mb-4">
            <span>Subtotal</span>
            <span>${subTotal}</span>
          </div>

          <hr className="mb-4" />

          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Total</span>
            <span>${subTotal}</span>
          </div>

          <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition">
            Checkout
          </button>
        </div>
  )
}

export default CartSummary