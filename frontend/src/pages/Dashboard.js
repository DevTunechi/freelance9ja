// src/pages/Dashboard.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = ({ userType }) => {
  const freelancerContent = (
    <div>
      <h2 className="text-2xl font-bold mb-4">Freelancer Dashboard</h2>
      <p className="text-gray-700 mb-4">Welcome to your dashboard! Here you can manage your profile, view job offers, and track your progress.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
        View Available Projects
      </button>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Update Profile
      </button>
    </div>
  );

  const projectPosterContent = (
    <div>
      <h2 className="text-2xl font-bold mb-4">Project Poster Dashboard</h2>
      <p className="text-gray-700 mb-4">Welcome to your dashboard! Here you can post projects, manage listings, and review applications from freelancers.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
        Post a New Project
      </button>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Manage Listings
      </button>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            {userType === 'freelancer' ? freelancerContent : projectPosterContent}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;

