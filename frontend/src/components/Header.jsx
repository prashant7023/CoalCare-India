import React from 'react';

function Header() {
  return (
    <header className="flex items-center justify-center p-2 bg-white border-b-2 border-red-700">
      {/* Left Side: Emblem of India */}
      <img
        src="/images/Emblem_of_India.svg.png"
        alt="Emblem of India"
        className="w-20 mr-5"
      />

      {/* Center: Ministry of Coal Title */}
      <div className="text-center">
        <h1 className="text-2xl text-gray-800 m-0">Ministry of Coal</h1>
        <p className="text-sm text-gray-600 m-0">Government of India</p>
      </div>

      {/* Right Side: Other Logos */}
      <div className="flex space-x-5 ml-5">
        <img
          src="/images/Make-in-India-logo.png"
          alt="Make in India"
          className="w-20"
        />
        <img
          src="/images/swachh-bharat-logo.png"
          alt="Swachh Bharat"
          className="w-20"
        />
        <img
          src="/images/digital-india-logo.png"
          alt="Digital India"
          className="w-20"
        />
      </div>
    </header>
  );
}

export default Header;
