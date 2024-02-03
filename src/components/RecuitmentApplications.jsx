// import React, { useEffect, useState } from 'react';
// import service from '../appwrite/config';
// import { useSelector } from 'react-redux';
// import RecuitmentCards from './RecuitmentCards';

// function RecuitmentApplications() {
//   const authStatus = useSelector((state) => state.auth.status);
//   const userData = useSelector((state) => state.auth.userData);
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (userData){
//           const response = await service.getRequestsOfRecuitment();
//           setPosts(response.documents);
//         }
//       } catch (error) {
//         console.log("error in catch:", error);
//       }
//     };

//     if (authStatus) {
//       fetchData();
//     }
//   }, [authStatus, userData.$id]);

//   if (!authStatus) {
//     return <div>Unable</div>;
//   }
//   return (
//     <div className='flex flex-col'>
//       {posts.map((post) => (
//         <div key={post.$id} className='p-2 w-full'>
//           <RecuitmentCards
//             date={post.date}
//             salary={post.salary}
//             contact={post.contact}
//             about={post.about}
//             jobType={post.jobType}
//             timeOfJob={post.timeOfJob}
//             modeOfJob={post.modeOfJob}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default RecuitmentApplications;
