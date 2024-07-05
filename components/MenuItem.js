import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import React, { useState, useEffect } from 'react';

const MenuItem = ({ label, submenus, isLastItem }) => {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let timeoutId = null;

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
    if (windowWidth >= 768) {
      clearTimeout(timeoutId);
      setIsSubmenuVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (windowWidth >= 768) {
      timeoutId = setTimeout(() => {
        setIsSubmenuVisible(false);
      }, 500);
    }
  };

  const handleClick = () => {
    if (windowWidth < 768) {
      setIsSubmenuVisible(!isSubmenuVisible);
    }
  };

  return (
    
    <div className="relative text-sm">
    <div
      className={`${isLastItem ? '' : 'border-b border-gray-700'} cursor-pointer flex items-center justify-between md:gap-2 px-4 md:px-0 py-2 md:py-0 text-white hover:text-gray-300`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <span className="block px-4 py-2 text-white hover:text-gray-300">{label}</span>
      {submenus.length > 0 && (
        <span className="ml-1 flex items-center md:pr-3">
          <ChevronRightIcon className="h-4 w-4 text-white hidden md:block" />
          <ChevronDownIcon className="h-4 w-4 text-white block md:hidden" />
        </span>
      )}
      
    </div>
      {submenus && submenus.length > 0 && isSubmenuVisible && (
        <div className="md:absolute md:z-10 top-full left-0 w-full md:w-40 bg-gray-700 md:shadow-lg md:rounded md:rounded-tl-none block md:top-0 md:left-full">
          <div className="py-2">
            {submenus.map((submenu, index) => (
              <MenuItem
                key={index}
                label={submenu.label}
                submenus={submenu.submenus}
                isLastItem={index === submenus.length - 1}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;