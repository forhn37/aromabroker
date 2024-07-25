'use client'
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SupabaseGetUrls from '@/app/lib/supabasegeturls';

export default function MainImageSlide() {
  const [hoveringPrev, setHoveringPrev] = useState(false);
  const [hoveringNext, setHoveringNext] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [urls, setUrls] = useState<string[]>([]);
  const [weburls, setWeburls] = useState<string[]>([]);
  const [mobileurls, setMobileurls] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);  

  // 화면 크기를 체크하여 적절한 폴더명을 설정하는 함수
  const setmainimageweb = async () => {
    const webUrls = await SupabaseGetUrls('mainimage_web');
    setWeburls(webUrls);
  }
  const setmainimagemobile = async () => {
    const mobileUrls = await SupabaseGetUrls('mainimage');
    setMobileurls(mobileUrls);
  }
  console.log(weburls);
  console.log(mobileurls);

  const updateUrls = () => {
    if (window.innerWidth >= 640) {
      // 화면 크기가 sm 이상일 때
      setUrls(weburls);
    } else {
      // 화면 크기가 sm 미만일 때
      setUrls(mobileurls);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      await setmainimagemobile();
      await setmainimageweb();
      updateUrls();
    };

    fetchData();
    window.addEventListener('resize', updateUrls);
    return () => window.removeEventListener('resize', updateUrls);
  }, [weburls, mobileurls]);



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
      if (newTranslateX < -100 * (urls.length - 1)) {
        // 마지막 슬라이드 이후에는 처음으로 돌아갑니다.
        setTranslateX(0);
        containerRef.current.style.transition = 'none';
        containerRef.current.style.transform = `translateX(0vw)`;

        // 트랜지션 효과를 위해 짧은 시간 후에 다시 설정
        setTimeout(() => {
          if (containerRef.current !== null) {
            containerRef.current.style.transition = 'transform 1s ease-in-out';
          }
        }, 50);
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
    }, 4000); // 5초마다 실행

    // 컴포넌트 언마운트 시 인터벌 정리
    return () => clearInterval(interval);
  }, [translateX]);



  return (
    <div className="w-screen overflow-hidden">
      <div
        className="h-1/3 flex transition-transform duration-300"
        style={{ width: `${100 * urls.length}vw` }}
        ref={containerRef}
      >
        {urls.map((url, index) => (
          <div key ={index}>
            <Link href={{ pathname: `/eventpage/event${index}`, query: { urlpathname: url} }}>
            <Image
              src={url} 
              width={500}
              height={400}
              alt={`Slide ${index + 1}`}
              className="w-screen"
            />
          </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-screen mt-3">
        <div
          className={`w-10 h-2 mr-2 rounded-md bg-gray-300 ${hoveringPrev ? 'w-20' : 'w-10'} transition-all duration-200`}
          onMouseEnter={() => setHoveringPrev(true)}
          onMouseLeave={() => setHoveringPrev(false)}
          onTouchStart={() => setHoveringPrev(true)}
          onTouchEnd={() => setTimeout(() => setHoveringPrev(false), 100)}
          onTouchCancel={() => setHoveringPrev(false)}
          onClick={prvbutton}
        />
        <div
          className={`w-10 h-2 rounded-md bg-gray-300 ${hoveringNext ? 'w-20' : 'w-10'} transition-all duration-200`}
          onMouseEnter={() => setHoveringNext(true)}
          onMouseLeave={() => setHoveringNext(false)}
          onTouchStart={() => setHoveringNext(true)}
          onTouchEnd={() => setTimeout(() => setHoveringNext(false), 100)}
          onTouchCancel={() => setHoveringNext(false)}
          onClick={nextbutton}
        />
      </div>
    </div>
  )
}