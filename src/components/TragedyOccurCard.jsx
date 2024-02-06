import React, { useState } from 'react';
import service from '../appwrite/config';

export const TragedyOccurCard = ({ unique, gender, patientName, status, address, contact, tragedyOccur, age, date }) => {
    const [isChecked, setIsChecked] = useState(status);

    const toggleCompleted = async () => {
        await service.updateUserForm(unique, { status: !isChecked });
        setIsChecked(!isChecked); // Update local state immediately after toggling checkbox
    };

    return (
        <div className={`flex items-start space-x-4 ${isChecked ? 'bg-green-400' : 'bg-white'} p-4 border border-gray-300`}>
            <div className="flex flex-col">
                <div className="text-gray-600">{date}</div>
                <div className="text-lg font-semibold mb-2">"Patient Name" : {patientName}</div>
                <div className="text-lg font-semibold mb-2">"Tragedy Occur" :  {tragedyOccur}</div>
                <div className="text-lg font-semibold mb-2">"Gender" : {gender}</div>
                <div className="text-lg font-semibold mb-2">"Age" : {age}</div>
                <div className="text-lg font-semibold mb-2">"contact" :  {contact}</div>
                <div className="text-lg font-semibold mb-2">"address" :  {address}</div>
                <input
                    type="checkbox"
                    className="cursor-pointer"
                    checked={isChecked}
                    onChange={toggleCompleted}
                />
            </div>
        </div>
    );
};

export default TragedyOccurCard;
