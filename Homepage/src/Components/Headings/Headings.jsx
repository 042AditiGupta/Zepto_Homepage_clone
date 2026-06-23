import React, { useState } from "react";
import HeadingItem from "./HeadingItem";

import allImg from "../../assets/ALL.png";
import cafeImg from "../../assets/cafe.png";
import homeImg from "../../assets/Home.png";
import toysImg from "../../assets/Toys.png";
import freshImg from "../../assets/Fresh.png";
import electronicsImg from "../../assets/Electronics.png";
import mobilesImg from "../../assets/Mobile.png"; 
import beautyImg from "../../assets/Beauty.png";
import fashionImg from "../../assets/Fashion.png";

function Headings() {
  const categories = [
    { name: "All", imgUrl: allImg },
    { name: "Cafe", imgUrl: cafeImg },
    { name: "Home", imgUrl: homeImg },
    { name: "Toys", imgUrl: toysImg },
    { name: "Fresh", imgUrl: freshImg },
    { name: "Electronics", imgUrl: electronicsImg },
    { name: "Mobiles", imgUrl: mobilesImg },
    { name: "Beauty", imgUrl: beautyImg },
    { name: "Fashion", imgUrl: fashionImg },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
    className="w-full border-b border-gray-100 bg-white sticky z-40"
    style={{ top: 'var(--navbar-height, 64px)' }}
  >
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        
        {/* Smooth Horizontal Scroll Track for all devices */}
        <div className="flex items-center gap-3 sm:gap-5 md:gap-6 overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth py-0.5 snap-x">
          {categories.map((item, index) => (
            <div key={item.name} className="snap-mini">
              <HeadingItem
                title={item.name}
                imgUrl={item.imgUrl}
                active={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Headings;