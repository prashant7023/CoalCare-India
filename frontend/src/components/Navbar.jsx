import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-items">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#statistics">Major Statistics</a></li>
        <li><a href="#sustainability">Sustainability</a></li>
        <li><a href="#more">More</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
