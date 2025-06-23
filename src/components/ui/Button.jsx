import React from 'react';

const Button = ({ 
  children, 
  primary = false, 
  outline = false, 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'inline-block px-8 py-3 font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg';
  
  let variantClasses = '';
  if (primary) {
    variantClasses = 'bg-blue-600 text-white hover:bg-blue-700';
  } else if (outline) {
    variantClasses = 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white';
  } else {
    variantClasses = 'bg-emerald-500 text-white hover:bg-emerald-600';
  }
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;