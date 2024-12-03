// src/pages/About.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-8">About Freelance 9ja</h1>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Freelance 9ja is dedicated to bridging the gap between freelancers and project posters in Nigeria. We aim to create a seamless, reliable, and secure platform that enables meaningful collaborations.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Empower freelancers and project posters to connect seamlessly and achieve their goals through our simplified freelance platform.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
              <li>Transparency</li>
              <li>Reliability</li>
              <li>Quality</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Freelance 9ja offers a unique selling proposition (USP) by providing a tailored freelance experience specifically designed for Nigerian users, ensuring cultural relevance and ease of use.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
