import React, { useState } from 'react';
import { FaAddressCard } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Card from './Card'
import { useSelector } from 'react-redux';
import { FaAmbulance } from "react-icons/fa";

export function Welcome() {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);

  const authStatus = useSelector((state) => state.auth.status);

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

  return (
    <div className='w-full'>
      {authStatus ? (
        <div className='mt-0 ml-0 mr-0 div1 bg-cover bg-center h-[500px] relative' style={{
            backgroundImage: 'url(https://blenderartists.org/uploads/default/original/4X/b/c/7/bc75fe8c04e3311a0daa99c992a106e5765abe80.jpeg)',
          }}>
          <h1 className='absolute text-black bg-white px-2 text-3xl font-bold mt-32 ml-4 sm:ml-16'>
            Navigate Emergencies, Save Lives:
          </h1>
          <h1 className='absolute text-black bg-white px-2 text-3xl font-bold mt-60 ml-4 sm:ml-16'>
            Your Trusted Ambulance Dashboard for Swift and Reliable Response!
          </h1>
        </div>
      ) : (
        <div className='mt-0 ml-0 mr-0 mb-16 div1 bg-cover bg-center h-[500px] relative' style={{
            backgroundImage: 'url(https://blenderartists.org/uploads/default/original/4X/b/c/7/bc75fe8c04e3311a0daa99c992a106e5765abe80.jpeg)',
          }}>
          <h1 className='absolute text-black bg-white px-2 text-3xl font-bold mt-32 ml-4 sm:ml-16 '>
            Navigate Emergencies, Save Lives:
          </h1>
          <h1 className='absolute text-black bg-white px-2 text-3xl font-bold mt-60 ml-4 sm:ml-16'>
            Your Trusted Ambulance Dashboard for Swift and Reliable Response!
          </h1>
        </div>
      )}

      {authStatus && (
        <section className='py-12 mb-16 bg-blue-400'>
          <div className='container mx-auto text-center text-white'>
            <h1 className='text-4xl font-bold mb-4 font-serif'>Explore Your Dashboard</h1>
            <p className='text-lg'>Discover personalized features and content tailored just for you.</p>
          </div>
        </section>
      )}

      <div className='flex flex-col items-center sm:flex-row justify-around mx-4 sm:mx-10 mb-6'>
        <PointSection
          icon={<FaAmbulance size={80} color={hovered1 ? 'white' : 'green'} />}
          title='Ambulance request'
          description='Request for an ambulance.'
          hovered={hovered1}
          handleHover={handleHover1}
          handleLeave={handleLeave1}
          to='post'
        />
        <PointSection
          icon={<FaAddressCard size={80} color={hovered2 ? 'white' : 'green'} />}
          title='Driver registration'
          description='Register your ambulance for service'
          hovered={hovered2}
          handleHover={handleHover2}
          handleLeave={handleLeave2}
          to={authStatus ? 'driver-form' : 'login'}
        />
      </div>

      <div className='bg-amber-400 px-4 sm:px-10 pb-20 pt-8'>
        <h1 className='text-center font-bold text-4xl mb-6 font-serif'>Our Service</h1>
        <p className='text-lg text-center'>
          At Life-Assist, we are dedicated to providing swift and reliable emergency response services. Our mission is to ensure the safety and well-being of individuals during critical moments. With a team of highly trained professionals and state-of-the-art ambulances, we go beyond traditional services, offering comprehensive emergency care. From rapid response times to compassionate and skilled crews, we prioritize your health and safety. Our commitment extends beyond transporting patients to hospitals; we strive to be a reassuring presence during crises. At EPIC, we are more than just responders; we are partners in your journey to recovery. Trust us to navigate emergencies with precision and care, because every second counts when it comes to saving lives.
        </p>
      </div>

      {!authStatus && (
        <section className='text-black mx-4 sm:mx-28 my-6'>
          <div className='container text-center'>
            <h1 className='text-4xl font-bold mb-4 font-serif'>Rapid Emergency Response</h1>
            <p className='text-lg'>
              In critical moments, every second counts. Experience swift and reliable emergency response with our ambulance service. We are here to provide immediate assistance and save lives during accidents.
            </p>
            <Link to='/signup'>
              <button className='bg-yellow-500 font-bold font-serif text-2xl text-gray-800 px-6 py-2 mt-4 rounded-full'>
                Request Ambulance
              </button>
            </Link>
          </div>
        </section>
      )}
      <hr />

      <div className='flex flex-wrap justify-around mx-4 sm:mx-16 mt-6 mb-4'>
        <Card
          title={'Swift Emergency Response'}
          content={'Experience rapid and efficient emergency response with our ambulance services. We specialize in providing immediate assistance during critical situations, ensuring your safety is our top priority.'}
          className={"mx-2 mb-2"}
        />
        <Card
          title={'Dedicated Ambulance Crew'}
          content={'Our skilled and compassionate ambulance crews are committed to your well-being. With a focus on professionalism and care, we ensure that you receive the support you need during emergencies.'}
          className={"mx-2 mb-2"}
        />
        <Card
          title={'Emergency Care Beyond Boundaries'}
          content={'We go beyond traditional ambulance services, offering comprehensive emergency care. Your health and safety are paramount, and our services are designed to provide holistic support during accidents.'}
          className={"mx-2 mb-2"}
        />
        <Card
          title={'Expert Guidance in Crisis'}
          content={'Navigate through emergencies confidently with our expert guidance. Our resources and trained professionals empower you to make informed decisions during challenging situations for a secure journey to recovery.'} 
          className={"mx-2 mb-2"}
        />
      </div>
    </div>
  );
}

const PointSection = ({ icon, title, description, hovered, handleHover, handleLeave, to }) => (
  <Link className='flex flex-col items-center mb-4 sm:mb-0' to={`/${to}`}>
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
