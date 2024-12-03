// src/pages/Services.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const freelancerServices = [
    { id: 1, name: 'Web Development', description: 'Build responsive websites and web apps.' },
    { id: 2, name: 'Content Writing', description: 'Create compelling articles and blogs.' },
    { id: 3, name: 'Graphic Design', description: 'Design stunning visuals for brands.' },
    { id: 4, name: 'Technical Writing', description: 'Document technical processes effectively.' },
    { id: 5, name: 'SEO Optimization', description: 'Enhance website visibility on search engines.' },
  ];

  const projectPosters = [
    { id: 1, name: 'Post a Web Development Project', description: 'Find experts to build your web presence.' },
    { id: 2, name: 'Post a Writing Task', description: 'Hire writers for articles or documentation.' },
    { id: 3, name: 'Post a Design Project', description: 'Get creative designs tailored for your brand.' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>

            <h2 className="text-2xl font-semibold mb-4">For Freelancers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {freelancerServices.map((service) => (
                <ServiceCard key={service.id} name={service.name} description={service.description} />
              ))}
            </div>

            <h2 className="text-2xl font-semibold mb-4">For Project Posters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectPosters.map((project) => (
                <ServiceCard key={project.id} name={project.name} description={project.description} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;

