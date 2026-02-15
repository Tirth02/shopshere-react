import { Link } from "react-router-dom";
import ShopByCategory from "../components/ShopByCategory";
import FeaturedComponent from "../components/FeaturedComponent";
import CollectionBanner from "../components/CollectionBanner";
import BrandPromise from "../components/BrandPromise";

const Home = () => {
  return (
    <>
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* LEFT: TEXT CONTENT */}
        <div>
          <p className="text-sm tracking-widest text-gray-500 mb-4">
            NEW SEASON ARRIVAL
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Elevate Your <br /> Everyday Style
          </h1>

          <p className="text-gray-600 mb-8 max-w-md">
            Discover refined essentials designed for modern living. 
            Crafted with simplicity and elegance.
          </p>

          <Link to="/products">
            <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition">
              Shop Collection
            </button>
          </Link>
        </div>

        {/* RIGHT: HERO IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
            alt="Fashion Model"
            className="w-full max-w-md object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
    <section  className="bg-white py-20">
        <ShopByCategory/>
    </section>
    <section className="bg-white py-20">
      <FeaturedComponent/>
    </section>
    <section className="relative h-[70vh] w-full">
        <CollectionBanner/>
    </section>
    <section className="bg-white py-20">
      <BrandPromise/>
    </section>
    </>
  );
};

export default Home;
