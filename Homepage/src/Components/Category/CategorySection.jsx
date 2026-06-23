import { useRef, useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import CategoryCard from "./CategoryCard";

import fruits from "../../assets/FruitsVegetables.webp";
import dairy from "../../assets/DairyBread.webp";
import atta from "../../assets/AttaRice.webp";
import meat from "../../assets/MeatEgg.webp";
import frozenFood from "../../assets/frozenFood.webp";
import masala from "../../assets/Masala.webp";
import Icecream from "../../assets/Icecream.webp";
import PackagedFood from "../../assets/PackagedFood.webp";
import TeaCoffee from "../../assets/TeaCofee.webp";
import Breakfast from "../../assets/BreakFast.webp";
import Munchies from "../../assets/Munchies.webp";

function CategorySection() {
  const sliderRef = useRef(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const categories = [
    { title: "Fruits & Vegetables", image: fruits },
    { title: "Dairy, Bread & Eggs", image: dairy },
    { title: "Atta, Rice, Oil & Dals", image: atta },
    { title: "Meat, Fish & Eggs", image: meat },
    { title: "Frozen Food", image: frozenFood },
    { title: "Masala & Dry Fruits", image: masala },
    { title: "Ice Creams & More", image: Icecream },
    { title: "Packaged Food", image: PackagedFood },
    { title: "Tea, Coffee & More", image: TeaCoffee },
    { title: "Breakfast & Sauces", image: Breakfast },
    { title: "Munchies", image: Munchies },
  ];

  // ✅ optimized arrow update (no unnecessary state spam)
  const updateArrows = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const { scrollLeft, scrollWidth, clientWidth } = slider;

    const canScrollLeft = scrollLeft > 0;
    const canScrollRight = scrollLeft < scrollWidth - clientWidth - 2;

    setShowLeft((prev) => prev !== canScrollLeft ? canScrollLeft : prev);
    setShowRight((prev) => prev !== canScrollRight ? canScrollRight : prev);
  };

  // ✅ throttle scroll handler (performance improvement)
  let scrollTimeout = null;

  const handleScroll = () => {
    if (scrollTimeout) return;

    scrollTimeout = setTimeout(() => {
      updateArrows();
      scrollTimeout = null;
    }, 50);
  };

  useEffect(() => {
    updateArrows();

    const handleResize = () => updateArrows();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <section className="relative max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-10 py-4 sm:py-6">

      {/* Left Arrow */}
      {showLeft && (
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black text-white items-center justify-center shadow-lg hover:scale-105 transition"
        >
          <FaArrowLeft />
        </button>
      )}

      {/* Right Arrow */}
      {showRight && (
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black text-white items-center justify-center shadow-lg hover:scale-105 transition"
        >
          <FaArrowRight />
        </button>
      )}

      {/* Slider */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide px-1"
      >
        {categories.map((item) => (
          <div key={item.title} className="flex-shrink-0">
            <CategoryCard image={item.image} title={item.title} />
          </div>
        ))}
      </div>

    </section>
  );
}

export default CategorySection;