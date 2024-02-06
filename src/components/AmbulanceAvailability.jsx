import React, { useEffect, useState } from 'react';
import service from '../appwrite/config';
import AmbulanceInfoCard from './AmbulanceInfoCard';
import { calculateDistance, getCurrentLocation } from './getLocation';
import { useParams } from 'react-router-dom';

//Rendering all the necessary information about driver.

let location;
export function AmbulanceAvailability() {
  const param=useParams()
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        location = await getCurrentLocation()
        const response = await service.getDriverForms();
        setPosts(response.documents);
      } catch (error) {
        console.log("error in catch:", error);
      }
    };
    fetchData();
  }, [param]);
  if (posts.length==0) {
    return <div class="bg-red-500 text-white p-2 rounded-md">No ambulance available right now.</div>

  }
  return (
    <div className='flex flex-col'>
      {posts.map((post) => (
        <div key={post.$id} className='p-2 w-full'>
          <AmbulanceInfoCard
            name={post.name}
            address={post.address}
            contact={post.contact}
            ambulanceNo={post.ambulanceNo}
            date={post.date}
            id={post.$id}
            latitude={post.driverLatitude}
            longitude={post.driverLongitude}
            // rendering distance between teh user and driver
            distance={
              calculateDistance(location.latitude,location.longitude,post.driverLatitude,post.driverLongitude)
            }
          />
        </div>
      ))}
    </div>
  );
}

export default AmbulanceAvailability;
