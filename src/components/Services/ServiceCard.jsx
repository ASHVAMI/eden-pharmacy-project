import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-primary-600 mb-4">
        <service.icon className="w-12 h-12" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
      {service.features && (
        <ul className="mt-4 space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-500">
              <span className="mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;