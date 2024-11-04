import Image from 'next/image';
import { Bean, Dripbag } from '@/app/types/types';
import { supabase } from '@/app/lib/supabase/supabaseClient';

export interface parmastype {
  params: params;
  searchParams: searchParams
}
export interface params {
  dripbag: string;
}
export interface searchParams {
  category: string;
  itemindex: number;

}
export default async function Dripbags({ params, searchParams }: parmastype) {


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
  const dripbag: Dripbag = data[0];
  console.log(dripbag)

  return (
    <main className='sm:flex justify-center p-3 bg-gray-100'>
      <div className='sm:p-10 sm:w-1/2 flex sm:justify-end sm:mt-20 justify-center'>
        <Image src={dripbag.imageurl} width={1920} height={1200} alt="beans" className='sm:w-4/5 p-2' />
      </div>
      <div className='flex p-4 sm:w-1/2 h-full sm:px-20 sm:py-32'>
        <div className='flex flex-col justify-center w-full'>
          <div className='sm:text-3xl sm:mb-4 font-bold text-xl mb-2'>{dripbag.productname}</div>
          <div className='sm:mb-6 sm:text-3xl text-xl mb-3'>{new Intl.NumberFormat('ko-KR').format(dripbag.price)}원</div>
          <div>
            <div className='sm:text-base text-sm sm:mb-3 font-semibold'>기본 정보</div>
            <div className='flex sm:w-full text-sm py-2'>
              <div className='sm:w-1/4 w-1/4 font-bold'>
                <div className='sm:py-2 py-1'>배송비</div>
                <div className='sm:py-2 py-1'>노트</div>
                <div className='sm:py-2 py-1'>용량</div>
              </div>
              <div>
                <div className='sm:py-2 py-1'>{new Intl.NumberFormat('ko-KR').format(dripbag.shippingcost)}원</div>
                <div className='sm:py-2 py-1'>{dripbag.description}</div>
                <div className='sm:py-2 py-1'>{dripbag.weight}</div>
              </div>
            </div>
          </div>
          {/* <div className='sm:mt-5 bg-green-600 sm:w-2/3'>
            <button className='border w-full sm:py-2 py-1 '>N페이 구매</button>
          </div> */}
          <div className='py-2'>당일 12시이전 주문건에 관하여 당일 발송합니다.</div>
          <div className='py-2'>구매를 원하시는 고객님께서는 Q&A 게시판에 작성해주시거나 혹은 Aromabroker(042-485-1164)로 연락해주시면 감사하겠습니다.</div>
        </div>
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