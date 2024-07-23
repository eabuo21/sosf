// Button.js

import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`border-white border-2 relative top-5 hover:bg-white hover:text-black rounded-full p-3 text-white bg-transparent flex justify-center items-center text-center text-xl ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
