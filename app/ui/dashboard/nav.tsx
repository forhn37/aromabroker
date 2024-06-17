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

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // 경로가 변경되면 메뉴를 닫음
    setIsOpen(false);
  }, [pathname]);


  return (
    <div className="flex justify-center items-center">
      <div className="relative" onClick={toggleMenu}>
        <Link href={isOpen ? '/' : '/phonemenu'}>
          <div className="w-8 h-6 flex flex-col justify-between items-center cursor-pointer">
            <div className={`h-1 w-full bg-slate-600 transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-2.5' : ''} rounded-sm`}></div>
            <div className={`h-1 w-full bg-slate-600 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''} rounded-sm`}></div>
            <div className={`h-1 w-full bg-slate-600 transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-2.5' : ''} rounded-sm`}></div>
          </div>
        </Link>
      </div>
    </div>
  );
}
