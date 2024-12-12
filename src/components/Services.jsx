import React from 'react';
import { FaPills, FaUserMd, FaTruck, FaClinicMedical } from 'react-icons/fa';

const services = [
  {
    title: 'Prescription Services',
    description: 'Expert pharmacists to handle your prescriptions with care and accuracy.',
    icon: FaPills,
  },
  {
    title: 'Health Consultation',
    description: 'Professional health advice and medication counseling.',
    icon: FaUserMd,
  },
  {
    title: 'Home Delivery',
    description: 'Convenient medication delivery right to your doorstep.',
    icon: FaTruck,
  },
  {
    title: 'Health Screening',
    description: 'Regular health check-ups and screening services.',
    icon: FaClinicMedical,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of pharmacy services to meet all your healthcare needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-primary-600 mb-4">
                <service.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;