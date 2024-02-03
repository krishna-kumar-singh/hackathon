
// About.jsx
import React from 'react';
// import TeamImage from '../assets/team.jpg'; // Import your team image or any relevant image

export const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-12 px-20 bg-cover" style={{backgroundImage:'url(https://img.freepik.com/premium-photo/blank-sign-empty-chair-hiring-new-job-vacancy-concept-d-rendering_601748-4880.jpg)'}}>
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">About [Your Company Name]</h2>
    <p className="text-lg mb-8">
      [Introduction to your job-related platform]
    </p>
    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p className="text-gray-700">
          At [Your Company Name], our mission is to empower individuals on their career journeys. We are committed to connecting talented professionals with meaningful employment opportunities, fostering personal and professional growth. Through our innovative services and dedication to job satisfaction, we aim to make a positive impact on the lives of job seekers and contribute to building successful and thriving workplaces. Join us in shaping a future where everyone finds fulfillment in their careers.
        </p>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
        <p className="text-gray-700">
          Our vision at [Your Company Name] is to create a job ecosystem that seamlessly aligns the aspirations of individuals with the needs of forward-thinking employers. We envision a world where every professional not only has access to rewarding opportunities but also enjoys a fulfilling and purposeful career. Through our platform, we strive to redefine the future of work by promoting inclusivity, innovation, and continuous learning. Join us in building a future where work is not just a means of livelihood but a source of inspiration and personal fulfillment.
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default About;

