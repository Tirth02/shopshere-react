import React from 'react'
import { Link } from 'react-router-dom';
const ProductCard = ({product}) => {
    //console.log(product);
  return (
    <Link
    to={`/products/${product.id}`}
    className="border rounded-lg p-4 hover:shadow-lg transition bg-white"
    >
        <div className="h-40 flex items-center justify-center mb-3">
            <img src={product.image} alt={product.title} className='max h-full object-contain'/>
        </div>
        <h2 className="text-sm font-semibold line-clamp-2 mb-1">
            {product.title}
        </h2>
        <p className="text-gray-500 text-xs mb-1 capitalize">
        {product.category}
      </p>
      <div className='className="flex items-center justify-between mt-2"'>
            <span className="font-bold text-lg">${product.price}</span>
            <span className="text-sm text-yellow-600">
          ⭐ {product.rating?.rate}
            </span>
      </div>
    </Link>
  )
}

export default ProductCard