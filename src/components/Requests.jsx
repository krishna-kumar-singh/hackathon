import React, { useEffect, useState } from 'react';
import service from '../appwrite/config';
import { useSelector } from 'react-redux';
import ProductCart from './ProductCart';

function Requests() {
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userData){
          const response = await service.getRequests();
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

  if (!authStatus) {
    return <div>Unable Applications</div>;
  }
  return (
    <div className='flex flex-col'>
      {posts.map((post) => (
        <div key={post.$id} className='p-2 w-full'>
          <ProductCart
            name={post.name}
            date={post.date}
            qualification={post.qualification}
            contact={post.contact}
            gender={post.gender}
            about={post.about}
            experience={post.experience}
          />
        </div>
      ))}
    </div>
  );
}

export default Requests;
