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
          backgroundImage: 'url(https://www.usnews.com/cmsmedia/65/cc/5e8e982e408db701f9e4725c88f5/210503-computerprogrammer-stock.jpg)',
        }}
      >
        <h1 className='absolute text-amber-300 text-3xl font-bold mt-48 ml-16'>
        Elevate Your Career with Us:  
        </h1>
        
        <h1 className='absolute text-amber-300 text-3xl font-bold mt-60 ml-16'>
        Where Opportunities Meet Aspirations!
        </h1>
        
      </div>):(<div
        className='mt-0 ml-0 mr-0 mb-16 div1 bg-cover bg-center h-[500px] relative'
        style={{
          backgroundImage: 'url(https://www.usnews.com/cmsmedia/65/cc/5e8e982e408db701f9e4725c88f5/210503-computerprogrammer-stock.jpg)',
        }}
      >
        <h1 className='absolute text-amber-300 text-3xl font-bold mt-48 ml-16'>
        Elevate Your Career with Us:  
        </h1>
        
        <h1 className='absolute text-amber-300 text-3xl font-bold mt-60 ml-16'>
        Where Opportunities Meet Aspirations!
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
          title='Enrollment'
          description='Enrollment for job.'
          hovered={hovered1}
          handleHover={handleHover1}
          handleLeave={handleLeave1}
          to={authStatus? "post" : "login"}
        />

        <PointSection
          icon={<PiHandCoinsFill size={80} color={hovered2 ? 'white' : 'green'} />}
          title='Recruitment'
          description='Recruit employee for your company'
          hovered={hovered2}
          handleHover={handleHover2}
          handleLeave={handleLeave2}
          to={authStatus?"recruitment":'login'}
        />


        
      </div>


      <div className='bg-amber-400 px-64 pb-28 pt-16'>
        <h1 className='text-center font-bold text-4xl mb-6 font-serif'>Our Service</h1>
        <h1 className='text-2xl text-center'>Our services cater to both job seekers and employers, offering streamlined enrollment for individuals seeking their dream job and efficient recruitment solutions for companies of all sizes. Job seekers benefit from personalized job matching, career resources, and guidance. Employers enjoy simplified hiring processes with access to a pool of qualified candidates and advanced recruitment tools. Join us in redefining the future of recruitment and employment – where opportunities meet aspirations seamlessly.</h1>
      </div>


      {/* guide */}

      {!authStatus && (
        <section className="text-black py-16">
          <div className="container mx-auto text-center">
            {/* Catchy headline */}
            <h1 className="text-4xl font-bold mb-4 font-serif">Boost Your Career with Us!</h1>

            {/* Brief introduction */}
            <p className="text-lg">Explore new opportunities and take your career to the next level. Join our community, connect with top employers, and embark on a journey of professional growth!</p>

            {/* Call-to-Action button */}
            {!authStatus && (
              <Link to="/signup">
                <button className="bg-yellow-500 font-bold font-serif text-2xl text-gray-800 px-6 py-2 mt-4 rounded-full">
                  Get Started
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
            title={'Unlock Opportunities'}
            content={'Discover your potential with our job placement services. We specialize in connecting talented individuals with rewarding career opportunities across various industries.'}
          />
          <Card 
            title={'Passion-Driven Placements'}
            content={"Job satisfaction is not just a goal; it's a reality. Our platform focuses on finding roles that not only match your skills but also align with your passions and career aspirations."}
          />
          
          <Card 
            title={'Holistic Job Satisfaction'}
            content={"Choosing the right job isn't just about salary; it's about finding a workplace culture that values your contributions. Our services prioritize your holistic job satisfaction."}
          />
          <Card 
            title={'Career Navigation Hub'}
            content={"Navigate your career path with confidence. Our job resources and expert guidance empower you to make informed decisions for a fulfilling professional journey."}
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
