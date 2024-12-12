import React from 'react';
import Button from '../ui/Button';

const HeroContent = () => {
  return (
    <div className="lg:max-w-xl">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
        Your Health Is Our
        <span className="text-primary-600 block mt-2">Top Priority</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8">
        We provide quality healthcare products and professional pharmacy services
        to ensure your well-being and peace of mind.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button variant="primary" size="lg">
          Explore Services
        </Button>
        <Button variant="outline" size="lg">
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;