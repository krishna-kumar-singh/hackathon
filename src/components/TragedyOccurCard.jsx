import React, { useState } from 'react';
import service from '../appwrite/config';

export const TragedyOccurCard = ({ unique, gender, patientName, status, address, contact, tragedyOccur, age, date }) => {
    const [isChecked, setIsChecked] = useState(status);

    const toggleCompleted = async () => {
        try {
            await service.updateUserForm(unique, { status: !isChecked });
            setIsChecked(!isChecked); // Update local state immediately after toggling checkbox
        } catch (error) {
            console.error("Error toggling service status:", error);
        }
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className={`px-6 py-4 ${isChecked ? 'bg-green-100' : ''}`}>
                <div className="font-bold text-xl mb-2">Patient Name: {patientName}</div>
                <p className="text-gray-700 text-base mb-2">Tragedy Occurred: {tragedyOccur}</p>
                <p className="text-gray-700 text-base mb-2">Gender: {gender}</p>
                <p className="text-gray-700 text-base mb-2">Age: {age}</p>
                <p className="text-gray-700 text-base mb-2">Contact: {contact}</p>
                <p className="text-gray-700 text-base mb-2">Address: {address}</p>
                <p className="text-gray-700 text-base">Date: {date}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <label className="font-bold text-base">Service Status:</label>
                <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 ml-2"
                    checked={isChecked}
                    onChange={toggleCompleted}
                />
            </div>
        </div>
    );
};


