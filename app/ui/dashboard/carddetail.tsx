'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bean, Dripbag } from '@/app/types/types';

export interface CardDetailProps {
  item: Bean | Dripbag;
  ismobileweb: boolean;
}

function isBean(item: Bean | Dripbag): item is Bean {
  return (item as Bean).name !== undefined;
}

export default function Carddetail({ item, ismobileweb }: CardDetailProps) {
  return (
    <div style={{ width: ismobileweb ? '25vw' : '50vw' }} className="px-10 m-3 rounded-lg">
      <Link href={{ pathname: `/shop/beans/${item.englishname}`, query: { itemindex: item.id, category: item.category } }} className='w-20 h-36'>
        <Image src={item.imageurl} width={1920} height={1200} alt="beans" />
        <div className="flex flex-col justify-start items-center text-sm mt-5">
          <div className="text-center font-bold mb-3 whitespace-pre-wrap h-1/4">
            {isBean(item) ? item.name : item.productname}
          </div>
          <div className="text-center mb-3">
            {item.description}
          </div>
          <div className="text-center">{item.price}</div>
        </div>
      </Link>
    </div>
  );
}
