import Image from "next/image";
import { dohyun } from "@/app/ui/font";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '대전 원데이(Oneday) 커피 클래스 - 아로마브로커',
  description: '바쁜 일상 속에서 즐기는 원데이(Oneday)  커피 클래스. 커피의 매력을 한 번에 경험해보세요.',
  keywords: '커피, 원데이 클래스, 커피 클래스, 대전 커피, 아로마브로커, onedayclass, coffee',
  authors: [{ name: 'aromabroker', url: 'https://aromabroker.com' }],
  openGraph: {
    title: '대전 원데이(Oneday)  커피 클래스 - 아로마브로커',
    description: '하루 만에 커피의 모든 것을 배우고 싶은 분들을 위한 원데이 클래스. 대전 아로마브로커에서 경험하세요.',
    url: 'https://aromabroker.com/class/onedayclass',
    type: 'website',
  },
  alternates: {
    canonical: 'https://aromabroker.com/class/onedayclass',
  },
};



export default function BeandeliveryService() {

  return (
    <div className="sm:mt-10">
      <div className={`${dohyun.className}`} >
        <h1 className="text-3xl text-center p-3 sm:mb-5">Oneday Class</h1>
      </div>
      <div className="w-screen sm:flex sm:flex-col sm:justify-center p-3">
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:mb-5">
          <div className="sm:w-1/3">
            <Image
              src={`/oneday1.jpg`}
              width={1280}
              height={1280}
              alt="Picture of the author"
            />
          </div>
          <div className="p-3 sm:w-1/4">
          Oneday 클래스는 커피의 세계를 짧은 시간 안에 넓고 깊게 탐험하는 특별한 여정입니다. 커피는 15세기부터 세계 각지에서 다양한 방식으로 즐겨져 온 음료로, 그 안에는 수많은 문화와 이야기가 녹아 있습니다. 이 클래스에서는 커피의 기초부터 다양한 추출 기법, 원두 선택, 그리고 커피의 맛과 향을 평가하는 방법까지 하루에 경험할 수 있도록 구성되었습니다.
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-center sm:items-center sm:mb-5">
          <div className="p-3 sm:w-1/4">
          커피 초보자부터 애호가까지, 누구나 부담 없이 즐길 수 있는 Oneday 클래스는 커피의 풍미를 짧은 시간 동안 경험하고자 하는 분들을 위해 준비되었습니다.
          </div>
          <div className="sm:w-1/3">
            <Image
              src={`/oneday2.jpg`}
              width={1280}
              height={1280}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:mb-5">
          <div className="sm:w-1/3">
            <Image
              src={`/oneday3.png`}
              width={1280}
              height={1280}
              alt="Picture of the author"
            />
          </div>
          <div className="p-3 sm:w-1/4">
          커피가 단순한 음료를 넘어 일상에 잔잔한 기쁨과 위안을 주는 존재임을 느끼게 될 것입니다. 다양한 커피의 매력을 느끼며 특별한 하루를 만끽하고 싶은 분들께 이 클래스를 추천합니다.
          </div>
        </div>
      </div>
    </div>
  );
}