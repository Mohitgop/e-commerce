import React, { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { ProductContext } from "../../Context/ProductContext";

function RelatedProducts() {
    
  const { products } = useContext(ProductContext);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <div className="inline-flex gap-2 items-center mb-3">
          <p className="text-gray-500">
            RELATED <span className="text-gray-700 font-medium uppercase">products</span>
          </p>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
        {/* <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Our best seller — loved by many, styled by all. Elevate your look with
          timeless charm.
        </p> */}
      </div>
      <div className="md:mx-16 mx-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {products.slice(0,5).map((p, i) => (
            <ProductCard key={i} id={4} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RelatedProducts;
