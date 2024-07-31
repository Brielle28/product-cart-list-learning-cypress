import React from "react";

const AddToCart = () => {
  return (
    <>
      <div className="w-[30%] flex flex-col items-start justify-center bg-white rounded-[10px] p-[20px]">
        <div>
          <h2 className="text-red-700 font-bold font-poppins text-[30px]">Your cart (0)</h2>
        </div>
          <div className="flex flex-col items-center justify-center mt-5 ml-10">
            <img src="/images/illustration-empty-cart.svg" alt="illustration-empty-cart" />
            <h1 className="text-black text-[15px] font-serif">
                Your added items will appear here
            </h1>
          </div>
      </div>
    </>
  );
};

export default AddToCart;
