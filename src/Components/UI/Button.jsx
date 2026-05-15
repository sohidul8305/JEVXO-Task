import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  
  const variants = {
    primary: "bg-primary text-[#050814] hover:bg-opacity-90 focus:ring-primary",
    secondary: "bg-secondary text-[#050814] hover:bg-opacity-90 focus:ring-secondary",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-[#050814] focus:ring-primary",
    ghost: "text-gray-300 hover:text-white hover:bg-surface focus:ring-gray-300",
  };
  
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-10 px-6 py-2 text-base",
    lg: "h-12 px-8 py-3 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
