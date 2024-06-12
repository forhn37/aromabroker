import Image from 'next/image';
import {Bean, Data} from '@/app/types/types'

export default async function Beans({ params }: { params: { bean: string } }) {

  const res = await fetch('https://aromabroker-git-carddynamicpage-forhn37s-projects.vercel.app/data.json');
  const data: Data = await res.json() as Data;

  const foundBean: Bean | undefined = data.beans.find(bean => bean.name === params.bean);

  if (!foundBean) {
    return <div>Bean not found</div>;
  }

  return (
    <main className='flex flex-col justify-center items-center bg-slate-300 p-3'>
      <Image src={`/${params.bean}.jpg`} width={380} height={200} alt="beans" className='outline outline-black' />
      <div className='flex flex-col items-start w-full p-4'>
        <div className='text-3xl mb-3'>기본 정보</div>
        <div className='text-xl mb-2'>{foundBean.name}</div>
        <div className='text-lg mb-2'>{foundBean.price}</div>
        <div className='text-lg mb-2'>{foundBean.weight}</div>
        <div className='text-lg mb-2'>{foundBean.strength}</div>
        <div>배송비 : {foundBean.shippingcost}</div>
        <div className='text-lg mb-2'>{foundBean.description}</div>
      </div>
    </main>
  );
}


// "name": "starbuck2",
// "description": "A species of legume native to East Asia.",
// "price": 4.99,
// "weight": "250g",
// "shippingcost": 2.49,
// "strength": "light"