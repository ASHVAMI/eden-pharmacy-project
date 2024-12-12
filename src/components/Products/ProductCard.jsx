import React from 'react';
import Button from '../ui/Button';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-1">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.badge && (
          <span className="absolute top-4 right-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-sm">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <Button variant="outline" size="sm" className="w-full">
          See More
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;