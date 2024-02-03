import React from 'react';

export const TragedyOccurCard = ({ gender,patientName,patientLatitude,patientLongitude, address,contact,tragedyOccur,age, date,}) => {
  return (
    <div className="flex items-start space-x-4 p-4 border border-gray-300">
      <div className="flex flex-col">
        <div className="text-gray-600">{date}</div>
        <div className="text-lg font-semibold mb-2">"Patient Name" : {patientName}</div>
        <div className="text-lg font-semibold mb-2">"Tragedy Occur" :  {tragedyOccur}</div>
        <div className="text-lg font-semibold mb-2">"Gender" : {gender}</div>
        <div className="text-lg font-semibold mb-2">"Age" : {age}</div>
        <div className="text-lg font-semibold mb-2">"contact" :  {contact}</div>
        <div className="text-lg font-semibold mb-2">"address" :  {address}</div>
      </div>
    </div>
  );
};

export default TragedyOccurCard;
