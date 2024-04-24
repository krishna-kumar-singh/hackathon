import React, { useEffect, useState } from 'react';
import service from '../appwrite/config';
import AmbulanceInfoCard from './AmbulanceInfoCard';
import { calculateDistance, getCurrentLocation } from '../utils/getLocation';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

// Rendering all the necessary information about drivers.
export function AmbulanceAvailability() {
  const param = useParams();
  const [posts, setPosts] = useState([]);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentLocation = await getCurrentLocation();
        setLocation(currentLocation);

        const response = await service.getDriverForms();
        setPosts(response.documents);
      } catch (error) {
        console.log("Error fetching ambulance availability:", error);
      }
    };
    fetchData();
  }, [param]);

  if (posts.length === 0) {
    return<Loader/>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {posts.map((post) => (
        <div key={post.$id}>
          <AmbulanceInfoCard
            name={post.name}
            address={post.address}
            contact={post.contact}
            ambulanceNo={post.ambulanceNo}
            date={post.date}
            id={post.$id}
            latitude={post.driverLatitude}
            longitude={post.driverLongitude}
            // Calculate distance between the user and driver
            distance={
              location &&
              calculateDistance(
                location.latitude,
                location.longitude,
                post.driverLatitude,
                post.driverLongitude
              )
            }
          />
        </div>
      ))}
    </div>
  );
}

export default AmbulanceAvailability;
