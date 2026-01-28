import React, { useEffect, useState } from 'react'
import { fetchProductById } from '../api/product';

const useProduct = (id) => {
    const [data,setData] = useState(null);
        const [loading,setLoading] = useState(true);
        const [error, setError] = useState(null);
    useEffect(() => {
        if(!id) return;
        let isMounted = true;
        async function loadProduct(){
            try {
                setLoading(true);
                const product = await fetchProductById(id);
                if(isMounted) setData(product);
                console.log(product);
            } catch (err) {
                if(isMounted) setError(err.message);
            } finally{
                if(isMounted) setLoading(false);
            }
            
        }
        loadProduct();
        return () => {
            isMounted = false;
        };
    },[id])

  return {data, loading, error}
}

export default useProduct