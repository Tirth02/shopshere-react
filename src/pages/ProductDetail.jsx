import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import StarRating from "../components/StarRating";

const ProductDetail = () => {
  const {id} = useParams();
  
  const {data,loading,error} = useProduct(id);
  
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error</p>
  console.log(data);
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
          <h1 className="text-2xl font-bold mb-2">
            {data.title}
          </h1>

          <p className="text-gray-500 text-sm mb-4">
            {data.category}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <StarRating rating={data.rating.rate} />
            <span className="text-sm text-gray-600">({data.rating.count} reviews)</span>
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
              <button className="px-3 py-1 border-r">−</button>
              <span className="px-4 py-1">1</span>
              <button className="px-3 py-1 border-l">+</button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
              Add to Cart
            </button>
            <button className="border px-6 py-3 rounded hover:bg-gray-100 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ProductDetail;
