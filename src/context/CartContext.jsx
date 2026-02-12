import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const[cart,setCart] = useState(() => {
        try {
            const savedCart = localStorage.getItem("cart");
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
           return []; 
        }
        
    });

    useEffect(() => {
        localStorage.setItem("cart",JSON.stringify(cart));
    },[cart])

    return(
        <CartContext.Provider value={{cart,setCart}}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => useContext(CartContext);