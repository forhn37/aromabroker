
import Image from 'next/image';

export default function BrandPage() {

  return (
    <main>
      <div className="w-screen p-2 sm:flex sm:flex-row flex-col justify-center items-center sm:mb-5">
        <div className='sm:w-1/4'>
          <h1 className="sm:text-4xl text-2xl font-medium sm:mb-4 mb-2 sm:font-semibold sm:text-right">Profile</h1>
          <div>커피 한 잔 속에는 자연이 담겨져 있습니다.
            아로마브로커를 통해 아름다운 자연을 거니세요. 아로마브로커의 향기가 집안에 가득차는 날을 항상 기대하고 있습니다. 우리의 향기가 당신을 행복하게 하길 바랍니다. 
          </div>
        </div>
        <div className='flex justify-center relative mt-2 h-full sm:w-1/3 sm:ml-10 w-full'>
          <Image src="/profileimage.jpg" alt="coffeimage" width={1280} height={1280}/>
        </div>
      </div>
    </main>
  );
}