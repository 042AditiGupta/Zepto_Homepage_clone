import React from 'react';
import BannerCard from './BannerCard';

import LeftBanner from '../../assets/LeftBanner.webp'; 
import RightBanner from '../../assets/RightBanner.webp'; 

function BannerSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4">
      <div className="flex flex-col md:flex-row items-stretch gap-3 sm:gap-4 lg:gap-6 w-full">
        
        <BannerCard 
          imageSrc={LeftBanner} 
          altText="Zepto Experience Offer" 
        />
        
        <BannerCard 
          imageSrc={RightBanner} 
          altText="Paan Corner Specials" 
        />

      </div>
    </section>
  );
}

export default BannerSection;