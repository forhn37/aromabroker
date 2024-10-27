
import Image from 'next/image';

export default function BrandPage() {

  return (
    <main>
      <div className="w-screen p-2 sm:flex sm:flex-row flex-col justify-center items-center sm:mb-5 sm:mt-5">
        <div className='sm:w-2/4'>
          <h1 className="sm:text-4xl text-2xl font-medium sm:mb-10 mb-2 sm:font-semibold sm:text-center">Profile</h1>
          <div className='border sm:mb-5'></div>
          <div className='flex'>
            <div className='sm:w-44'>
              <div>2010 - 2015</div>
              <div></div>
              <div></div>
              <div></div>
              <div className='mb-24'></div>
              <div>2016 - 2017</div>
              <div>2017 - 2019</div>
              <div>2020 - 2021</div>
              <div>2021</div>
              <div>2022 -</div>
            </div>
            <div>
              <div>Daily Roast Coffee 만년본점 바리스타</div>
              <div>Daily Roast Coffee 만년본점 매니저</div>
              <div>Daily Roast Coffee 본사(서대전) 교육팀장</div>
              <div>Daily Roast Coffee 만년본점 바리스타 전국 16개 매장 가맹점주 창업반 교육, 직원 교육 및 슈퍼바이저</div>
              <div>Daily Roast Coffee 중국 베이징 1호점 디렉터</div>
              <div>CHASTER 총괄 매니저</div>
              <div>THE-C 총괄 매니저</div>
              <div>(주)익선다다 주관 카페 4개 매장 디렉터, AROMABROKER 설립</div>
              <div>Youtube 채널개설</div>
              <div>AROMABROKER 오프라인 매장 오픈</div>
            </div>
          </div>
          <div className='text-lg mt-10 mb-2'>기타 이력 사항</div>
          <div className='border'></div>
          <div className='sm:mt-3'>
            <div>부산 렉서스 VIP 커피클래스 강사(2011-2013)</div>
            <div>호주 멜버른 Cafe Merchant guild 바리스타(2013)</div>
            <div>호주 멜버른 Cafe Merchant guild Prana Chai tea 블렌딩 교육 이수(2013)</div>
            <div>대전 갤러리아 VIP 커피클래스 강사(2014-2015)</div>
            <div>통인동 커피공방 바리스타, Daily Roast Coffee 베이징 1호점 컨설팅(2015) </div>
            <div>Daily Roast Coffee 베이징점, 우한점 관리자 교육 및 중국사업부 관리자 및 지도자 과정 커피 교육 커리큘럼 제작(2015)</div>
            <div>옛터 민속 박물관 로스터리 카페 컨설팅, 아트벤처 카페 컨설팅, CHASTER 컨설팅(2016)</div>
            <div>THE-C coffee & dessert 컨설팅(2017)</div>
            <div>(주)익선다다 요식업 부서 카페(볕, 오아시스, 층층층, 관사촌커피) 4개 매장 디렉터 및 매니저급 커피 교육 강사 겸임</div>
            <div></div>
          </div>
        </div>
        <div className='flex justify-center relative mt-2 h-full sm:w-1/4 sm:ml-10 w-full'>
          <Image src="/profileimage.jpg" alt="coffeimage" width={1280} height={1280} />
        </div>
      </div>
    </main>
  );
}