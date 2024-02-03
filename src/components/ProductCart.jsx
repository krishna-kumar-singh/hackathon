import React from 'react';

export const ProductCart = ({ date,qualification,contact,name,gender,about,experience }) => {
  return (
    <div className="flex items-start space-x-4 p-4 border border-gray-300">
      <div className="flex flex-col">
        <div className="text-gray-600">{date}</div>
        <div className="text-lg font-semibold mb-2">"Name" : {name}</div>
        <div className="text-lg font-semibold mb-2">"Gender" : {gender}</div>
        {experience && <div className="text-lg font-semibold mb-2">"Experienced"</div>}
        <div className="text-lg font-semibold mb-2">"qualification" :  {qualification}</div>
        <div className="text-lg font-semibold mb-2">"contact" :  {contact}</div>
        <div className="text-lg font-semibold mb-2">"about" :  {about}</div>
      </div>
    </div>
  );
};

export default ProductCart;
