'use client'

import { useState, useEffect, useRef } from "react";
import Carddetail from "./carddetail";


export default function Card({beanCategory}) {
  const [translateX, setTranslateX] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

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
      if (newTranslateX < -200) {
        // 마지막 슬라이드 이후에는 처음으로 돌아갑니다.
        setTranslateX(0);
        cardRef.current.style.transition = 'none';
        cardRef.current.style.transform = `translateX(0vw)`;

        // 트랜지션 효과를 위해 짧은 시간 후에 다시 설정
        setTimeout(() => {
          if (cardRef.current !== null) {
          cardRef.current.style.transition = 'transform 1s ease-in-out';
      }}, 50);
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
        {beanCategory}
      </div>
      <div className="p-3 text-lg">
        아로마브로커만의 특유한 풍미가 담겨있는 시그니처 원두
      </div>
      <div style={{ width: '300vw' }} className="flex" ref={cardRef}>
        <Carddetail beanname={'starbucks1'} realname={'환희'}/>
        <Carddetail beanname={'starbucks2'} realname={'월광'}/>
        <Carddetail beanname={'starbucks3'} realname={'시절인연'}/>
        <Carddetail beanname={'starbucks4'} realname={'콜롬비아'}/>
        <Carddetail beanname={'starbucks5'} realname={'에티오피아'}/>
        <Carddetail beanname={'starbucks6'} realname={'야호'}/>
      </div>
      <div className="flex justify-around w-screen mt-4">
        <button className="flex justify-center" onClick={prvbutton}>이전</button>
        <button className="flex justify-center" onClick={nextbutton}>다음</button>
      </div>
    </div>
  )
}