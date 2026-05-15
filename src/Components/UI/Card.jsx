import React from 'react';

const Card = ({ children, className = '', hover = true }) => {
  return (
    <div 
      className={`bg-surface border border-gray-800 rounded-xl p-6 transition-all duration-300 ${hover ? 'hover:border-gray-600 hover:shadow-lg hover:shadow-secondary/5' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
