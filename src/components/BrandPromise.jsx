import React from "react";

const BrandPromise = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* FREE SHIPPING */}
          <div>
            <div className="text-3xl mb-4">🚚</div>
            <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
            <p className="text-gray-500 text-sm">
              Complimentary shipping on all orders over $100.
            </p>
          </div>

          {/* RETURNS */}
          <div>
            <div className="text-3xl mb-4">↩️</div>
            <h3 className="text-lg font-semibold mb-2">30-Day Returns</h3>
            <p className="text-gray-500 text-sm">
              Hassle-free returns within 30 days of purchase.
            </p>
          </div>

          {/* SECURE PAYMENT */}
          <div>
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="text-lg font-semibold mb-2">Secure Payment</h3>
            <p className="text-gray-500 text-sm">
              Your transactions are encrypted and secure.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandPromise;
