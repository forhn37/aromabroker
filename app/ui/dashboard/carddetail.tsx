'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardDetailProps {
  realname?: string;
  beans: Bean;
}
export interface Bean {
  id: number;
  created_at: string;
  name: string;
  description: string;
  price: number;
  weight: string;
  shippingcost: number;
  strength: string;
  category: string;
  imageurl: string;
}


const Carddetail: React.FC<CardDetailProps> = ({ realname, beans }) => {

  // const parts = imageurl.split('/');
  // const filenameWithExtension = parts.pop(); // 마지막 요소인 파일 이름을 가져옴 (starbucks6.jpg)

  // // 확장자를 제거한 파일 이름 가져오기
  // const filenameWithoutExtension = filenameWithExtension?.split('.')[0];
  console.log(beans)
  return (
    <div style={{ width: '50vw', height: '340px' }} className="bg-gray-300 p-4 m-3">
      {/* <Link href={`/shop/beans/${filenameWithoutExtension}`}> */}
          <Image src={beans.imageurl} width={200} height={200} alt="beans" />
        <div className="flex flex-col justify-center items-center text-sm mt-5">
          <div className="text-center font-bold mb-3 text-base">{realname}</div>
          <div className="text-center mb-3">
            우리가 가장 빛난 순간을 표현한 CITY Roasting bean, 사랑하는 사람과 함께 좋은 순간을 나눠보세요
          </div>
          <div className="text-center">23,000원</div>
        </div>
      {/* </Link> */}
    </div>
  );
};

export default Carddetail;
