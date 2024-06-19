'use client'
import { useState, useEffect, useRef } from "react";
import Carddetail from "./carddetail";
import { Categories } from '@/app/types/types';
import { usePathname } from 'next/navigation'
import { Bean } from "@/app/types/types";
import Image from "next/image";

export default function Card({ category, description, datatables, imagename }: Categories) {
  const [translateX, setTranslateX] = useState(0);
  const [hoveringPrev, setHoveringPrev] = useState(false);
  const [hoveringNext, setHoveringNext] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname()
  const parts = pathname.split('/');
  const lastPart = parts.pop();

  const prvbutton = function () {
    if (translateX < 0) {
      const newTranslateX = translateX + 50;
      setTranslateX(newTranslateX);
      if (cardRef.current !== null) {
        cardRef.current.style.transition = 'transform 1s ease-in-out';
        cardRef.current.style.transform = `translateX(${newTranslateX}vw)`;
      }
    }
  };

  const nextbutton = function () {
    const newTranslateX = translateX - 50;
    if (cardRef.current !== null) {
      if (newTranslateX < -(50 * (datatables.length - 2))) {
        setTranslateX(0);
        cardRef.current.style.transition = 'none';
        cardRef.current.style.transform = `translateX(0vw)`;

        setTimeout(() => {
          if (cardRef.current !== null) {
            cardRef.current.style.transition = 'transform 1s ease-in-out';
          }
        }, 50);
      } else {
        setTranslateX(newTranslateX);
        cardRef.current.style.transition = 'transform 1s ease-in-out';
        cardRef.current.style.transform = `translateX(${newTranslateX}vw)`;
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextbutton();
    }, 5000);

    return () => clearInterval(interval);
  }, [translateX]);

  return (
    <div className="overflow-hidden mt-3">
      <div className="w-screen p-3 text-2xl flex justify-start items-center">
        <Image
          src={`/${imagename}.png`}
          width={30}
          height={10}
          alt="Picture of the author"
        />
        <div className="p-2">
          {category}
        </div>
      </div>
      <div style={{ width: `${50 * datatables.length}vw` }} className="flex" ref={cardRef}>
        {datatables.map((item, index) => (
          <Carddetail key={index} item={item as Bean} />
        ))}
      </div>
      <div className="flex justify-center w-screen mt-4 ">
        <div
          className={`w-4 h-2 mr-2 rounded-md bg-gray-300 ${hoveringPrev ? 'w-8' : 'w-4'} transition-all duration-200`}
          onMouseEnter={() => setHoveringPrev(true)}
          onMouseLeave={() => setHoveringPrev(false)}
          onClick={prvbutton}
        />
        <div
          className={`w-4 h-2 rounded-md bg-gray-300 ${hoveringNext ? 'w-8' : 'w-4'} transition-all duration-200`}
          onMouseEnter={() => setHoveringNext(true)}
          onMouseLeave={() => setHoveringNext(false)}
          onClick={nextbutton}
        />
      </div>
    </div>
  );
}
