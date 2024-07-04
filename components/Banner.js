// components/Slide.js
import React from 'react';
import Link from 'next/link';

const Banner = ({ image, link }) => {
  return (
    <Link href={`${link}`} className="w-60 h-3/4 flex-shrink-0 border border-green-500">
        <img src={image} alt="Banner" className="w-full h-full object-cover rounded-lg" />
    </Link>
  );
};

export default Banner;