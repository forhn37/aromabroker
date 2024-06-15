'use client'
/**1. page에서 전달된 props인 category를 통하여 서버로부터 데이터를 받아온다
 * 2. 그 데이터 중에서  */ 

import { useState, useEffect, useRef } from "react";
import Carddetail from "./carddetail";
import { Categories } from '@/app/types/types';
import { usePathname } from 'next/navigation'


export default function Card({ category, confirmedurls, description, datatable }: Categories) {
  const [translateX, setTranslateX] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname()
  const parts = pathname.split('/');
  const lastPart = parts.pop();
  console.log(lastPart)
  console.log(datatable)




  const prvbutton = function () {
    // 이전 버튼 클릭 시 container가 왼쪽으로 100vw만큼 이동합니다.
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
      if (newTranslateX < -(50 * (confirmedurls.length - 2))) {
        // 마지막 슬라이드 이후에는 처음으로 돌아갑니다.
        setTranslateX(0);
        cardRef.current.style.transition = 'none';
        cardRef.current.style.transform = `translateX(0vw)`;

        // 트랜지션 효과를 위해 짧은 시간 후에 다시 설정
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
      // 자동으로 다음 슬라이드로 이동
      nextbutton();
    }, 5000); // 5초마다 실행

    // 컴포넌트 언마운트 시 인터벌 정리
    return () => clearInterval(interval);
  }, [translateX]);


  return (
    <div className="overflow-hidden mt-3">
      <div className="w-screen p-3 text-2xl">
        {category}
      </div>
      <div className="p-3 text-lg">
        {description}
      </div>
      <div style={{ width: `${50 * confirmedurls.length}vw` }}className="flex" ref={cardRef}>
        {confirmedurls.map((imageurl, index)=> (
          <Carddetail key={index} imageurl={imageurl}/>

        ))
      }
        
      </div>
      <div className="flex justify-around w-screen mt-4">
        <button className="flex justify-center" onClick={prvbutton}>이전</button>
        <button className="flex justify-center" onClick={nextbutton}>다음</button>
      </div>
    </div>
  )
}