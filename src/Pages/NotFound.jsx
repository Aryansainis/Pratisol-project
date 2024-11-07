// ./Pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="text-center py-16">
    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="text-gray-600 mb-8">
      Sorry, the page you are looking for does not exist.
    </p>
    <Link
      to="/"
      className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
    >
      Go Back to Home
    </Link>
  </div>
);

export default NotFound;
