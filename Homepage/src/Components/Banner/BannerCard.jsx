import React from "react";

function BannerCard({ imageSrc, altText }) {
  return (
    <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
      
      <img
        src={imageSrc}
        alt={altText}
        width={800}
        height={400}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover block rounded-xl hover:scale-[1.02] transition-transform duration-300"
      />

    </div>
  );
}

export default BannerCard;