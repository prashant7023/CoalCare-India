import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Carousel from './components/Corousel';
import MinistryOfCoal from './components/Ministryofcoal';
import Footer from './components/Footer';
import KeyFeatures from './components/KeyFeatures';
import Hero from './components/Hero';
import GreenFuture from './components/GreenFuture';

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Hero />
      <MinistryOfCoal />
      <GreenFuture />
      <KeyFeatures />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
