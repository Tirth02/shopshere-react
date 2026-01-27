import React from 'react'
import useProducts from '../hooks/useProducts'
import ProductCard from '../components/ProductCard';

const ProductList = () => {
  const {data, loading, error} = useProducts();
  console.log(data);
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error</p>
  if (!Array.isArray(data)) return <p>Invalid data</p>
  if (data.length === 0) return <p>No products found</p>
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {data.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList