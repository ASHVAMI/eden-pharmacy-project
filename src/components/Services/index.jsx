import React from 'react';
import { FaPills, FaUserMd, FaTruck, FaClinicMedical, FaHeartbeat, FaNotesMedical } from 'react-icons/fa';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Prescription Services',
    description: 'Expert pharmacists to handle your prescriptions with care and accuracy.',
    icon: FaPills,
    features: ['24/7 Availability', 'Expert Consultation', 'Quick Processing']
  },
  {
    title: 'Health Consultation',
    description: 'Professional health advice and medication counseling.',
    icon: FaUserMd,
    features: ['One-on-One Sessions', 'Medication Review', 'Health Planning']
  },
  {
    title: 'Home Delivery',
    description: 'Convenient medication delivery right to your doorstep.',
    icon: FaTruck,
    features: ['Same Day Delivery', 'Secure Packaging', 'Real-time Tracking']
  },
  {
    title: 'Health Screening',
    description: 'Regular health check-ups and screening services.',
    icon: FaClinicMedical,
    features: ['Blood Pressure', 'Diabetes', 'Cholesterol Tests']
  },
  {
    title: 'Wellness Programs',
    description: 'Comprehensive wellness and health management programs.',
    icon: FaHeartbeat,
    features: ['Nutrition Advice', 'Fitness Planning', 'Health Monitoring']
  },
  {
    title: 'Medical Records',
    description: 'Secure digital access to your medical history and prescriptions.',
    icon: FaNotesMedical,
    features: ['Online Access', 'Secure Storage', 'Easy Sharing']
  }
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
            We offer a comprehensive range of pharmacy services to meet all your healthcare needs,
            delivered with expertise and care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;