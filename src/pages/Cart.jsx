import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";

const Cart = () => {
  const {cart,updateQuantity,setCartValue }=useContext(CartContext);
  console.log("Cart items:", cart);


  const getCartTotal = () => {
  return cart.reduce((total, item) => {
    const quantity = item.quantity || 1; // default to 1 if quantity not set
    return total + item.price * quantity;
  }, 0);

  
};
  return (
    <div>
      <div class="pt-14 md:mx-24 mx-2">
        <div class=" text-2xl mb-3">
          <div class="inline-flex gap-2 items-center mb-3">
            <p class="text-gray-500">
              YOUR <span class="text-gray-700 font-medium">CART</span>
            </p>
            <p class="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
          </div>
        </div>
        <div>
          {
            cart.map((product)=>{
            return(
              <CartItems key={product._id} product={product} updateQuantity={updateQuantity} />
            )
          })
          }

        </div>
        <div class="flex justify-end my-20">
          <div class="w-full sm:w-[450px]">
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
                  <p>Rs. 0.00</p><p>Rs. {getCartTotal().toFixed(2)}</p>
                </div>
                <hr />
                <div class="flex justify-between">
                  <p>Shipping Fee</p>
                  <p>Rs. 10.00</p>
                </div>
                <hr />
                <div class="flex justify-between">
                  <b>Total</b>
                  <b>Rs. {(getCartTotal() + 10).toFixed(2)}</b>
                </div>
              </div>
            </div>
            <Link to={"/place-order"} class=" w-full text-end">
              <button class="bg-black text-white text-sm my-8 px-8 py-3" onClick={()=>setCartValue(getCartTotal().toFixed(2))}>
                PROCEED TO CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
