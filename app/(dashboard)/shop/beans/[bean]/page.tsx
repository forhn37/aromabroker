import Image from 'next/image';
import { Bean } from '@/app/types/types';
import { supabase } from '@/app/lib/supabase/supabaseClient';

export interface parmastype {
  params: params;
  searchParams: searchParams
}
export interface params {
  bean: string;
}
export interface searchParams {
  category: string;
  itemindex: number;

}
export default async function Beans({ params, searchParams }: parmastype) {


  const { data, error } = await supabase
    .from(searchParams.category)
    .select('*')
    .eq('id', searchParams.itemindex);

  if (error) {
    console.error('Error fetching data:', error);
    return <div>Error loading data</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data found</div>;
  }
  const bean: Bean = data[0];

  return (
    <main className='flex flex-col justify-center items-center bg-slate-300 p-3'>
      <Image src={bean.imageurl} width={380} height={200} alt="beans" className='outline outline-black' />
      <div className='flex flex-col items-start w-full p-4'>
        <div className='text-3xl mb-3'>기본 정보</div>
        <div className='text-xl mb-2'>{bean.name}</div>
        <div className='text-lg mb-2'>{bean.price}</div>
        <div className='text-lg mb-2'>{bean.weight}</div>
        <div className='text-lg mb-2'>{bean.strength}</div>
        <div>배송비 : {bean.shippingcost}</div>
        <div className='text-lg mb-2'>{bean.description}</div>
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