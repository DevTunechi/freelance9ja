// src/components/HeroSection.js
import React from 'react';
import 'tailwindcss/tailwind.css';

const HeroSection = () => {
  return (
    <div className="bg-blue-600 text-white text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to Freelance 9ja</h1>
      <p className="text-lg mb-6">Your gateway to top talent and amazing projects.</p>
      <a href="/services" className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100">Explore Services</a>
    </div>
  );
};

export default HeroSection;
