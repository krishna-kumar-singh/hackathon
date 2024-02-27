import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { ImBin } from "react-icons/im";
import service from '../appwrite/config';
import { locate } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
export const AmbulanceInfoCard = ({ name, address, contact, ambulanceNo, date, distance, id,longitude, latitude }) => {
    const [isUser,setIsUser]=useState(false)
    const userData = useSelector((state) => state.auth.userData);
    const dispatch=useDispatch()
    const navigator=useNavigate()
    
    useEffect(() => {
      if(userData?.$id === id){
        setIsUser(true)
      }else{
        setIsUser(false)
      }
    }, [userData?.$id, id])
    
    // handling map to send the location

    const handleMap=(longitude1, latitude1)=>{
        dispatch(locate({ driverLongitude: longitude1, driverLatitude: latitude1 }));
        navigator("/map")
    }

    const handleDelete = async () => {
        if (userData?.$id) {
            await service.deleteDriverForm(userData.$id);
            setIsUser(false)
        }
    };

    // Only render the component if userData is available
    useEffect(()=>{
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
                    <div className="text-lg font-semibold mb-2">
                        <button className='border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white' onClick={()=>handleMap(longitude,latitude)}>
                            View on Map
                        </button>
                    </div>
                    <div className=' flex align-middle'>
                    {isUser && (
                        <>
                        <label className="text-lg font-semibold mb-2">Remove profile: </label>
                        <ImBin color='red' className="inline-flex w-6 h-6 rounded-lg text-sm border justify-center items-center bg-gray-50 hover:bg-gray-200 cursor-pointer shrink-0" onClick={handleDelete}/> 
                        </>
                        )}
    
    
                </div>
            </div>
            </div>
        );
    },[isUser])
};

export default AmbulanceInfoCard;
