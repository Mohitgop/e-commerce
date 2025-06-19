function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-lg shadow-sm">
      <img src={product.image} alt={product.name} className="w-full h-56 sm:h-60 md:h-64 lg:h-72 object-center object-cover hover:scale-110 transition-transform duration-300 ease-in-out" />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-500">₹{product.price}</p>
    </div>
  );
}
export default ProductCard;
