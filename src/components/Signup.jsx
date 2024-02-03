import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { PiHandCoinsFill } from 'react-icons/pi';
import { FaGifts } from "react-icons/fa";
import Card from './Card'
import { login } from '../store/authSlice';
import { Button, Input } from './index.js';
import { useDispatch, useSelector } from 'react-redux';
import authService from '../appwrite/auth.js';

function Signup() {

    // for welcome page append declarring
    const navigate = useNavigate();
    const authStatus=useSelector((state)=> state.auth.status)
    const handleCloseBtn= ()=> navigate("/")
    const [hovered1, setHovered1] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    const [hovered3, setHovered3] = useState(false);

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

  // end point
    
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const [passText,setPassText] = useState(false)

    const handlePass = ()=>{
        setPassText((prev)=>!prev)
    }

    const create = async (e) => {
        e.preventDefault();
        try {
            console.log("started")
            const userData = await authService.createAccount({
                name,
                email,
                password,
            });
            console.log("ended")
            console.log(userData)
            if (userData) {
                console.log("inside if")
                const currentUserData = await authService.getCurrentUser();
                if (currentUserData) dispatch(login({userData:currentUserData}));
                navigate('/');
            }
        } catch (error) {
          console.log("create function in the signup have an error ")
            setError(error.message);
        }
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
          content={'Experience rapid and efficient emergency response with our ambulance services. We specialize in providing immediate assistance during critical situations, ensuring your safety is our top priority.'}
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


        <div className='fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center my-16'>
        <button onClick={handleCloseBtn} className='absolute px-2 top-2 right-2 bg-white border-1 border-solid border-black cursor-pointer transition duration-300 ease-in-out hover:bg-red-500 hover:text-white'>X</button>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
          <h2 className='text-center text-2xl font-bold leading-tight'>Sign up to create an account</h2>
          <p className='mt-2 text-center text-base text-black/60'>
            Already have an account?&nbsp;
            <Link to='/login' className='font-medium text-primary transition-all duration-200 hover:underline'>
              Sign In
            </Link>
          </p>
          {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}

          <form onSubmit={create}>
            <div className='space-y-5'>
              <Input label='Full Name: ' placeholder='Enter your full name' onChange={(e) => setName(e.target.value)} required />
              <Input label='Email: ' placeholder='Enter your email' type='email' required onChange={(e) => setEmail(e.target.value)} />
              <Input
                label='Password: '
                type={passText ? 'text' : 'password'}
                placeholder='Enter your password'
                required
                onChange={(e) => setPassword(e.target.value)}
                eye={
                  <div className='w-[25px]' onClick={handlePass}>
                    <img
                      className='cursor-pointer'
                      src={passText ? 'https://static-00.iconduck.com/assets.00/eye-password-hide-icon-512x512-iv45hct9.png' : 'https://static.thenounproject.com/png/777494-200.png'}
                      alt=''
                    />
                  </div>
                }
              />

              <Button
                type='submit'
                className='w-100 bg-blue-500  transition-all duration-300 ease-out hover:bg-blue-700 hover:text-white hover:border-primary hover:p-2 hover:rounded-md hover:border-2'
              >
                Create Account
              </Button>
            </div>
          </form>
        </div>
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



export default Signup;
