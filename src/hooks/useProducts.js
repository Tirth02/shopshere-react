import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../api/product';

const useProducts = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        let isMounted = true;
        async function loadProducts(){
            try {
                setLoading(true);
                const products = await fetchProducts();
                if(isMounted) setData(products.data);
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
    },[])
  return {data,loading,error};
}

export default useProducts