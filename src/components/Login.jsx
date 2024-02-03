import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { FaHome } from 'react-icons/fa';
import { PiHandCoinsFill } from 'react-icons/pi';
import { FaGifts } from "react-icons/fa";
import Card from './Card'
import { Input,Button } from './index';
import { useDispatch, useSelector } from 'react-redux';
import authService from '../appwrite/auth';

function Login() {
    const navigate = useNavigate();
    const authStatus=useSelector((state)=> state.auth.status)
    const dispatch = useDispatch();
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passText,setPassText] = useState(false)
    const handleCloseBtn= ()=> navigate("/")
    const handlePass = ()=>{
        setPassText((prev)=>!prev)
    }

    const login = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const session = await authService.login({ email, password });
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin({userData}));
                navigate('/');
            }
        } catch (error) {
            setError(error.message);
        }
    };

   
  // for welcome page append  

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

  return (
    <div className='w-full relative z-50'>
        
        


        <div
        className='mt-0 ml-0 mr-0 div1 bg-cover bg-center h-[500px] relative mb-16'
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
        
      </div>

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



      <div className='fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center my-16'>
      <button onClick={handleCloseBtn} className='absolute px-2 top-2 right-2 bg-white border-1 border-solid border-black cursor-pointer transition duration-300 ease-in-out hover:bg-red-500 hover:text-white'>X</button>     
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                Don&apos;t have any account?&nbsp;
                <Link to="/signup" className="font-medium text-primary transition-all duration-200 hover:underline">
                    Sign Up
                </Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form onSubmit={login} className='mt-8'>
                <div className='space-y-5'>
                    <Input
                        label="Email :"
                        placeholder="Enter your email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        label="Password :"
                        type={passText?'text':'password'}
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        eye={<div className='w-[25px]' onClick={handlePass}><img className='cursor-pointer' src={passText?"https://static-00.iconduck.com/assets.00/eye-password-hide-icon-512x512-iv45hct9.png":'https://static.thenounproject.com/png/777494-200.png'} alt="" /></div>}
                    />
                    {/* Using the Button component */}
                    <Button type="submit" className="w-100 bg-blue-500  transition-all duration-300 ease-out hover:bg-blue-700 hover:text-white hover:border-primary hover:p-2 hover:rounded-md hover:border-2 ">
                        Sign in
                    </Button>
                </div>
            </form>
        </div>
      </div>

    </div>
  );
}


export default Login;


// Separate component for each point section
const PointSection = ({ icon, title, description, hovered, handleHover, handleLeave,to }) => (
    <Link className='flex flex-col items-center z-50' to={`/${to}`}>
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
  
