import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ImBin } from "react-icons/im";
import service from '../appwrite/config';
import { locate } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

const AmbulanceInfoCard = ({ name, address, contact, ambulanceNo, date, distance, id, longitude, latitude }) => {
    const userData = useSelector((state) => state.auth.userData);
    const dispatch = useDispatch();
    const navigator = useNavigate();

    const isUser = userData?.$id === id;
    const [showSelf,setShowSelf]=useState(isUser)
    const handleMap = (longitude1, latitude1) => {
        dispatch(locate({ driverLongitude: longitude1, driverLatitude: latitude1 }));
        navigator("/map");
    };

    const handleDelete = async () => {
        try {
            if (userData?.$id) {
                await service.deleteDriverForm(userData.$id);
                setShowSelf(false)
                // Redirect to a different route or refresh data here if necessary
            }
        } catch (error) {
            console.error("Error deleting driver profile:", error);
        }
    };

    return (
        <>
            {(isUser&& showSelf ) && (
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                    <div className="p-4">
                        <div className="text-gray-600">{date}</div>
                        <div className="text-lg font-semibold mb-2">Driver Name: {name}</div>
                        <div className="text-lg font-semibold mb-2">Ambulance No: {ambulanceNo}</div>
                        <div className="text-lg font-semibold mb-2">Contact: {contact}</div>
                        <div className="text-lg font-semibold mb-2">Address: {address}</div>
                        <div className="text-lg font-semibold mb-2">Distance from your current location: {distance.toFixed(2)} km</div>
                        <div className="text-lg font-semibold mb-2">
                            <button className='border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white' onClick={() => handleMap(longitude, latitude)}>
                                View on Map
                            </button>
                        </div>
                        <div className="px-4 py-2 bg-gray-100 flex items-center justify-between">
                            <div className="font-semibold text-lg">Remove profile:</div>
                            <ImBin className="text-red-500 cursor-pointer" size={24} onClick={handleDelete} />
                        </div>
                    </div>
                </div>
            )}

            {!isUser && (
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                    <div className="p-4">
                        <div className="text-gray-600">{date}</div>
                        <div className="text-lg font-semibold mb-2">Driver Name: {name}</div>
                        <div className="text-lg font-semibold mb-2">Ambulance No: {ambulanceNo}</div>
                        <div className="text-lg font-semibold mb-2">Contact: {contact}</div>
                        <div className="text-lg font-semibold mb-2">Address: {address}</div>
                        <div className="text-lg font-semibold mb-2">Distance from your current location: {distance.toFixed(2)} km</div>
                        <div className="text-lg font-semibold mb-2">
                            <button className='border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white' onClick={() => handleMap(longitude, latitude)}>
                                View on Map
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AmbulanceInfoCard;
