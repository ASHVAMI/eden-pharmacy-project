import React from 'react';
import Button from './ui/Button';

const products = [
  {
    name: 'Prescription Medications',
    image: '/images/products/prescription.jpg',
    description: 'Wide range of prescription medications.',
  },
  {
    name: 'Over-the-Counter',
    image: '/images/products/otc.jpg',
    description: 'Common medications and supplements.',
  },
  {
    name: 'Health & Wellness',
    image: '/images/products/wellness.jpg',
    description: 'Products for your daily health needs.',
  },
  {
    name: 'Medical Supplies',
    image: '/images/products/supplies.jpg',
    description: 'Essential medical equipment and supplies.',
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our extensive range of healthcare products and medications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  See More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;