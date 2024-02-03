import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button({children,className=''}) {
  return (
    <div className='mr-12'>
      <button className={`btn ${className}`}>{children}</button>
    </div>
  );
}
export default Button