import React, { useContext, useState } from "react";
import { data } from "../utilies/data";
import { BsCurrencyDollar } from "react-icons/bs";
import { UserContext } from "./Context/UserProvider";

const ProductMapping = () => {
  const { AddToCart, IncrementClick, DecrementClick, itemsInCart } = useContext(UserContext);
  const [toggleStates, setToggleStates] = useState({});

  const AddToCartHandler = (product) => {
    AddToCart(product);
    ToggleButtons(product.id);
  };

  const ToggleButtons = (id) => {
    setToggleStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };

  // Get the quantity of a product in the cart
  const getQuantity = (id) => {
    const item = itemsInCart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="productmapping w-full md:w-[66%] flex flex-col items-start justify-center gap-5">
      <h1 className="text-black text-[30px] font-bold">Desserts</h1>
      <div className="productmapping grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 flex-col items-center justify-center">
        {data.map((product) => (
          <div 
            key={product.id} 
            className="flex flex-col items-start justify-center w-full sm:w-full"
          >
            <div
              style={{ backgroundImage: `url(${product.image})` }}
              className={`add flex items-center justify-center relative w-full h-[200px] bg-cover bg-center rounded-[10px] mb-4 ${toggleStates[product.id] ? 'border-2 border-orange-600' : ''}`}
            >
              {!toggleStates[product.id] ? (
                <button
                  className=" flex flex-row items-center justify-center gap-[5px] bg-white mt-[190px] py-[5px] px-[18px] rounded-[35px] border-2 border-gray-300"
                  onClick={() => AddToCartHandler(product)}
                >
                  <img src="/images/icon-add-to-cart.svg" alt="icon-add-to-cart" />
                  <h5 className="text-black font-bold text-[15px]">Add to cart</h5>
                </button>
              ) : (
                <div className="cart-item flex flex-row items-center justify-between gap-[5px] bg-orange-600 mt-[190px] py-[5px] px-[15px] rounded-[35px] w-[73%]">
                  <button
                    onClick={() => DecrementClick(product.id)}
                    className="decrement-btn flex items-center justify-center bg-orange-600 text-white size-5 rounded-[50px] border-2 border-white"
                  >
                    -
                  </button>
                  <span className="quantity mx-2 text-white">{getQuantity(product.id)}</span>
                  <button
                    onClick={() => IncrementClick(product.id)}
                    className="increment-btn flex items-center justify-center bg-orange-600 text-white size-5 rounded-[50px] border-2 border-white"
                  >
                    
                    +
                  </button>
                </div>
              )}
            </div>
            <h2 className="text-[13px]">{product.category}</h2>
            <h2 className="text-black text-[15px] font-bold">{product.name}</h2>
            <p className="flex items-start justify-start text-red-600">
              <BsCurrencyDollar className="mt-1 size-4" /> {product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductMapping;
