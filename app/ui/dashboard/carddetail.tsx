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
  console.log(item)
  return (
    <div style={{ width: ismobileweb ? '25vw' : '50vw' }} className="sm:px-10 px-2 m-3 rounded-lg">
      <Link
        href={{
          pathname: item.category === 'beans'
            ? `/shop/beans/${item.englishname}`
            : `/shop/dripbag/${item.englishname}`,
          query: {
            itemindex: item.id,
            category: item.category
          }
        }}
        className='w-10 h-20'
      >
        <Image src={item.imageurl} width={1920} height={1200} alt="beans" />
        <div className="flex flex-col justify-center items-start text-sm mt-5">
          <div className="sm:text-xl mb-3 whitespace-pre-wrap h-1/4 sm:py-4">
            {isBean(item) ? item.name : item.productname}
          </div>
          <div className="mb-3 sm:text-base">
            <div className='text-amber-900 mb-2'>
              {item.englishname}
            </div>
            <div className='mb-2 text-gray-600 h-8'>
              {item.description}
            </div>
            <div className='mb-2 text-gray-600 text-lg'>{new Intl.NumberFormat('ko-KR').format(item.price)}원</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
