'use client'
// components/Carousel.js
import { useState, useEffect } from 'react';
import Banner from '@/components/Banner';

const initialBanners = [
  { image: 'https://via.placeholder.com/400', link: '/page1' },
  { image: 'https://via.placeholder.com/400', link: '/page2' },
  { image: 'https://via.placeholder.com/400', link: '/page3' },
  { image: 'https://via.placeholder.com/400', link: '/page4' },
  { image: 'https://via.placeholder.com/400', link: '/page5' }
];

const Carousel = () => {
  const [banners, setBanners] = useState(initialBanners);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
    setBanners((prevBanners) => {
      const newBanners = [...prevBanners];
      const firstBanner = newBanners.shift();
      newBanners.push(firstBanner);
      return newBanners;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setBanners((prevBanners) => {
      const newBanners = [...prevBanners];
      const shiftedBanners = newBanners.slice(index).concat(newBanners.slice(0, index));
      return shiftedBanners;
    });
  };

  return (
    <div className="w-full mt-10 bg-slate-200 h-60 flex flex-col items-center justify-center p-8">
      <div className="relative w-11/12 md:w-4/5 h-full flex items-center justify-center overflow-hidden border border-red-500">
        <div className="flex gap-3">
          {banners.map((banner, index) => (
            <Banner key={index} image={banner.image} link={banner.link} />
          ))}
        </div>
      </div>
      <div className="flex space-x-2 mt-4">
        {initialBanners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;