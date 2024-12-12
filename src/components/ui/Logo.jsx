import React from 'react';

const Logo = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/images/logo.svg"
        alt="Eden Pharmacy"
        className="h-8 w-auto"
      />
      <span className="ml-2 text-xl font-bold text-primary-600">Eden Pharmacy</span>
    </div>
  );
};

export default Logo;