import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Carousel from './components/Corousel';
import MinistryOfCoal from './components/Ministryofcoal';
import Footer from './components/Footer';
import KeyFeatures from './components/KeyFeatures';
import Hero from './components/Hero';
import GreenFuture from './components/GreenFuture';
import BarChart from './components/BarChart'; // Importing BarChart

import { UserData } from './components/Data'; // Importing the Data.js file

function App() {
  const [userData , setUserData] = userState({
    labels: UserData.map((data)=>data.year),
    datasets: [{
      label: 'User Gained',
      data: UserData.map((data) => data.userGain),
    }]
  })



  return (
    <div>
      <Navbar />
      <Carousel />
      <Hero />
      <MinistryOfCoal />
      <GreenFuture />
      <KeyFeatures />
      <Header />
      <BarChart chartData={userData} /> {/* Adding the BarChart component */}
      <Footer />
    </div>
  );
}

export default App;
