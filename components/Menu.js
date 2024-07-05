import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Menu = ({ labelMenu, items }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let timeoutId = null;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleMouseEnter = () => {
    if (windowWidth >= 768) {
      clearTimeout(timeoutId);
      setIsMenuVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (windowWidth >= 768) {
      timeoutId = setTimeout(() => {
        setIsMenuVisible(false);
      }, 500);
    }
  };

  return (
    <div className="relative text-sm">
      <div
        className="cursor-pointer flex items-center justify-between md:gap-2 px-4 py-2 text-white hover:text-gray-300"
        onClick={() => {
          if (windowWidth < 768) toggleMenu();
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span>{labelMenu}</span>
        {items.length > 0 && (
          <span>
            <ChevronDownIcon className="h-4 w-4 text-white" />
          </span>
        )}
      </div>

      {items.length > 0 && isMenuVisible && (
        <div
          className="md:absolute md:z-10 md:top-7 md:left-0 md:w-40 md:bg-gray-800 md:shadow-lg md:rounded bg-gray-800 shadow-lg rounded mt-1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
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