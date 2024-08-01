import React, { useContext } from "react";
import { UserContext } from "./Context/UserProvider";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import OrderConfirmation from "./OrderConfirmation";

const AddToCart = () => {
  const { itemsInCart, DecrementClick, calculateTotalPrice, totalPrice } =
    useContext(UserContext);

  return (
    <div className="w-[30%] flex flex-col items-start justify-center bg-white rounded-[10px] p-[20px]">
      <div>
        <h2 className="text-red-700 font-bold font-poppins text-[30px]">
          Your cart ({itemsInCart.length})
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center mt-5 ml-3 w-[95%]">
        {itemsInCart.length === 0 ? (
          <>
            <img
              src="/images/illustration-empty-cart.svg"
              alt="illustration-empty-cart"
            />
            <h1 className="text-black text-[15px] font-serif">
              Your added items will appear here
            </h1>
          </>
        ) : (
          <>
            {itemsInCart.map((product) => (
              <div
                key={product.id}
                className="mb-4 w-full flex flex-row items-center justify-between bg-slate-100 px-[10px] py-[5px]"
              >
                <div className="flex flex-col items-start justify-center">
                  <h3 className="text-black text-[12px] font-serif">
                    {product.name}
                  </h3>
                  <div className="flex items-start justify-center gap-3">
                    <h5 className="text-[12px]">{product.quantity}X</h5>
                    <p className="flex items-start justify-start text-red-600 text-[12px]">
                      <BsCurrencyDollar className="mt-[3px] text-[12px]" />{" "}
                      {(product.price * product.quantity).toFixed(2)}{" "}
                    </p>
                  </div>
                </div>
                <IoCloseCircleOutline
                  className="cursor-pointer hover:text-red-700 text-[20px]"
                  onClick={() => DecrementClick(product.id)}
                />
              </div>
            ))}
            <div>
              <div className="flex items-center justify-between">
                <p className="text-black text-[16px] font-serif">
                  Total Order:
                </p>
                <p className="flex items-start justify-start text-black text-[16px] font-bold">
                  <BsCurrencyDollar className="mt-1 text-[16px]" />{" "}
                  {totalPrice.toFixed(2)}
                </p>
              </div>
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="mt-4 bg-orange-600 text-white py-2 px-16 rounded-[20px]"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Confirm Order
              </button>
              <OrderConfirmation />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AddToCart;

{
  /*
   */
}

{
  /* <div
key={idx}
className="mb-4 w-full flex flex-row items-center justify-between bg-slate-100 px-[10px] py-[5px]"
>
<img
  src={product.image}
  alt={product.name}
  className="w-[70px] rounded-[10px]"
/>
<h3 className="text-black text-[12px] font-serif">
  {product.name}
</h3>
<p className="flex items-start justify-start text-red-600 text-[12px]">
  <BsCurrencyDollar className="mt-1 text-[12px]" />{" "}
  {product.price.toFixed(2)}{" "}
</p> */
}
// </div>
