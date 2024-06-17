'use client'
// TODO : Link클릭시 조건부로 phonemenu 링크 혹은 홈 링크로 바뀌도록 해놓았으나 mobilemenu에서 홈으로 이동시 두번 클릭해야 바뀜
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center items-center">
      {isOpen ? (
        <Link href='/' onClick={toggleMenu}>
          <div className="relative">
            <div className="w-8 h-6 flex flex-col justify-between items-center cursor-pointer" onClick={toggleMenu}>
              <div className={`h-1 w-full bg-slate-600 transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-2.5 ' : ''} rounded-sm`}></div>
              <div className={`h-1 w-full bg-slate-600 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''} rounded-sm`}></div>
              <div className={`h-1 w-full bg-slate-600 transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-2.5' : ''} rounded-sm`}></div>
            </div>
          </div>
        </Link>
      ) : (
        <Link href='/phonemenu' onClick={toggleMenu}>
          <div className="relative">
            <div className="w-8 h-6 flex flex-col justify-between items-center cursor-pointer" onClick={toggleMenu}>
              <div className={`h-1 w-full bg-slate-600 transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-2.5' : ''} rounded-sm`}></div>
              <div className={`h-1 w-full bg-slate-600 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''} rounded-sm`}></div>
              <div className={`h-1 w-full bg-slate-600 transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-2.5' : ''} rounded-sm`}></div>
            </div>
          </div>
        </Link>
      )}
    </div>
  )
}