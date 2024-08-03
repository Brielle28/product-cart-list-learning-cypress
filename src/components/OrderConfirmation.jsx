import React, { useContext } from "react";
import { UserContext } from "./Context/UserProvider";
import { BsCurrencyDollar } from "react-icons/bs";
import ThankYou from "./ThankYou";

const OrderConfirmation = () => {
  const { itemsInCart, totalPrice } = useContext(UserContext);

  const handleStartOrder = () => {
    document.getElementById("my_modal_5").showModal();
    document.getElementById("my_modal_3").close();
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box flex flex-col items-start justify-start bg-white relative p-4">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            ✕
          </button>
          <div className="flex flex-col items-start mb-4">
            <img
              src="images/icon-order-confirmed.svg"
              alt="icon-order-confirmed"
              className="mb-4 "
            />
            <p className="text-[35px] text-black font-bold font-sans">
              Order Confirmed
            </p>
            <p className="text-[15px] text-gray-600 font-sans font-normal pb-4">
              We hope you enjoy your food!
            </p>
          </div>
          <div className="flex flex-col w-full bg-slate-100">
            {itemsInCart.map((product, idx) => (
              <div
                key={idx}
                className="mb-4 flex flex-row items-center justify-between bg-slate-100 px-[10px] py-[5px]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[70px] rounded-[10px]"
                />
                <div className="flex flex-col items-start">
                  <h3 className="text-black text-[12px] font-serif">
                    {product.name}
                  </h3>
                  <div className="flex items-start justify-center gap-2">
                    <h3 className="text-[12px]">{product.quantity}X</h3>
                    <p className="flex items-start justify-start text-gray-600 text-[12px]">
                      <BsCurrencyDollar className="mt-[3px] text-[12px]" />{" "}
                      {(product.price * product.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
                <p className="flex items-start justify-start text-gray-600 text-[12px]">
                  <BsCurrencyDollar className="mt-[3px] text-[12px]" />{" "}
                  {(product.price * product.quantity).toFixed(2)}
                </p>
              </div>
            ))}
            <div className="flex items-center justify-between w-full px-2 mt-4">
              <h5 className="font-normal">Order Total</h5>
              <p className="text-black text-[16px] font-bold flex items-center">
                <BsCurrencyDollar className="mt-[1px] text-[16px]" />{" "}
                {totalPrice.toFixed(2)}
              </p>
            </div>
          </div>
          <button
            className="startorder mt-[30px] bg-orange-600 text-white py-[10px] px-16 rounded-[20px] w-full"
            onClick={handleStartOrder}
          >
            Start Order
          </button>
          <ThankYou/> 
        </div>
      </dialog>
    </>
  );
};

export default OrderConfirmation;
