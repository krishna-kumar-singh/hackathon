import React from 'react';
import { useSelector } from 'react-redux';
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
        <div className="flex items-start space-x-4 p-4 border border-gray-300 rounded-md shadow-md">
            <div className="flex flex-col">
                <div className="text-gray-600">{date}</div>
                <div className="text-lg font-semibold mb-2">Driver Name: {name}</div>
                <div className="text-lg font-semibold mb-2">Ambulance No: {ambulanceNo}</div>
                <div className="text-lg font-semibold mb-2">Contact: {contact}</div>
                <div className="text-lg font-semibold mb-2">Address: {address}</div>
                <div className="text-lg font-semibold mb-2">Distance from your current location: {distance} km</div>
                {userData?.$id === id && (
                    <button
                        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                        onClick={handleDelete}
                    >
                        ❌
                    </button>
                )}
                

            </div>
        </div>
    );
};

export default AmbulanceInfoCard;
