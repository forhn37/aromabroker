'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  // const handleLinkClick = () => {
  //   setIsOpen(false);
  // };
  useEffect(() => {
    if (pathname === '/') {
      setIsOpen(false);
    }
  }, [pathname]);

// "relative w-20 h-14 sm:w-40 sm:h-28"
  return (
    <div className="flex justify-center items-center sm:hidden">
      <div className="relative" onClick={toggleMenu}>
        <Link href={isOpen ? '/' : '/phonemenu'}>
          <div className="w-6 h-4 flex flex-col justify-between items-center cursor-pointer">
            <div className={`h-0.75 w-full bg-slate-600 transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-1' : ''} rounded-sm`}></div>
            <div className={`h-0.75 w-full bg-slate-600 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''} rounded-sm`}></div>
            <div className={`h-0.75 w-full bg-slate-600 transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-2.5' : ''} rounded-sm`}></div>
          </div>
        </Link>
      </div>
    </div>
  );
}
