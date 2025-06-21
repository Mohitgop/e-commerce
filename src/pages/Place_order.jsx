import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Place_order = () => {
  const {cartValue }=useContext(CartContext);
  return (
    <div>
      <form class="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] mx-2 md:mx-24">
        <div class="flex flex-col gap-4 w-full sm:max-w-[480px]">
          <div class="text-xl sm:text-2xl my-3">
            <div class="inline-flex gap-2 items-center mb-3">
              <p class="text-gray-500">
                DELIVERY{" "}
                <span class="text-gray-700 font-medium">INFORMATION</span>
              </p>
              <p class="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
            </div>
          </div>
          <div class="flex gap-3">
            <input
              required=""
              name="firstName"
              class="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="First name"
              value=""
            />
            <input
              required=""
              name="lastName"
              class="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="Last name"
              value=""
            />
          </div>
          <input
            required=""
            name="email"
            class="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="email"
            placeholder="Email address"
            value=""
          />
          <input
            required=""
            name="street"
            class="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Street"
            value=""
          />
          <div class="flex gap-3">
            <input
              required=""
              name="city"
              class="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="City"
              value=""
            />
            <input
              name="state"
              class="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="State"
              value=""
            />
          </div>
          <div class="flex gap-3">
            <input
              required=""
              name="zipcode"
              class="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="number"
              placeholder="Zipcode"
              value=""
            />
            <input
              required=""
              name="country"
              class="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="Country"
              value=""
            />
          </div>
          <input
            required=""
            name="phone"
            class="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Phone"
            value=""
          />
        </div>
        <div class="mt-8">
          <div class="mt-8 min-w-80">
            <div class="w-full">
              <div class="text-2xl">
                <div class="inline-flex gap-2 items-center mb-3">
                  <p class="text-gray-500">
                    CART <span class="text-gray-700 font-medium">TOTALS</span>
                  </p>
                  <p class="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
                </div>
              </div>
              <div class="flex flex-col gap-2 mt-2 text-sm">
                <div class="flex justify-between">
                  <p>Subtotal</p>
                  <p>Rs. {cartValue}</p>
                </div>
                <hr />
                <div class="flex justify-between">
                  <p>Shipping Fee</p>
                  <p>Rs. 10.00</p>
                </div>
                <hr />
                <div class="flex justify-between">
                  <b>Total</b>
                   <b>Rs. {(Number(cartValue || 0) + 10).toFixed(2)}</b>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12">
            <div class="inline-flex gap-2 items-center mb-3">
              <p class="text-gray-500">
                PAYMENT <span class="text-gray-700 font-medium">METHOD</span>
              </p>
              <p class="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
            </div>
            <div class="flex gap-3 flex-col lg:flex-row">
              <div class="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <p class="min-w-3.5 h-3.5 border rounded-full "></p>
                <img
                  class="h-5 mx-4"
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div class="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <p class="min-w-3.5 h-3.5 border rounded-full "></p>
                <img
                  class="h-5 mx-4"
                  src="/assets/razorpay_logo-DrY6yMWi.png"
                  alt=""
                />
              </div>
              <div class="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <p class="min-w-3.5 h-3.5 border rounded-full bg-green-400"></p>
                <p class="text-gray-500 text-sm font-medium mx-4">
                  CASH ON DELIVERY
                </p>
              </div>
            </div>
            <div class="w-full text-end mt-8">
              <button
                type="submit"
                class="bg-black text-white px-16 py-3 text-sm"
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Place_order;
