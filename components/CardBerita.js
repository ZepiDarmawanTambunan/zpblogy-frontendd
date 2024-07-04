// components/CardBerita.js
import React from 'react';
import Link from 'next/link';

const CardBerita = ({ image, views, date, title, description, link }) => {
  return (
    <Link href={link} className="block p-4 rounded-lg w-3/4 md:w-full mx-auto hover:shadow-lg transition-shadow duration-200 mb-3 md:mb-0">
        <img src={image} alt="News" className="w-full h-64 object-cover rounded-t-lg" />
        <div className="mt-2 text-gray-600 text-sm">
            <span>{views} views</span> · <span>{date}</span>
        </div>
        <div className="mt-2 text-xl font-bold">{title}</div>
        <div className="mt-1 text-gray-700">{description}</div>
    </Link>
  );
};

export default CardBerita;