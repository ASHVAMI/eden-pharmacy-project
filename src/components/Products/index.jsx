import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    name: 'Prescription Medications',
    image: '/images/products/prescription.jpg',
    description: 'Wide range of prescription medications with expert guidance.',
    badge: 'Popular'
  },
  {
    name: 'Over-the-Counter',
    image: '/images/products/otc.jpg',
    description: 'Common medications and supplements for daily health.',
  },
  {
    name: 'Health & Wellness',
    image: '/images/products/wellness.jpg',
    description: 'Products for your daily health and wellness needs.',
    badge: 'New'
  },
  {
    name: 'Medical Supplies',
    image: '/images/products/supplies.jpg',
    description: 'Essential medical equipment and healthcare supplies.',
  },
  {
    name: 'Natural Remedies',
    image: '/images/products/natural.jpg',
    description: 'Herbal and natural healthcare solutions.',
  },
  {
    name: 'Personal Care',
    image: '/images/products/personal-care.jpg',
    description: 'Quality personal care and hygiene products.',
  },
  {
    name: 'Baby Care',
    image: '/images/products/baby-care.jpg',
    description: 'Specialized products for infant health and care.',
    badge: 'Essential'
  },
  {
    name: 'Vitamins & Supplements',
    image: '/images/products/vitamins.jpg',
    description: 'Comprehensive range of nutritional supplements.',
  }
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
            Discover our extensive range of healthcare products and medications,
            carefully selected to meet your health needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;