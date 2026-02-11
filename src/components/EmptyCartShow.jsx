import React from 'react'
import { useNavigate } from 'react-router-dom'

const EmptyCartShow = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty 🛒</h2>

        <p className="text-gray-500 mb-6">
          Looks like you haven't added anything yet.
        </p>

        <button onClick={() => navigate("/products")} className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
          Continue Shopping
        </button>
      </div>
  )
}

export default EmptyCartShow