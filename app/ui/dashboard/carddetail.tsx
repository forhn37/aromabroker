'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bean, Dripbag } from '@/app/types/types';

export interface CardDetailProps {
  realname?: string;
  item: Bean | Dripbag;
}

function isBean(item: Bean | Dripbag): item is Bean {
  return (item as Bean).name !== undefined;
}


export default function Carddetail({ realname, item } : CardDetailProps){
  console.log(item)

  // const parts = imageurl.split('/');
  // const filenameWithExtension = parts.pop(); // 마지막 요소인 파일 이름을 가져옴 (starbucks6.jpg)

  // // 확장자를 제거한 파일 이름 가져오기
  // const filenameWithoutExtension = filenameWithExtension?.split('.')[0];
  // console.log(beans)
  return (
    <div style={{ width: '50vw', height: '340px' }} className="bg-gray-300 p-4 m-3">
      {/* <Link href={`/shop/beans/${filenameWithoutExtension}`}> */}
          <Image src={item.imageurl} width={200} height={200} alt="beans" />
        <div className="flex flex-col justify-center items-center text-sm mt-5">
          <div className="text-center font-bold mb-3 text-base">{isBean(item) ? item.name : item.productname}</div>
          <div className="text-center mb-3">
           {item.description}
          </div>
          <div className="text-center">{item.weight}</div>
          <div className="text-center">{item.price}</div>
        </div>
      {/* </Link> */}
    </div>
  );
};