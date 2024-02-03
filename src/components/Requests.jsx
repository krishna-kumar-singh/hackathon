import React, { useEffect, useState } from 'react';
import service from '../appwrite/config';
import { useSelector } from 'react-redux';
import TragedyOccurCard from './tragedyOccurCard';

//Rendering request for patient done by user.


function Requests() {
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userData){
          const response = await service.getUserForms();
          setPosts(response.documents);
        }
      } catch (error) {
        console.log("error in catch:", error);
      }
    };

    if (authStatus) {
      fetchData();
    }
  }, [authStatus, userData.$id]);

  if (posts.length==0) {
    return <div class="bg-red-500 text-white p-2 rounded-md">No patient registered yet.</div>
  }
  return (
    <div className='flex flex-col'>
      {posts.map((post) => (
        <div key={post.$id} className='p-2 w-full'>
          <TragedyOccurCard
            patientName={post.patientName}
            date={post.date}
            qualification={post.qualification}
            contact={post.contact}
            age={post.age}
            gender={post.gender}
            address={post.address}
            tragedyOccur={post.tragedyOccur}
          />
        </div>
      ))}
    </div>
  );
}

export default Requests;
