import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PiHandCoinsFill } from 'react-icons/pi';
import { FaGifts } from "react-icons/fa";
import Card from './Card'
import store from '../store/store'
import { useSelector } from 'react-redux';

export function Welcome() {

  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  
  const authStatus = useSelector((state) => state.auth.status)
  console.log(authStatus)
  const handleHover1 = () => {
    setHovered1(true);
  };

  const handleLeave1 = () => {
    setHovered1(false);
  };

  const handleHover2 = () => {
    setHovered2(true);
  };

  const handleLeave2 = () => {
    setHovered2(false);
  };

  const handleHover3 = () => {
    setHovered3(true);
  };

  
  const handleLeave3 = () => {
    setHovered3(false);
  };

  return (
    <div className='w-full'>
      {authStatus? (<div
        className='mt-0 ml-0 mr-0 div1 bg-cover bg-center h-[500px] relative'
        style={{
          backgroundImage: 'url(https://blenderartists.org/uploads/default/original/4X/b/c/7/bc75fe8c04e3311a0daa99c992a106e5765abe80.jpeg)',
        }}
      >
        <h1 className='absolute text-white text-3xl font-bold mt-48 ml-16'>
        Navigate Emergencies, Save Lives:   
        </h1>
        
        <h1 className='absolute text-white text-3xl font-bold mt-60 ml-16'>
        Your Trusted Ambulance Dashboard for Swift and Reliable Response!
        </h1>
        
      </div>):(<div
        className='mt-0 ml-0 mr-0 mb-16 div1 bg-cover bg-center h-[500px] relative'
        style={{
          backgroundImage: 'url(https://blenderartists.org/uploads/default/original/4X/b/c/7/bc75fe8c04e3311a0daa99c992a106e5765abe80.jpeg)',
        }}
      >
        <h1 className='absolute text-white text-3xl font-bold mt-48 ml-16'>
        Navigate Emergencies, Save Lives:   
        </h1>
        
        <h1 className='absolute text-white text-3xl font-bold mt-60 ml-16'>
        Your Trusted Ambulance Dashboard for Swift and Reliable Response!
        </h1>
        
      </div>)}

           
      {authStatus && (<section className="py-12 mb-16  bg-blue-400">
      <div className="container mx-auto text-center text-white">
        <h1 className="text-4xl font-bold mb-4 font-serif">Explore Your Dashboard</h1>
        <p className="text-lg">Discover personalized features and content tailored just for you.</p>
      </div>
    </section>)}
      {/* Flex container for Collection Request, Points, and Reward System */}
      <div className='flex justify-around mx-10 mb-16'>
        <PointSection
          icon={<FaHome size={80} color={hovered1 ? 'white' : 'green'} />}
          title='Ambulance request'
          description='Request for an ambulance.'
          hovered={hovered1}
          handleHover={handleHover1}
          handleLeave={handleLeave1}
          to={ "post"}
        />
        <PointSection
          icon={<FaHome size={80} color={hovered2 ? 'white' : 'green'} />}
          title='Driver registeration'
          description='Register your ambulance for service'
          hovered={hovered2}
          handleHover={handleHover2}
          handleLeave={handleLeave2}
          to={authStatus? "driver-form" : "login"}
        />
      </div>


      <div className='bg-amber-400 px-64 pb-28 pt-16'>
        <h1 className='text-center font-bold text-4xl mb-6 font-serif'>Our Service</h1>
        <h1 className='text-2xl text-center'>At EPIC, we are dedicated to providing swift and reliable emergency response services. Our mission is to ensure the safety and well-being of individuals during critical moments. With a team of highly trained professionals and state-of-the-art ambulances, we go beyond traditional services, offering comprehensive emergency care. From rapid response times to compassionate and skilled crews, we prioritize your health and safety. Our commitment extends beyond transporting patients to hospitals; we strive to be a reassuring presence during crises. At EPIC, we are more than just responders; we are partners in your journey to recovery. Trust us to navigate emergencies with precision and care, because every second counts when it comes to saving lives</h1>
      </div>


      {/* guide */}

      {!authStatus && (
        <section className="text-black mx-28 my-16">
          <div className="container  text-center">
            {/* Catchy headline */}
            <h1 className="text-4xl font-bold mb-4 font-serif">Rapid Emergency Response</h1>

            {/* Brief introduction */}
            <p className="text-lg">In critical moments, every second counts. Experience swift and reliable emergency response with our ambulance service. We are here to provide immediate assistance and save lives during accidents.</p>

            {/* Call-to-Action button */}
            {!authStatus && (
              <Link to="/signup">
                <button className="bg-yellow-500 font-bold font-serif text-2xl text-gray-800 px-6 py-2 mt-4 rounded-full">
                  Request Ambulance
                </button>
              </Link>
            )}
          </div>
        </section>
      )}
      



    <hr />

{/*  */}

      <div className='justify-between flex mx-16 mt-16 mb-10'>       
        <Card 
          title={'Swift Emergency Response'}
          content={'Experience raid and efficient emergency response with our ambulance services. We specialize in providing immediate assistance during critical situations, ensuring your safety is our top priority.'}
        />
        <Card 
          title={'Dedicated Ambulance Crew'}
          content={"Our skilled and compassionate ambulance crews are committed to your well-being. With a focus on professionalism and care, we ensure that you receive the support you need during emergencies."}
        />
        
        <Card 
          title={'Emergency Care Beyond Boundaries'}
          content={"We go beyond traditional ambulance services, offering comprehensive emergency care. Your health and safety are paramount, and our services are designed to provide holistic support during accidents."}
        />
        <Card 
          title={'Expert Guidance in Crisis'}
          content={"Navigate through emergencies confidently with our expert guidance. Our resources and trained professionals empower you to make informed decisions during challenging situations for a secure journey to recovery."}
        />
      </div>



    </div>
  );
}

// Separate component for each point section
const PointSection = ({ icon, title, description, hovered, handleHover, handleLeave,to }) => (
  <Link className='flex flex-col items-center' to={`/${to}`}>
    <div
      className={`w-40 h-40 flex items-center justify-center rounded-full border-2 ${
        hovered ? 'bg-green-700 border-none shadow transition-all duration-150 ease-in-out' : 'border-gray-300'
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {icon}
    </div>
    <div className='mt-3 text-xl text-center font-bold'>
      <h1>{title}</h1>
      <h3 className='text-green-600 font-bold'>{description}</h3>
    </div>
  </Link>
);





export default Welcome;
