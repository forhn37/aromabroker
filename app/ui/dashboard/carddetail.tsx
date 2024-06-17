'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bean, Dripbag } from '@/app/types/types';

export interface CardDetailProps {
  item: Bean | Dripbag;
}

function isBean(item: Bean | Dripbag): item is Bean {
  return (item as Bean).name !== undefined;
}


export default function Carddetail({ item }: CardDetailProps) {
  console.log(item)


  return (
    <div style={{ width: '50vw', height: '380px' }} className="bg-gray-300 p-4 m-3">
      <Link href={{pathname : `/shop/beans/${item.englishname}`, query: {itemindex : item.id, category : item.category }}}>
        <Image src={item.imageurl} width={200} height={200} alt="beans" />
        <div className="flex flex-col justify-start items-center text-sm mt-5 h-3/4">
          <div className="text-center font-bold mb-3 text-base">{isBean(item) ? item.name : item.productname}</div>
          <div className="text-center mb-3">
            {item.description}
          </div>
          <div className="text-center">{item.weight}</div>
          <div className="text-center">{item.price}</div>
        </div>
      </Link>
    </div>
  );
};