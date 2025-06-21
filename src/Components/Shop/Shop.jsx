import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { ProductContext } from "../../Context/ProductContext";
import { useLocation } from "react-router-dom";

const Shop = () => {
  const [sortOption, setSortOption] = useState("relavent");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((cat) => cat !== value)
        : [...prev, value]
    );
  };

  const handleTypeChange = (e) => {
    const value = e.target.value;
    setSelectedTypes((prev) =>
      prev.includes(value)
        ? prev.filter((type) => type !== value)
        : [...prev, value]
    );
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  const { products } = useContext(ProductContext);



const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const searchTerm = queryParams.get("search")?.toLowerCase() || "";

const displayedProducts = products
  .filter((p) =>
    selectedCategories.length === 0 || selectedCategories.includes(p.category)
  )
  .filter((p) =>
    selectedTypes.length === 0 || selectedTypes.includes(p.type)
  )
  .filter((p) =>
    p.name.toLowerCase().includes(searchTerm)
  )
  .sort((a, b) => {
    if (sortOption === "low-high") return a.price - b.price;
    if (sortOption === "high-low") return b.price - a.price;
    return 0;
  })


  return (
    <div>
      <div class="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 md:mx-24 mx-2">
        <div class="min-w-60">
          <p class="my-2 text-xl flex items-center cursor-pointer gap-2">
            FILTERS
            <img
              class="h-3 sm:hidden "
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEJwAABCcASbNOjQAAAGASURBVEhLrZa7cYQwFEX5RiRbwpawLoEEhtAVeN2BOzCuxHYFJMzwSWjBJVCCIzLA74KQWRAgBGcG0GOGw9WHERrIsizM8/y9Kw6iJ0lyN03zk9Wh53kfrK2EQbywNgjxAtZWwqiq6pmuP32paUh7RKrjFEXRxXGcgpo31KCu69cgCL5YKU0nBGdJuRBQV6/UZUiv/Z390gchEEnbtn3yfZ+P8xoGu3IoTUmpXGqW/Z1OWNBa5UOxxizhwDRp0zS/uq67W0kXhUBFuioEe6WbQiCSYqIw3qjHzCZFxHSi6HO90FHgRajHSCUcmCallCWldcdJdwnBlnS3EKxJlYQgjuObZVkFxhP1IJWaFBG2bWu0fFj1j5IQXSZZRMdDOqUunzoppy4bGRmQEk5lJFr8njeFe2RgVbhXBhaFKjIgFKrKwEw4lQGaUbVNCnuzQHaXlQEuHG30U9k3K6Xouiz6a1CRAf1MGTDOlAGDlgR/mDaityMyDi2VME3TE36JNe0PEvQ33QXCa5oAAAAASUVORK5CYII="
              alt=""
            />
          </p>
          <div class="border border-gray-300 pl-5 py-3 mt-6 hidden sm:block">
            <p class="mb-3 text-sm font-medium">CATEGORIES</p>
            <div class="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p class="flex gap-2">
                <input
                  class="w-3"
                  type="checkbox"
                  value="Men"
                  onChange={handleCategoryChange}
                />{" "}
                Men
              </p>
              <p class="flex gap-2">
                <input
                  class="w-3"
                  type="checkbox"
                  value="Women"
                  onChange={handleCategoryChange}
                />{" "}
                Women
              </p>
              <p class="flex gap-2">
                <input
                  class="w-3"
                  type="checkbox"
                  value="Kids"
                  onChange={handleCategoryChange}
                />{" "}
                kids
              </p>
            </div>
          </div>
          <div class="border border-gray-300 pl-5 py-3 my-5 hidden sm:block">
            <p class="mb-3 text-sm font-medium">TYPE</p>
            <div class="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p class="flex gap-2">
                <input
                  class="w-3"
                  type="checkbox"
                  value="Topwear"
                  onChange={handleTypeChange}
                />{" "}
                Topwear
              </p>
              <p class="flex gap-2">
                <input
                  class="w-3"
                  type="checkbox"
                  value="Bottomwear"
                  onChange={handleTypeChange}
                />{" "}
                Bottomwear
              </p>
              <p class="flex gap-2">
                <input
                  class="w-3"
                  type="checkbox"
                  value="Winterwear"
                  onChange={handleTypeChange}
                />{" "}
                Winterwear
              </p>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <div class="md:flex justify-between text-base sm:text-2xl mb-4">
            <div class="inline-flex gap-2 items-center mb-3">
              <p class="text-gray-500">
                ALL <span class="text-gray-700 font-medium">COLLECTIONS</span>
              </p>
              <p class="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
            </div>
            <select
              className="border-2 border-gray-300 text-sm px-2"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="relavent">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {displayedProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
