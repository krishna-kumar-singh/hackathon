import React from 'react';
//creating about page using react base component.

export const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-12 px-20 bg-cover" style={{backgroundImage:'url(https://img.freepik.com/free-vector/healthcare-background-with-medical-symbols-hexagonal-frame_1017-26363.jpg)'}}>
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">About Life-Assist</h2>
    <p className="text-lg mb-8">
    Welcome to Life-Assist, An innovative solution ensuring rapid emergency response by seamlessly tracking the nearest ambulance, providing crucial contact information, and informing personnel about the specific tragedy for enhanced preparedness
    </p>
    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
      <div className="bg-white p-6 rounded shadow-2xl">
        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p className="text-gray-700">
        "At Life-Assist, our mission is to be the beacon of hope and support during critical moments. We are dedicated to providing swift and compassionate emergency response services, ensuring that individuals facing accidents or medical emergencies receive the care they need promptly. Our team of highly trained professionals is committed to upholding the highest standards of service, making a positive impact on lives by prioritizing safety, health, and well-being. Every call we answer is an opportunity to make a difference, and we embrace our responsibility to be the lifeline that connects people to vital care."
        </p>
      </div>
      <div className="bg-white p-6 rounded shadow-2xl">
        <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
        <p className="text-gray-700">
        "Our vision at Life-Assist is to redefine emergency response by setting new standards of excellence and innovation in the healthcare industry. We envision a future where our advanced ambulance services play a pivotal role in ensuring the seamless and efficient delivery of emergency care. By leveraging cutting-edge technology, fostering a culture of continuous improvement, and collaborating with healthcare stakeholders, we aspire to be the leaders in creating a safer and healthier community. Our vision extends beyond responding to emergencies; we strive to be the trusted guardians of health, shaping a future where everyone can access immediate and quality medical assistance when it matters the most."
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default About;

