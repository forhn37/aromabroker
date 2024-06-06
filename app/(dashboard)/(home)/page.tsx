'use client'
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Card from '@/app/ui/dashboard/card';

export default function Home() {
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const prvbutton = function () {
    // 이전 버튼 클릭 시 container가 왼쪽으로 100vw만큼 이동합니다.
    if (translateX < 0) {
      const newTranslateX = translateX + 100;
      setTranslateX(newTranslateX);
      if (containerRef.current !== null) {

        containerRef.current.style.transition = 'transform 1s ease-in-out';
        containerRef.current.style.transform = `translateX(${newTranslateX}vw)`;
      }
    }
  };

  const nextbutton = function () {
    const newTranslateX = translateX - 100;
    if (containerRef.current !== null) {
      if (newTranslateX < -200) {
        // 마지막 슬라이드 이후에는 처음으로 돌아갑니다.
        setTranslateX(0);
        containerRef.current.style.transition = 'none';
        containerRef.current.style.transform = `translateX(0vw)`;

        // 트랜지션 효과를 위해 짧은 시간 후에 다시 설정
        setTimeout(() => {
          if (containerRef.current !== null) {
          containerRef.current.style.transition = 'transform 1s ease-in-out';
      }}, 50);
      } else {
        setTranslateX(newTranslateX);
        containerRef.current.style.transition = 'transform 1s ease-in-out';
        containerRef.current.style.transform = `translateX(${newTranslateX}vw)`;
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
    <main className="w-screen overflow-hidden">
      {/* <Imageslide /> */}

      <div
        className="h-1/3 flex transition-transform duration-300"
        style={{ width: '300vw' }}
        id="container"
        ref={containerRef}
      >
        <Image
          src={`/eventimage1.jpg`}
          width={500}
          height={400}
          alt="Picture of the author"
          className='w-screen'
        />
        <Image
          src={`/eventimage2.jpg`}
          width={500}
          height={400}
          alt="Picture of the author"
          className='w-screen'
        />
        <Image
          src={`/eventimage3.jpg`}
          width={500}
          height={400}
          alt="Picture of the author"
          className='w-screen'
        />
      </div>
      <div className="flex justify-around w-screen mt-4">
        <button className="flex justify-center" onClick={prvbutton}>이전</button>
        <button className="flex justify-center" onClick={nextbutton}>다음</button>
      </div>
      <Card />
    </main>
  )
}
