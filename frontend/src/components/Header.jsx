import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <img src="../public/images/Emblem_of_India.svg.png" alt="Government Logo" className="logo" />
      <div className="header-title">
        <h1>Ministry of Coal</h1>
        <p>Government of India</p>
      </div>
    </header>
  );
}

export default Header;
