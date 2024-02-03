import React from 'react';
import './Button.css';
//Creating button to use globally.

export function Button({children,className=''}) {
  return (
    <div className='mr-12'>
      <button className={`btn ${className}`}>{children}</button>
    </div>
  );
}
export default Button