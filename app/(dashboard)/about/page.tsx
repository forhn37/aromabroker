'use client'
import Image from 'next/image';
// import Maps from '../../lib/mapinformation'
import { useEffect,useState } from 'react';
import Script from 'next/script';
/**브랜드소개
 * 이미지와 소개글
 * TODO : 이미지 구조짜기 
 */

export default function Brand() {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const loadMapScript = () => {
      // 기존 스크립트가 있으면 제거합니다.
      const existingScript = document.getElementById('naver-map-script');
      if (existingScript) {
        existingScript.remove();
      }

      // 새로운 스크립트를 추가합니다.
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

    // Cleanup function: 컴포넌트가 언마운트될 때 스크립트를 제거합니다.
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

      // 마커 설정
      new naver.maps.Marker({
        position: new naver.maps.LatLng(36.3548684, 127.3580136),
        map: map,
        title: 'AROMABROKER',
      });
    }
  }, [mapLoaded]);

  return (
    <main className="h-screen">
      <div className="w-full h-1/2 p-2">
        <h1 className="text-2xl font-medium mb-2">아로마브로커</h1>
        <article>커피 한 잔 속에는 자연이 담겨져 있습니다.
          아로마브로커를 통해 아름다운 자연을 거니세요.
        </article>
        <div className='flex justify-center w-full h-3/4 relative mt-2'>
          <Image src="/aboutcoffeimage.jpg" alt="coffeimage" fill={true} />
        </div>

      </div>
      <div className="w-full h-1/2 p-2">
        <div>
          <h1 className="text-2xl font-medium mb-2 ">매장안내</h1>
          <div >
            <h2>아로마 브로커 로스터리 까페</h2>
            <div>매장 위치 : 대전 서구 월평로 2</div>
          </div>
        </div>
        <div className='mt-2 h-3/4'>
          <div id="map" style={{ width: '100%', height: '100%' }}></div>
        </div>
      </div>
    </main>
  );
}