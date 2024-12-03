// src/components/Footer.js
import React from 'react';
import 'tailwindcss/tailwind.css';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Freelance 9ja. All rights reserved.</p>
      <ul className="flex justify-center space-x-4 mt-2">
        <li><a href="https://www.facebook.com" className="hover:underline">Facebook</a></li>
        <li><a href="https://www.twitter.com" className="hover:underline">Twitter</a></li>
        <li><a href="https://www.linkedin.com" className="hover:underline">LinkedIn</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
