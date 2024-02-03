import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export const ContactUs = () => {
  return (
    <div className="container mx-auto pb-10 text-center bg-cover" style={{
      backgroundImage: 'url(https://img.freepik.com/premium-photo/keyboard-coffee-smartphone-notebook-color-background-top-view_1286-776.jpg)',
    }}>
      <h1 className="text-3xl text-white font-bold mb-6">Contact Us</h1>
      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-xl border-2">
        <div className="mb-4 flex items-center">
          <FaMapMarkerAlt className="text-blue-500 mr-4" />
          <div>
            <h3 className="text-xl font-bold text-start">Our Location</h3>
            <p>123 Main Street, Cityville, Country</p>
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <FaEnvelope className="text-blue-500 mr-4" />
          <div>
            <h3 className="text-xl font-bold text-start">Email Us</h3>
            <p>info@example.com</p>
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <FaPhone className="text-blue-500 mr-4" />
          <div>
            <h3 className="text-xl font-bold text-start">Call Us</h3>
            <p>+1 234 567 890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
