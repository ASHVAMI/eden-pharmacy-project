import React from 'react';

const HeroImage = () => {
  return (
    <div className="relative">
      <img
        src="/images/hero-main.jpg"
        alt="Pharmacy Services"
        className="rounded-lg shadow-xl w-full h-auto md:h-[600px] object-cover"
      />
      <div className="absolute -bottom-6 -right-6 hidden md:block">
        <img
          src="/images/hero-detail.jpg"
          alt="Healthcare Detail"
          className="w-48 h-48 rounded-lg shadow-xl border-4 border-white"
        />
      </div>
    </div>
  );
};

export default HeroImage;