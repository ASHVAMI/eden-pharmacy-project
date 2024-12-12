import React from 'react';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-50 to-primary-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Health Is Our
              <span className="text-primary-600"> Top Priority</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We provide quality healthcare products and professional pharmacy services
              to ensure your well-being and peace of mind.
            </p>
            <div className="space-x-4">
              <Button variant="primary" size="lg">
                Explore Services
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/hero-image.jpg"
              alt="Pharmacy Services"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;