import React from 'react';

function Navbar() {
  return (
    <nav className=" p-4 flex justify-between items-center">
      <div className="img "><img className='w-56' src ='../public/images/img-logo.png'></img></div>
      <ul className="flex space-x-8">
        <li><a href="/home" className="text-black hover:text-blue-500">Home</a></li>
        <li><a href="/carbon-footprint" className="text-black hover:text-blue-500">Carbon Footprint</a></li>
        <li><a href="/statistics" className="text-black hover:text-blue-500">Solution</a></li>
        <li><a href="/sustainability" className="text-black hover:text-blue-500">Contact Us</a></li>
        <li><a href="/more" className="text-black hover:text-blue-500">About Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
