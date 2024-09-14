import React, { useState } from 'react';
import '../styles/Carousel.css';

const images = [
  {
    src: 'https://coal.nic.in/sites/default/files/2019-10/banner_1.jpg',
    title: 'All India Coal Production',
    description: '565 MT in 2013-14'
  },
  {
    src: 'https://coal.nic.in/sites/default/files/2019-10/banner%203.jpg',
    title: 'All India Coal Production',
    description: '8 MT in 2022-23'
  },
  {
    src: 'https://coal.nic.in/sites/default/files/2019-10/banner%202.jpg',
    title: 'All India Coal Production',
    description: '83 MT in 2022-23'
  },
  {
    src: '../public/vite.svg',
    title: 'All India Coal Production',
    description: '8c MT in 2022-23'
  }
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-image" >
        <img src={images[currentIndex].src} alt="Carousel Slide" />
        <div className="carousel-caption">
          <h3>{images[currentIndex].title}</h3>
          <p>{images[currentIndex].description}</p>
        </div>
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>&#10094;</button>
      <button className="carousel-control next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
}

export default Carousel;
