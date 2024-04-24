import React, { useEffect, useState } from 'react';
import service from '../appwrite/config';
import { useSelector } from 'react-redux';
import {TragedyOccurCard} from './TragedyOccurCard';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';


//Rendering request for patient done by user.
function Requests() {
  const navigate=useNavigate()
  const authStatus = useSelector((state) => state.auth.status);
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (authStatus){
          const response = await service.getUserForms();
          setPosts(response.documents);
        }
      } catch (error) {
        console.log("error in request", error);
      }
    };

    if (authStatus) {
      fetchData();
    }else{
      navigate("/")
    }

  }, [authStatus]);

  if (posts.length === 0) {
    return <Loader/>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {posts.map((post) => (
        <div key={post.$id}>
          <TragedyOccurCard
            patientName={post.patientName}
            date={post.date}
            qualification={post.qualification}
            contact={post.contact}
            age={post.age}
            gender={post.gender}
            address={post.address}
            tragedyOccur={post.tragedyOccur}
            status={post.status}
            unique={post.unique}

          />
        </div>
      ))}
    </div>
  );
}

export default Requests;
