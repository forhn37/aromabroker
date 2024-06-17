'use client'
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);


  return (
    <div className="relative">
      <div className="w-8 h-8 flex flex-col justify-between items-center cursor-pointer" onClick={toggleMenu}>
        <div className={`h-1 w-full bg-black transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-3.5' : ''}`}></div>
        <div className={`h-1 w-full bg-black transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-3.5' : ''}`}></div>
      </div>
      {isOpen && (
        <div className="absolute top-10 left-0 w-full bg-white shadow-lg">
          <ul className="list-none p-0 m-0">
            <li className="p-4 border-b border-gray-300"><a href="#home" className="text-black">Home</a></li>
            <li className="p-4 border-b border-gray-300"><a href="#about" className="text-black">About</a></li>
            <li className="p-4 border-b border-gray-300"><a href="#services" className="text-black">Services</a></li>
            <li className="p-4"><a href="#contact" className="text-black">Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
