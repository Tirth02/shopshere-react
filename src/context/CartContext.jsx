import { createContext, useContext, useReducer } from "react";

/**
 * 1️⃣ Create the Context
 * This is like an empty global box
 */
const CartContext = createContext();

/**
 * 2️⃣ Initial State of Cart
 * This defines what the cart looks like initially
 */
const initialState = {
  items: [] // cart starts empty
};

/**
 * 3️⃣ Reducer Function
 * This will control HOW cart changes
 * For now → no logic, just return state
 */
function cartReducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

/**
 * 4️⃣ Cart Provider
 * This wraps your app and gives access to cart
 */
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

/**
 * 5️⃣ Custom Hook
 * Cleaner way to access cart anywhere
 */
export const useCart = () => {
  return useContext(CartContext);
};
