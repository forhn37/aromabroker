'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardDetailProps {
  productname: string;
  realname: string;
}

const Carddetail: React.FC<CardDetailProps> = ({ productname, realname }) => {
  const [imagePath, setImagePath] = useState<string | null>(null);

  useEffect(() => {
    const checkImage = async () => {
      const jpgPath = `/${productname}.jpg`;
      const pngPath = `/${productname}.png`;

      try {
        const jpgResponse = await fetch(jpgPath);
        if (jpgResponse.ok) {
          setImagePath(jpgPath);
        } else {
          const pngResponse = await fetch(pngPath);
          if (pngResponse.ok) {
            setImagePath(pngPath);
          } else {
            console.error('Image not found');
          }
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    checkImage();
  }, [productname]);

  return (
    <div style={{ width: '50vw', height: '370px' }} className="bg-gray-300 p-4 m-3">
      <Link href={`/shop/beans/${productname}`}>
        {imagePath ? (
          <Image src={imagePath} width={200} height={200} alt="beans" />
        ) : (
          <p>Loading image...</p>
        )}
        <div className="flex flex-col justify-center items-center text-sm mt-5">
          <div className="text-center font-bold mb-3 text-base">{realname}</div>
          <div className="text-center mb-3">
            우리가 가장 빛난 순간을 표현한 CITY Roasting bean, 사랑하는 사람과 함께 좋은 순간을 나눠보세요
          </div>
          <div className="text-center">23,000원</div>
        </div>
      </Link>
    </div>
  );
};

export default Carddetail;
