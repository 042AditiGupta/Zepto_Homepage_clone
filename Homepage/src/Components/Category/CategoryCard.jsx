import { useEffect, useRef, useState } from "react";

function CategoryCard({ image, title }) {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px", // pre-load before entering viewport
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center w-[72px] sm:w-[85px] md:w-[100px] lg:w-[120px] flex-shrink-0 cursor-pointer group">

      {/* Image Container */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl bg-[#F4F4F4] overflow-hidden flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300">

        <img
          ref={imgRef}
          src={isVisible ? image : ""}
          alt={title}
          className={`
            w-full h-full object-contain
            transition-opacity duration-500
            ${isVisible ? "opacity-100" : "opacity-0"}
          `}
        />
      </div>

      {/* Title */}
      <p className="mt-2 w-full px-1 text-center text-[10px] sm:text-[11px] md:text-xs lg:text-sm font-medium text-gray-800 leading-tight line-clamp-2 min-h-[28px] sm:min-h-[32px] md:min-h-[36px]">
        {title}
      </p>

    </div>
  );
}

export default CategoryCard;