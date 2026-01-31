import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../api/product';

const useProducts = () => {

    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products,setProducts] = useState([]);
    const [page,setPage] = useState(1);
    const[hasMore,setHasMore] = useState(true);

    useEffect(() =>{
        let isMounted = true;
        async function loadProducts(){
            try {
                setLoading(true);
                const response = await fetchProducts(page);

                if(!isMounted) return;

                setProducts(prev => [...prev,...response.data]);
                setHasMore(response.currentPage < response.totalPages);
            } catch (err) {
                if(isMounted) setError(err.message);
            } finally {
                if(isMounted) setLoading(false);
            }
        }
        loadProducts();
        return () => {
            isMounted = false;
        }
    },[page])
    const loadMore = () =>{
        if(!loading && hasMore){
            setPage(prev => prev + 1);
        }
    }
  return {products,loading,error,hasMore,loadMore};


}

export default useProducts