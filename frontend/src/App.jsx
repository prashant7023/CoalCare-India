import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Carousel from './components/Corousel';
import MinistryOfCoal from './components/Ministryofcoal';
import Footer from './components/Footer';
import KeyFeatures from './components/KeyFeatures';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Carousel />
      <MinistryOfCoal />
      <KeyFeatures />
      <Footer />
    </div>
  );
}

export default App;
