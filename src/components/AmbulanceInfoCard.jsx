import React from 'react';
import { useSelector } from 'react-redux';
import { ImBin } from "react-icons/im";
import service from '../appwrite/config';

export const AmbulanceInfoCard = ({ name, address, contact, ambulanceNo, date, distance, id }) => {
    const userData = useSelector((state) => state.auth.userData);

    const handleDelete = async () => {
        if (userData?.$id) {
            await service.deleteDriverForm(userData.$id);
        }
    };

    // Only render the component if userData is available
    return (
        <div className="flex items-start space-x-4 p-4 border border-gray-300 rounded-md shadow-md justify-between">
            <div className="flex flex-col ">
                <div>
                <div className="text-gray-600">{date}</div>
                <div className="text-lg font-semibold mb-2">Driver Name: {name}</div>
                <div className="text-lg font-semibold mb-2">Ambulance No: {ambulanceNo}</div>
                <div className="text-lg font-semibold mb-2">Contact: {contact}</div>
                <div className="text-lg font-semibold mb-2">Address: {address}</div>
                <div className="text-lg font-semibold mb-2">Distance from your current location: {distance} km</div>
                </div>
                
                <div className=' flex align-middle'>
                {userData?.$id === id && (
                    <label className="text-lg font-semibold mb-2">Remove profile: </label>)}
                {userData?.$id === id && (
                    <ImBin color='red' className="inline-flex w-6 h-6 rounded-lg text-sm border justify-center items-center bg-gray-50 hover:bg-gray-200 cursor-pointer shrink-0" onClick={handleDelete}/> 
                )}
                
                </div>
            </div>
        </div>
    );
};

export default AmbulanceInfoCard;
