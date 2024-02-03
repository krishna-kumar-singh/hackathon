import React from 'react';

export const AmbulanceInfoCard = ({ name, address, contact,ambulanceNo, date , distance}) => {
  return (
    <div className="flex items-start space-x-4 p-4 border border-gray-300 rounded-md shadow-md">
      <div className="flex flex-col">
        <div className="text-gray-600">{date}</div>
        <div className="text-lg font-semibold mb-2">Driver Name: {name}</div>
        <div className="text-lg font-semibold mb-2">Ambulance No: {ambulanceNo}</div>
        <div className="text-lg font-semibold mb-2">Contact: {contact}</div>
        <div className="text-lg font-semibold mb-2">Address: {address}</div>
        <div className="text-lg font-semibold mb-2">Distance for your current location: {distance} km</div>
      </div>
    </div>
  );
};

export default AmbulanceInfoCard;
