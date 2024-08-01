import React from "react";
import ProductMapping from "../components/ProductMapping";
import AddToCart from "../components/AddToCart";

const Home = () => {
  return (
    <div className="w-full flex items-center justify-center text-center bg-pink-50">
      <div className="w-[82%]">
        <div className="w-full flex flex-col md:flex-row items-start justify-center gap-5 mt-20">
          <ProductMapping />
          <AddToCart />
        </div>
      </div>
    </div>
  );
};

export default Home;
