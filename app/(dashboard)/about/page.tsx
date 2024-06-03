import Image from 'next/image';
/**브랜드소개
 * 이미지와 소개글
 * TODO : 이미지 구조짜기 
 */

export default function Brand() {
  return (
    <main className="h-screen">
      <div className="w-full outline h-1/2 p-2">
        <h1 className="text-2xl ">아로마브로커</h1>
        <article>커피 한 잔 속에는 자연이 담겨져 있습니다.
          아로마브로커를 통해 아름다운 자연을 거니세요.
        </article>
        <div className='flex justify-center'>
          <Image src="/aboutcoffeimage.jpg" alt="coffeimage" width={400} height={200} />
        </div>
      </div>
      <div className="w-full outline h-1/2 p-2">
        <div>
          <h1 className="text-2xl ">매장안내</h1>
          <div >
            <h2>아로마 브로커 로스터리 까페</h2>
            <div>매장 위치 : 대전 서구 월평로 2</div>
          </div>
        </div>
        <div className='mt-2 outline h-64'>
          <div>지도들어갈자리</div>
        </div>
      </div>
    </main>
  );
}