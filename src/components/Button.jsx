// Assuming the Button component is defined like this
// Adjust the actual Button component if it's different

// Button.js
import React from "react";

export const Button = ({ type, bgColor, className, children }) => {
  return (
    <button
      type={type}
      className={`py-2 px-4 rounded-md text-white ${bgColor} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
