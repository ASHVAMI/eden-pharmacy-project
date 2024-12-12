import React from 'react';
import Button from './ui/Button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/images/about-image.jpg"
              alt="About Eden Pharmacy"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Eden Pharmacy
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 20 years of experience, Eden Pharmacy has been a trusted name
              in healthcare, providing quality pharmaceutical services and products to
              our community.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="h-6 w-6 flex-shrink-0 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">✓</span>
                <span className="ml-3 text-gray-700">Licensed Professional Pharmacists</span>
              </li>
              <li className="flex items-center">
                <span className="h-6 w-6 flex-shrink-0 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">✓</span>
                <span className="ml-3 text-gray-700">Quality Healthcare Products</span>
              </li>
              <li className="flex items-center">
                <span className="h-6 w-6 flex-shrink-0 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">✓</span>
                <span className="ml-3 text-gray-700">24/7 Customer Support</span>
              </li>
            </ul>
            <Button variant="primary" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;