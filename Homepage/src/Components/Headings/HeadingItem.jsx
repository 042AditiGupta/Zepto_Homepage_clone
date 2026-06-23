import React from "react";

function HeadingItem({ title, imgUrl, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center justify-center gap-1.5 px-2 sm:px-3 pb-2 pt-2.5 text-sm sm:text-[15px] font-medium whitespace-nowrap border-b-[2.5px] transition-all duration-150 ease-out outline-none select-none shrink-0
    ${
    active
      ? "text-[#ff007a] border-[#ff007a] font-bold"
      : "text-gray-700 border-transparent hover:text-[#ff007a] hover:border-gray-200"
    }`}
    >
      {/* Icon Masking Element */}
      {imgUrl && (
        <span
          className={`w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] bg-current inline-block transition-all duration-150 ease-out shrink-0
            ${active ? "opacity-100" : "opacity-65 group-hover:opacity-100"}`}
          style={{
            WebkitMaskImage: `url(${imgUrl})`,
            maskImage: `url(${imgUrl})`,
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
          aria-hidden="true"
        />
      )}

      {/* Text Node Container */}
      <span className="leading-none tracking-wide">{title}</span>
    </button>
  );
}

export default HeadingItem;
