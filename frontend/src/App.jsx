import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing Components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Carousel from './components/Corousel'; // Corrected typo from 'Corousel' to 'Carousel'
import MinistryOfCoal from './components/MinistryOfCoal';
import Footer from './components/Footer';
import KeyFeatures from './components/KeyFeatures';
import Hero from './components/Hero';
import GreenFuture from './components/GreenFuture';
import Charts from './components/Charts';
import CarbonFootprint from './components/CarbonFootprint'; // Importing CarbonFootprint component

function App() {
  return (
    <Router>
      <div className="App">
        {/* Main Navigation Bar */}
        <Navbar />

        {/* Routes for different pages */}
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={
            <>
              <Carousel />
              <Hero />
              <Charts />
              <MinistryOfCoal />
              <GreenFuture />
              <KeyFeatures />
            </>
          } />
          
          {/* Carbon Footprint Page Route */}
          <Route path="/carbon-footprint" element={<CarbonFootprint />} />
        </Routes>

        {/* Optional Header Component - Ensure its placement */}
        <Header />
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
