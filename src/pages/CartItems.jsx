import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";

function CartItems({ product, updateQuantity }) {
    const {removeFromCart }=useContext(CartContext);
  return (
    <div class="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
      <div class=" flex items-start gap-6">
        <img
          class="w-16 sm:w-20"
          src={product.image}
          alt=""
        />
        <div>
          <p class="text-xs sm:text-lg font-medium">{product.name}</p>
          <div class="flex items-center gap-5 mt-2">
            <p>Rs.{product.price * product.quantity}</p>
            <p class="px-2 sm:px-3 sm:py-1 border bg-slate-50">{product.size}</p>
          </div>
        </div>
      </div>
      <input
        class="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
        type="number"
        min="1"
        value={product.quantity}
        onChange={(e) => updateQuantity(product._id, parseInt(e.target.value))}
      />
      <img
        class="w-4 mr-4 sm:w-5 cursor-pointer"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFRSURBVHgB7ZfhTcMwFITPEf/JCBkBNggTUCYAJqAj0A1ggzABZYHEbJANmm4QFgicwUJVlTq8F6Wkkj/p5DaX1Ff7pc0zEJLn+ROHB8ElDXVjra0F1yCBHEkoR0ZdQ8gZ9DSUDfgZlUPJqGDcnvtDJrc8x4hgmq08CoZfbAFZDdz5saXWgfNSauFf115/wX3uygX7xPxYuq0sMC/cir2Z/aM7K8jatleYCH9zVP7tI+da7fqzLf4YTMpsg6l++Vm3GX7+M99ZtOuAX9N/gQLtirlJl9QrQ6QBvzjgTxbsd7IkSc4V/iCx+KXEYFJiMCkxmJQYTEoMJkUbrPFjW5blNuCj67oPKNB24s/U1hiz6TNdY8HHnW+/qqoWClTBOLGbrBg4J+gPEYtfykk2I6lvKqYi2AuEgl1QG/wTfVupur1H0uwf6FuxS+oWx6Pt6z2/APN7VZph5zBWAAAAAElFTkSuQmCC"
        alt=""
        onClick={()=>removeFromCart(product._id)}
      />
    </div>
  );
}

export default CartItems;
