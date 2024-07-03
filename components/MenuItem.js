import { ChevronRightIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

const MenuItem = ({ label, submenus, isLastItem }) => {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

  return (
    <div
      className={`relative cursor-pointer text-sm ${isLastItem ? '' : 'border-b border-gray-700'} flex items-center`}
      onMouseEnter={() => setIsSubmenuVisible(true)}
      onMouseLeave={() => setIsSubmenuVisible(false)}
    >
      <span className="block px-4 py-2 text-white hover:text-gray-300">{label}</span>
      {submenus.length > 0 && (
        <span className="ml-1">
          <ChevronRightIcon className="h-4 w-4 text-white" />
        </span>
      )}
      {submenus && submenus.length > 0 && isSubmenuVisible && (
        <div className="absolute z-10 top-0 left-full w-40 bg-gray-800 shadow-lg rounded rounded-tl-none rounded-bl-none">
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