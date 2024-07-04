'use client'

// components/Carousel.js
import { useState, useEffect } from 'react';
import Banner from '@/components/Banner';

const banners = [
  { image: 'https://via.placeholder.com/400', link: '/page1' },
  { image: 'https://via.placeholder.com/400', link: '/page2' },
  { image: 'https://via.placeholder.com/400', link: '/page3' },
  { image: 'https://via.placeholder.com/400', link: '/page4' },
  { image: 'https://via.placeholder.com/400', link: '/page5' }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
  };

  return (
    <div className="w-full mt-10 bg-slate-200 h-60 flex flex-col items-center justify-center">
      <div className="relative w-4/5 h-full flex items-center justify-center overflow-hidden border border-red-500">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {banners.map((banner, index) => (
            <Banner key={index} image={banner.image} link={banner.link} />
          ))}
        </div>
      </div>
      <div className="absolute top-0 bottom-0 flex items-center">
        <button onClick={prevSlide} className="ml-2 text-gray-700">
          Prev
        </button>
        <button onClick={nextSlide} className="mr-2 text-gray-700">
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;