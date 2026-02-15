import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const NavBar = () => {
  const {cart} = useCart();
  console.log("Cart in Navbar",cart);
  const totalQuantity = cart.reduce((acc,item) => acc+item.quantity,0);
  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl font-semibold tracking-wide">
          Shopshere
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-gray-500 transition">
            Home
          </Link>
          <Link to="/products" className="hover:text-gray-500 transition">
            Shop
          </Link>
          <Link to="#" className="hover:text-gray-500 transition">
            Men
          </Link>
          <Link to="#" className="hover:text-gray-500 transition">
            Women
          </Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6 text-sm font-medium">
          
          <Link to="/cart" className="relative">   
          <img height="33" width="33" src="image.png"/>
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-4 bg-black text-white text-xs px-2 py-0.5 rounded-full">
                {totalQuantity}
              </span>
            )}
          </Link>

          {/* Auth Placeholder */}
          <Link to="#" className="hover:text-gray-500 transition">
            Login
          </Link>

        </div>
      </div>
    </header>
  );
};

export default NavBar;
