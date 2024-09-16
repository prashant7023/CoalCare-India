import React from 'react';
import { Link } from 'react-router-dom'; 

function Navbar() {
  return (
    <nav className="p-4 flex justify-between items-center bg-white border-b-2 border-gray-200 shadow-[0px_3px_3px_-3px_rgba(0,0,0,0.5)]">
      <div className="img">
        <Link to='/' >
        <img className="w-56" src="../public/images/CoalCare-logo.png" alt="Logo" />
        </Link>
      </div>
      <ul className="flex space-x-8">
        <li><Link to="/" className="text-black hover:text-blue-500">Home</Link></li>
        <li><Link to="/carbon-footprint" className="text-black hover:text-blue-500">Carbon Footprint</Link></li>
        <li><Link to="/Solution" className="text-black hover:text-blue-500">Solution</Link></li>
        <li><Link to="/sustainability" className="text-black hover:text-blue-500">Contact Us</Link></li>
        <li><Link to="/more" className="text-black hover:text-blue-500">About Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
