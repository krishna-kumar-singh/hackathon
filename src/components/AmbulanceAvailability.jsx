import React, { useEffect, useState } from 'react';
import service from '../appwrite/config';
import { useSelector } from 'react-redux';
import AmbulanceInfoCard from './AmbulanceInfoCard';


export function AmbulanceAvailability() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service.getDriverForms();
        setPosts(response.documents);
      } catch (error) {
        console.log("error in catch:", error);
      }
    };
    fetchData();
  }, []);
  if (posts.length==0) {
    return <div>Unable Applications</div>;
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
          />
        </div>
      ))}
    </div>
  );
}

export default AmbulanceAvailability;
