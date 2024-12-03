// src/pages/JobDetails.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const JobDetails = ({ job }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4 bg-white shadow-md rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
            <p className="text-gray-700 mb-4"><strong>Posted by:</strong> {job.poster}</p>
            <p className="text-gray-700 mb-4"><strong>Category:</strong> {job.category}</p>
            <p className="text-gray-700 mb-4"><strong>Location:</strong> {job.location}</p>
            <p className="text-gray-700 mb-4"><strong>Budget:</strong> {job.budget}</p>
            <p className="text-gray-700 mb-8"><strong>Description:</strong> {job.description}</p>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Apply Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JobDetails;

