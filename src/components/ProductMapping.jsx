import React from "react";
import { data } from "../utilies/data";
import { BsCurrencyDollar } from "react-icons/bs";

const ProductMapping = () => {
  return (
    <>
      <div className="w-[66%] flex flex-col items-start justify-center gap-5">
        <h1 className="text-black text-[30px] font-bold">Desserts</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 flex-col items-center justify-center ">
          {data.map((data, idx) => (
            <div key={idx} className="flex flex-col items-start justify-center">
              <div
                style={{ backgroundImage: `url(${data.image})` }}
                className="flex items-center justify-center relative size-[200px] bg-cover bg-center rounded-[10px] mb-4"
              >
                <button className="flex flex-row items-center justify-center gap-[5px] bg-white mt-[190px] py-[5px] px-[18px] rounded-[35px] border-2 border-gray-300">
                  <img
                    src="/images/icon-add-to-cart.svg"
                    alt="icon-add-to-cart.svg"
                  />
                  <h5 className="text-black font-bold text-[15px]">
                    Add to cart
                  </h5>
                </button>
              </div>
              <h2 className="text-[13px]">{data.category}</h2>
              <h2 className="text-black text-[15px] font-bold">{data.name}</h2>
              <p className="flex items-start justify-start text-red-600">
                <BsCurrencyDollar className="mt-1 size-4" />{" "}
                {data.price.toFixed(2)}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductMapping;
