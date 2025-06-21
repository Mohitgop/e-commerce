import { Link } from "react-router-dom";
// import Product from "../../pages/Product";

function ProductCard({ product }) {
  console.log("ProductCard rendered with product:", product);
  return (
    <a
      class="text-gray-700 cursor-pointer block"
      href={`/product/${product._id}`}
    >
      <div class="overflow-hidden rounded-lg shadow-sm">
        <img
          class="w-full h-56 sm:h-60 md:h-64 lg:h-72 object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
         src={product.image} alt={product.name}
        />
      </div>
      <p class="pt-3 pb-1 text-sm sm:text-base md:text-lg font-medium truncate">
        {" "}
        {product.name}
      </p>
      <p class="text-sm sm:text-base md:text-lg font-semibold">Rs.{product.price}</p>
    </a>
  );
}
export default ProductCard;
