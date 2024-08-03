import React from "react";

const ThankYou = () => {
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-white">
        <h3 className="font-extrabold text-[25px] text-orange-600 ">Order Placement sucessfull!</h3>
        <p className="pt-4 text-black font-serif">
          Thanks for patronizing our restaurant, enjoy your meal{" "}
        </p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="bg-orange-600 text px-10 py-3 rounded-[15px]">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ThankYou;
