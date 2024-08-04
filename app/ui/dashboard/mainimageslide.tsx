'use client'
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface MainslideProps {
  webUrls: string[],
  mobileUrls: string[]
}

export default function MainImageSlide({ webUrls, mobileUrls }: MainslideProps) {
  const [translateX, setTranslateX] = useState(0);
  const [urls, setUrls] = useState<string[]>([]);
  const [ismobileweb, setIsmobileweb] = useState('')
  const [hoveringPrev, setHoveringPrev] = useState(false);
  const [hoveringNext, setHoveringNext] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 화면 크기를 체크하여 적절한 폴더명을 설정하는 함수
  const updateUrls = () => {
    if (window.innerWidth >= 640) {
      setUrls(webUrls);
      setIsmobileweb('webimageurl');
    } else {
      setUrls(mobileUrls);
      setIsmobileweb('mobileimageurl');
    }
  };

  useEffect(() => {
    updateUrls();
    window.addEventListener('resize', updateUrls);
    return () => window.removeEventListener('resize', updateUrls);
  }, []);

  const prvbutton = () => {
    if (translateX < 0) {
      const newTranslateX = translateX + 100;
      setTranslateX(newTranslateX);
      if (containerRef.current !== null) {
        containerRef.current.style.transition = 'transform 1s ease-in-out';
        containerRef.current.style.transform = `translateX(${newTranslateX}vw)`;
      }
    }
  };

  const nextbutton = () => {
    const newTranslateX = translateX - 100;
    if (containerRef.current !== null) {
      if (newTranslateX < -(100 * (urls.length - 1))) {
        setTranslateX(0);
        containerRef.current.style.transition = 'none';
        containerRef.current.style.transform = `translateX(0vw)`;
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
      nextbutton();
    }, 5000); // 5초마다 실행

    return () => clearInterval(interval);
  }, [translateX, urls]); // translateX와 urls를 의존성 배열에 추가

  return (
    <div className='overflow-hidden'>
      <div
        className="flex duration-300 transition-transform"
        style={{ width: `${100 * urls.length}vw` }}
        ref={containerRef}
      >
        {urls.map((url, index) => (
          <Link href={{ pathname: `/eventpage/event${index}`, query: { urlpathname: url, ismobileweb: ismobileweb } }} key={index} className="sm:mx-40 w-screen">
            <Image
              src={url}
              width={1920}
              height={1200}
              alt={`Slide ${index + 1}`}
            />
          </Link>
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
  );
}
