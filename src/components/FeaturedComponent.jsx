import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
const FeaturedComponent = () => {
  const { products } = useProducts();

  return (
    // {/* FEATURED PRODUCTS */}
    // {/* FEATURED PRODUCTS */}
    <>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-semibold">Featured Products</h2>

          <Link
            to="/products"
            className="text-sm tracking-wide hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products
            .filter((product) => product.isNew)
            .slice(0, 4)
            .map((product) => (
              <Link
                key={product._id}
                to={`/products/${product._id}`}
                className="group"
              >
                <div className="relative">
                  {/* NEW BADGE */}
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
                      NEW
                    </span>
                  )}

                  {/* IMAGE */}
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-[350px] object-cover transform group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* PRODUCT INFO */}
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-medium">{product.title}</h3>

                    {product.discountedPrice ? (
                      <p className="mt-1">
                        <span className="font-medium text-black">
                          ${product.discountedPrice}
                        </span>
                        <span className="text-gray-400 line-through ml-2">
                          ${product.oldPrice}
                        </span>
                      </p>
                    ) : (
                      <p className="mt-1 text-gray-700">${product.price}</p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedComponent;
