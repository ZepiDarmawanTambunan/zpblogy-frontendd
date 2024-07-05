'use client'

import React, { useState, useEffect } from 'react';

const CarouselInfo = ({ title, images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 3000); // Interval dalam milidetik (misalnya, setiap 3 detik)

    return () => clearInterval(interval); // Membersihkan interval saat komponen tidak lagi dirender
  }, [currentSlide, images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative">
      <div className="w-40 text-sm font-bold border-b-2 border-zinc-600 pb-4">{title}</div>
      <div className="relative w-80 h-72 mt-8 border border-red-600 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transform transition-transform duration-300 ${
              index === currentSlide ? 'translate-x-0' : index > currentSlide ? 'translate-x-full' : '-translate-x-full'
            }`}
          >
            <img src={image.url} alt={image.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full focus:outline-none transition duration-300 ${
              index === currentSlide ? 'bg-red-600' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselInfo;