import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Carousel from './components/Corousel';
import MinistryOfCoal from './components/Ministryofcoal';
import Footer from './components/Footer';
import KeyFeatures from './components/KeyFeatures';
import Hero from './components/Hero';
import GreenFuture from './components/GreenFuture';
import Charts from './components/Charts';


// import { UserData } from './components/Data'; // Importing the Data.js file

function App() {


  return (
    <div>
      <Navbar />
      <Carousel />
      <Hero />
      <Charts  />
      <MinistryOfCoal />
      <GreenFuture />
      <KeyFeatures />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
