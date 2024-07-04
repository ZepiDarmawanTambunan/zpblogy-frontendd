import React, { useState } from 'react';
import MenuItem from './MenuItem';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Menu = ({ labelMenu, items }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  let timeoutId = null;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsMenuVisible(true);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setIsMenuVisible(false);
    }, 500);
  };

  return (
    <div
      className="relative cursor-pointer text-sm flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="px-4 py-2 text-white hover:text-gray-300">{labelMenu}</span>
      {items.length > 0 && (
        <span className="ml-1">
          <ChevronDownIcon className="h-4 w-4 text-white" />
        </span>
      )}
      
      {items.length > 0 && (
        <div
          className={`absolute z-10 top-7 left-0 w-40 bg-gray-800 shadow-lg rounded ${
            isMenuVisible ? 'block' : 'hidden'
          }`}
        >
          <div className="py-2">
            {items.map((item, index) => (
              <MenuItem
                key={index}
                label={item.label}
                submenus={item.submenus}
                isLastItem={index === items.length - 1}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;