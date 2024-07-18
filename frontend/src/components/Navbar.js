import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/">
          <h1 className="text-xl font-bold">School Manager</h1>
        </Link>
        <div className="space-x-4">
          <Link to="/add-school" className="hover:underline">Add School</Link>
          <Link to="/" className="hover:underline">Show Schools</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;