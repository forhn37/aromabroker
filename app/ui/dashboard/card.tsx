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
  const [ismobileweb, setIsmobileweb] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const parts = pathname.split('/');
  const lastPart = parts.pop();

  // 화면 크기를 체크하여 적절한 폴더명을 설정하는 함수
  const updateUrls = () => {
    if (window.innerWidth >= 640) {
      setIsmobileweb(true);
    } else {
      setIsmobileweb(false);
    }
  };


  useEffect(() => {
    updateUrls();
    window.addEventListener('resize', updateUrls);
    return () => window.removeEventListener('resize', updateUrls);
  }, []);

  const prvbutton = function () {
    const offset = ismobileweb ? 25 : 50;
    if (translateX < 0) {
      const newTranslateX = translateX + offset;
      setTranslateX(newTranslateX);
      if (cardRef.current !== null) {
        cardRef.current.style.transition = 'transform 1s ease-in-out';
        cardRef.current.style.transform = `translateX(${newTranslateX}vw)`;
      }
    }
  };

  const nextbutton = function () {
    const offset = ismobileweb ? 25 : 50; // 삼항 연산자의 결과를 변수에 저장 
    const changephase = ismobileweb ? 4 : 2
    const newTranslateX = translateX - offset;
    // 변동되는 부분 끝에서 다시 돌아오는 부분 수정
    if (cardRef.current !== null) {
      if (newTranslateX < -(offset * (datatables.length - changephase))) { // 여기서도 같은 offset 사용
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

  if (ismobileweb) {
    return (
      <div className="overflow-hidden my-3 w-screen sm: p-10">

        <div className="px-3 text-2xl flex justify-start items-center sm:mt-10 sm">
          <Image
            src={`/${imagename}.png`}
            width={30}
            height={10}
            alt="Picture of the author"
          />
          {category}
        </div>
        <div style={{ width: `${25 * datatables.length}vw` }} className="flex" ref={cardRef}>
          {datatables.map((item, index) => (
            <Carddetail key={index} item={item as Bean} ismobileweb={ismobileweb} />
          ))}
        </div>
        <div className="flex justify-center w-screen mt-2">
          <div
            className={`w-4 h-2 mr-2 rounded-md bg-gray-300 ${hoveringPrev ? 'w-8' : 'w-4'} transition-all duration-200`}
            onMouseEnter={() => setHoveringPrev(true)}
            onMouseLeave={() => setHoveringPrev(false)}
            onTouchStart={() => setHoveringPrev(true)}
            onTouchEnd={() => setTimeout(() => setHoveringPrev(false), 100)}
            onTouchCancel={() => setHoveringPrev(false)}
            onClick={prvbutton}
          />
          <div
            className={`w-4 h-2 rounded-md bg-gray-300 ${hoveringNext ? 'w-8' : 'w-4'} transition-all duration-200`}
            onMouseEnter={() => setHoveringNext(true)}
            onMouseLeave={() => setHoveringNext(false)}
            onTouchStart={() => setHoveringNext(true)}
            onTouchEnd={() => setTimeout(() => setHoveringNext(false), 100)}
            onTouchCancel={() => setHoveringNext(false)}
            onClick={nextbutton}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="overflow-hidden my-3">
        <div className="w-screen px-3 text-2xl flex justify-start items-center">
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
            <Carddetail key={index} item={item as Bean} ismobileweb={ismobileweb} />
          ))}
        </div>
        <div className="flex justify-center w-screen mt-2">
          <div
            className={`w-4 h-2 mr-2 rounded-md bg-gray-300 ${hoveringPrev ? 'w-8' : 'w-4'} transition-all duration-200`}
            onMouseEnter={() => setHoveringPrev(true)}
            onMouseLeave={() => setHoveringPrev(false)}
            onTouchStart={() => setHoveringPrev(true)}
            onTouchEnd={() => setTimeout(() => setHoveringPrev(false), 100)}
            onTouchCancel={() => setHoveringPrev(false)}
            onClick={prvbutton}
          />
          <div
            className={`w-4 h-2 rounded-md bg-gray-300 ${hoveringNext ? 'w-8' : 'w-4'} transition-all duration-200`}
            onMouseEnter={() => setHoveringNext(true)}
            onMouseLeave={() => setHoveringNext(false)}
            onTouchStart={() => setHoveringNext(true)}
            onTouchEnd={() => setTimeout(() => setHoveringNext(false), 100)}
            onTouchCancel={() => setHoveringNext(false)}
            onClick={nextbutton}
          />
        </div>
      </div>
    );
  }
}

