import { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";

function SearchBar() {
  const products = [
    "banana",
    "milk",
    "kurkure",
    "bread",
    "apple",
    "chips",
    "tea",
    "rice",
    "ice cream",
    "chocolate box",
  ];

  const [currentProduct, setCurrentProduct] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [products.length]);

  return (
     <div
    className="
      flex items-center
      w-full
      h-11 sm:h-12
      gap-3
      pl-4 pr-3
      rounded-xl
      border border-gray-200
      bg-gray-100
      focus-within:bg-white
      focus-within:border-gray-300
      transition-all
    "
  >

    <IoSearchOutline
      className="text-xl text-gray-500 flex-shrink-0"
    />

    <input
      type="text"
      placeholder={`Search for "${products[currentProduct]}"`}
      className="
        w-full
        min-w-0
        bg-transparent
        outline-none
        text-sm
        sm:text-base
        text-gray-800
        placeholder:text-black
        font-medium
      "
    />

  </div>
  );
}

export default SearchBar;