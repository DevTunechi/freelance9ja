// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FilterSort from '../components/FilterSort';

const Home = () => {
  const services = [
    { id: 1, name: 'Web Development', category: 'Development' },
    { id: 2, name: 'Content Writing', category: 'Writing' },
    { id: 3, name: 'Graphic Design', category: 'Design' },
    { id: 4, name: 'Technical Writing', category: 'Writing' },
    { id: 5, name: 'SEO Optimization', category: 'Marketing' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection
          headline="Welcome to Freelance 9ja"
          tagline="Connecting freelancers with project posters in Nigeria"
          ctaText="Get Started"
          ctaLink="/services"
        />
        <section className="py-8 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-6">Explore Services</h2>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="text-center">
                <p className="mb-4 font-medium text-lg">Are you a freelancer?</p>
                <button
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                  onClick={() => window.location.href = '/look-for-projects'}
                >
                  Look for Projects
                </button>
              </div>
              <div className="text-center">
                <p className="mb-4 font-medium text-lg">Need a freelancer?</p>
                <button
                  className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700"
                  onClick={() => window.location.href = '/post-a-project'}
                >
                  Post a Project
                </button>
              </div>
            </div>
            <FilterSort items={services} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
