import React, { useContext, useEffect, useState } from "react";
import RelatedProducts from "./RelatedProducts";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({
    category: "",
    createdAt: "",
    description:
      "",
    image:
      "",
    name: "",
    price: 0,
    stock: 0,
    size:null,
    _id: "",
  });
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    axios
      .get(`https://server-ecommerce-production-812e.up.railway.app/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        // console.log("Product details fetched:", res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch product details", err);
      });
  }, []);

  const handleAddToCart = () => {
    if (product && product.size) {
      addToCart(product);
      toast.success("Product added to cart");
      console.log("Product added to cart:", product);
    } else {
      console.error("No product to add to cart");
      toast.error("Please select a size before adding to cart");
    }
  };

  return (
    <div className="mx-2 md:mx-24">
      <div class="pt-10 transition-opacity ease-in duration-500 opacity-100">
        <div class="flex gap-12 flex-col sm:flex-row">
          <div class="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div class="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              <img
                src={product.image}
                alt="Product 0"
                class="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            </div>
            <div class="w-full sm:w-[80%]">
              <img
                class="w-full h-auto"
                src={product.image}
                alt="Selected Product"
              />
            </div>
          </div>
          <div class="flex-1">
            <h1 class="font-medium text-2xl mt-2"> {product.name}</h1>
            <div class="flex items-center gap-1 mt-2">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHESURBVHgBtVVNTsJQEP6mgmtuIO5cGC0nEE/g74KdeARPIDdQTqBLEwXhBnACiBDjjnIDgiuBvvFRrOnPezhN5EtI6XSmX2b6ffMIGcGXbhmKr0CqTY1BS1pHyAi+OBjpS1H/JvCdXWr1J5I6BxkQdLMiWaKA3MKV1mYiAuuRRaGcEwiRjQhcjt0SqhBCTJQYW4gCX+6XJfXyjpJjCyEcn0h1fOoWsKV6SHe0hEh9AdGvN+xUrs60K4zh6Vd17Czac0HexQFjs5iE38jDJsEhUX52vDEyRh9qdhwTA5/v34KcGv4LzPfUHNws/6ZUF/iCnQeYFSYk0NNhrtLroBuGjPLmyl4R8/ydfnyK7Cwd+J9n1PJicl/ro8imFnLAo+bbrumR80eh6AiQwNoRV1w9PjVCVvBWkZq9cTJs72iuxEdAHH7VFLUTsfwIiIESR8k6omBstt2mvQF/UQKrGsxMZT4v7SSjOWOuaWxpb/S157pGz5G/tEU9GrKMLukf7Q01LUUNGGS9DDur9cWPifyU/8wdQeFHkFreqkaNYR0W0NOHpy/Xen15kfWVsoV9M3zlD5Hzx/T83ocQq42yfQR/2k5uhm9CG7C+Nfr7TwAAAABJRU5ErkJggg=="
                alt="star"
                class="w-3.5"
              />

              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHESURBVHgBtVVNTsJQEP6mgmtuIO5cGC0nEE/g74KdeARPIDdQTqBLEwXhBnACiBDjjnIDgiuBvvFRrOnPezhN5EtI6XSmX2b6ffMIGcGXbhmKr0CqTY1BS1pHyAi+OBjpS1H/JvCdXWr1J5I6BxkQdLMiWaKA3MKV1mYiAuuRRaGcEwiRjQhcjt0SqhBCTJQYW4gCX+6XJfXyjpJjCyEcn0h1fOoWsKV6SHe0hEh9AdGvN+xUrs60K4zh6Vd17Czac0HexQFjs5iE38jDJsEhUX52vDEyRh9qdhwTA5/v34KcGv4LzPfUHNws/6ZUF/iCnQeYFSYk0NNhrtLroBuGjPLmyl4R8/ydfnyK7Cwd+J9n1PJicl/ro8imFnLAo+bbrumR80eh6AiQwNoRV1w9PjVCVvBWkZq9cTJs72iuxEdAHH7VFLUTsfwIiIESR8k6omBstt2mvQF/UQKrGsxMZT4v7SSjOWOuaWxpb/S157pGz5G/tEU9GrKMLukf7Q01LUUNGGS9DDur9cWPifyU/8wdQeFHkFreqkaNYR0W0NOHpy/Xen15kfWVsoV9M3zlD5Hzx/T83ocQq42yfQR/2k5uhm9CG7C+Nfr7TwAAAABJRU5ErkJggg=="
                alt="star"
                class="w-3.5"
              />

              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHESURBVHgBtVVNTsJQEP6mgmtuIO5cGC0nEE/g74KdeARPIDdQTqBLEwXhBnACiBDjjnIDgiuBvvFRrOnPezhN5EtI6XSmX2b6ffMIGcGXbhmKr0CqTY1BS1pHyAi+OBjpS1H/JvCdXWr1J5I6BxkQdLMiWaKA3MKV1mYiAuuRRaGcEwiRjQhcjt0SqhBCTJQYW4gCX+6XJfXyjpJjCyEcn0h1fOoWsKV6SHe0hEh9AdGvN+xUrs60K4zh6Vd17Czac0HexQFjs5iE38jDJsEhUX52vDEyRh9qdhwTA5/v34KcGv4LzPfUHNws/6ZUF/iCnQeYFSYk0NNhrtLroBuGjPLmyl4R8/ydfnyK7Cwd+J9n1PJicl/ro8imFnLAo+bbrumR80eh6AiQwNoRV1w9PjVCVvBWkZq9cTJs72iuxEdAHH7VFLUTsfwIiIESR8k6omBstt2mvQF/UQKrGsxMZT4v7SSjOWOuaWxpb/S157pGz5G/tEU9GrKMLukf7Q01LUUNGGS9DDur9cWPifyU/8wdQeFHkFreqkaNYR0W0NOHpy/Xen15kfWVsoV9M3zlD5Hzx/T83ocQq42yfQR/2k5uhm9CG7C+Nfr7TwAAAABJRU5ErkJggg=="
                alt="star"
                class="w-3.5"
              />

              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHESURBVHgBtVVNTsJQEP6mgmtuIO5cGC0nEE/g74KdeARPIDdQTqBLEwXhBnACiBDjjnIDgiuBvvFRrOnPezhN5EtI6XSmX2b6ffMIGcGXbhmKr0CqTY1BS1pHyAi+OBjpS1H/JvCdXWr1J5I6BxkQdLMiWaKA3MKV1mYiAuuRRaGcEwiRjQhcjt0SqhBCTJQYW4gCX+6XJfXyjpJjCyEcn0h1fOoWsKV6SHe0hEh9AdGvN+xUrs60K4zh6Vd17Czac0HexQFjs5iE38jDJsEhUX52vDEyRh9qdhwTA5/v34KcGv4LzPfUHNws/6ZUF/iCnQeYFSYk0NNhrtLroBuGjPLmyl4R8/ydfnyK7Cwd+J9n1PJicl/ro8imFnLAo+bbrumR80eh6AiQwNoRV1w9PjVCVvBWkZq9cTJs72iuxEdAHH7VFLUTsfwIiIESR8k6omBstt2mvQF/UQKrGsxMZT4v7SSjOWOuaWxpb/S157pGz5G/tEU9GrKMLukf7Q01LUUNGGS9DDur9cWPifyU/8wdQeFHkFreqkaNYR0W0NOHpy/Xen15kfWVsoV9M3zlD5Hzx/T83ocQq42yfQR/2k5uhm9CG7C+Nfr7TwAAAABJRU5ErkJggg=="
                alt="star"
                class="w-3.5"
              />

              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHASURBVHgBtVZLUsJAEO0OaFmuuIHhBIJLyg/ZWIIL8QTGI3gCOQKcQG+gLKwswVLLnXID4AbZiR/S9owEyWQSJxZ5izB00/2mH9M9QcgIevDqYMEZzKiH+81b0ziEjKAnbwQENq98+Hwvo3Pqm8RZkAGyGkkigCUoblRMYzMRScmWgXQChshGBFBXvrtgCGOiqGwhsCTtqySKybbgMpPPiIheb0oQly2ES33pT4U83oveSKaqAGElJcuYn4NEv+g5mebRI8gV5P9IR3JHOfLgnOgLnPzIaCjyR0YQj5dLJmzDykAd3G1eiFVs1s374oo9NvwXQp0CuVhr3oem2PHGvcZASoloPJkVcPy0ukwi86ZFcHWjTJVxJbzRss6V3rCIRleACRIromfPhhmMICs2Axt3jieqObkiQuMrIII3y9WZk4kC8ysgAtLPRC2RlE3MN32mDmBQZdHbej/U6eVuSzUW9bmEbKTuVO2NIZ9KsY733LTQ4md32aSXLqCWYtH3RthzANd/xCdU9FuFDwVsY+2om/QTdBpj/jjn8TVejC+kWFtojzf1+T9ax234sCboHA7BEDJujQ74NaynvoZ9A1WXpcuUkbt/AAAAAElFTkSuQmCC"
                alt="star dull"
                class="w-3.5"
              />

              <p class="pl-2">(122)</p>
            </div>
            <p class="mt-5 text-3xl font-medium">Rs.{product.price}</p>
            <p class="mt-5 text-gray-500 md:w-4/5">{product.description}</p>
            <div class="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div class="flex gap-2">
                <button
                   class={`border py-2 px-4 cursor-pointer rounded-md ${
                    product.size === "S" ? " bg-black text-white" : " bg-gray-100 "}`}
                  onClick={() =>
                    setProduct((prev) => ({
                      ...prev,
                      size: "S",
                    }))
                  }
                >
                  S
                </button>
                <button
                   class={`border py-2 px-4 cursor-pointer rounded-md ${
                    product.size === "M" ? " bg-black text-white" : " bg-gray-100 "}`}
                  onClick={() =>
                    setProduct((prev) => ({
                      ...prev,
                      size: "M",
                    }))
                  }
                >
                  M
                </button>
                <button
                   class={`border py-2 px-4 cursor-pointer rounded-md ${
                    product.size === "L" ? " bg-black text-white" : " bg-gray-100 "}`}
                  onClick={() =>
                    setProduct((prev) => ({
                      ...prev,
                      size: "L",
                    }))
                  }
                >
                  L
                </button>
                <button
                  class={`border py-2 px-4 cursor-pointer rounded-md ${
                    product.size === "XL" ? " bg-black text-white" : " bg-gray-100 "}`}
                  onClick={() =>
                    setProduct((prev) => ({
                      ...prev,
                      size: "XL",
                    }))
                  }
                >
                  XL
                </button>
                <button
                  class={`border py-2 px-4 cursor-pointer rounded-md ${
                    product.size === "XXL" ? " bg-black text-white" : " bg-gray-100 "}`}
                  onClick={() =>
                    setProduct((prev) => ({
                      ...prev,
                      size: "XXL",
                    }))
                  }
                >
                  XXL
                </button>
              </div>
            </div>
            <button
              class="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 disabled:opacity-50"
              onClick={handleAddToCart}
              
              disabled={!product.size}
            >
              ADD TO CART
            </button>
            <hr class="mt-8 sm:w-4/5" />
            <div class="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>
        <div class="mt-20">
          <div class="flex">
            <b class="border px-5 py-3 text-sm">Description</b>
            <p class="border px-5 py-3 text-sm">Reviews (122)</p>
          </div>
          <div class="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
            <p>{product.description}</p>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
}

export default ProductDetails;
