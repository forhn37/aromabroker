'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

/**브랜드소개
 * 이미지와 소개글
 * TODO : 이미지 구조짜기 
 */

export default function Brand() {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const loadMapScript = () => {
      const existingScript = document.getElementById('naver-map-script');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.id = 'naver-map-script';
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=bukc5nvt67`;
      script.onload = () => {
        console.log('Naver Map script loaded successfully');
        setMapLoaded(true);
      };
      script.onerror = (e) => {
        console.error('Failed to load Naver Map script', e);
      };
      document.head.appendChild(script);
    };

    loadMapScript();

    return () => {
      const existingScript = document.getElementById('naver-map-script');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (mapLoaded && window.naver) {
      const mapOptions = {
        center: new naver.maps.LatLng(36.3548684, 127.3580136),
        zoom: 15,
      };
      const map = new naver.maps.Map('map', mapOptions);

      new naver.maps.Marker({
        position: new naver.maps.LatLng(36.3548684, 127.3580136),
        map: map,
        title: 'AROMABROKER',
      });
    }
  }, [mapLoaded]);

  return (
    <main className="sm:p-3 flex-col h-screen overflow-hidden">
      <div className="w-screen p-2 sm:h-1/2 sm:flex sm:flex-row flex-col justify-center items-center sm:mb-5">
        <div className='sm:w-1/4'>
          <h1 className="sm:text-4xl text-2xl font-medium sm:mb-4 mb-2 sm:font-semibold sm:text-right">Aromabroker</h1>
          <article>커피 한 잔 속에는 자연이 담겨져 있습니다.
            아로마브로커를 통해 아름다운 자연을 거니세요. 아로마브로커의 향기가 집안에 가득차는 날을 항상 기대하고 있습니다. 우리의 향기가 당신을 행복하게 하길 바랍니다. 
          </article>
        </div>
        <div className='flex justify-center relative mt-2 h-full sm:w-1/2 sm:ml-10 w-full'>
          <Image src="/aboutcoffeimage.jpg" alt="coffeimage" width={1280} height={1280}/>
        </div>
      </div>
      <div className="w-screen p-2 sm:h-1/2 sm:flex sm:flex-row-reverse flex-col justify-center items-center">
        <div className='sm:w-1/4'>
          <h1 className="sm:text-4xl text-2xl font-medium sm:mb-4 mb-2 sm:font-semibold ">Shop Information</h1>
          <div>
            <h2>아로마 브로커 로스터리 까페</h2>
            <div>매장 주소 : 대전 서구 월평로 2</div>
            <div>주차장 : 월평주민센터 옆 공영주차장</div>
          </div>
        </div>
        <div className='flex justify-center relative mt-2 h-full sm:w-1/2 sm:mr-10 w-full'>
          <div id="map" className="w-full h-80 sm:h-full"></div>
        </div>
      </div>
    </main>
  );
}
