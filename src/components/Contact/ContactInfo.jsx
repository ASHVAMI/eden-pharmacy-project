import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Contact Us
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Have questions? We're here to help. Contact us through any of these channels
        or fill out the form.
      </p>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <FaMapMarkerAlt className="w-6 h-6 text-primary-600 mt-1" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-gray-600">123 Healthcare Street</p>
            <p className="text-gray-600">Medical District, NY 10001</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <FaPhone className="w-6 h-6 text-primary-600 mt-1" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
            <p className="text-gray-600">+1 (555) 987-6543</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <FaEnvelope className="w-6 h-6 text-primary-600 mt-1" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600">contact@edenpharmacy.com</p>
            <p className="text-gray-600">support@edenpharmacy.com</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <FaClock className="w-6 h-6 text-primary-600 mt-1" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
            <p className="text-gray-600">Monday - Friday: 8:00 AM - 9:00 PM</p>
            <p className="text-gray-600">Saturday - Sunday: 9:00 AM - 7:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;