import Image from "next/image";
import { dohyun } from "@/app/ui/font";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '대전 바리스타(Barista) 클래스 - 아로마브로커',
  description: '커피 바리스타(Barista)로 성장하기 위한 최고의 클래스. 커피 제조 기술을 배우고 향상시켜보세요.',
  keywords: '커피, 바리스타, 커피 클래스, 대전 커피, 아로마브로커, barista, coffee',
  authors: [{ name: 'aromabroker', url: 'https://aromabroker.com' }],
  openGraph: {
    title: '대전 바리스타(Barista) 클래스 - 아로마브로커',
    description: '대전에서 바리스타(Barista)의 기술을 배우고 싶다면 아로마브로커의 바리스타 클래스를 선택하세요.',
    url: 'https://aromabroker.com/class/barista',
    type: 'website',
  },
  alternates: {
    canonical: 'https://aromabroker.com/class/barista',
  },
};


export default function BeandeliveryService() {

  return (
    <div className="sm:mt-10">
      <div className={`${dohyun.className}`} >
        <h1 className="text-3xl text-center p-3 sm:mb-5">Barista</h1>
      </div>
      <div className="w-screen sm:flex sm:flex-col sm:justify-center p-3">
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:mb-5">
          <div className="sm:w-1/3">
            <Image
              src={`/barista1.jpg`}
              width={1280}
              height={1280}
              alt="Picture of the author"
            />
          </div>
          <div className="p-3 sm:w-1/4">
          바리스타 클래스는 단순히 커피 한 잔을 만드는 기술을 배우는 것을 넘어, 커피 한 잔에 담긴 수백 년의 역사와 이야기를 체험하는 시간입니다. 커피는 15세기 아랍에서 시작되어 전 세계로 퍼지며 각국의 문화와 어우러져 왔습니다. 바리스타로서 첫걸음을 내딛는 이 과정에서는 커피의 기원부터 현대의 다양한 추출 방식에 이르기까지, 커피가 가진 깊은 풍미와 감성을 탐구합니다.
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-center sm:items-center sm:mb-5">
          <div className="p-3 sm:w-1/4">
          이 클래스는 커피 원두의 선택에서부터 각종 기구의 사용법, 그라인딩과 추출 기법, 에스프레소 머신의 세밀한 조작, 부드러운 우유 스티밍과 라떼 아트의 섬세한 터치까지 단계별로 안내해 줍니다. 커피의 맛을 이해하고 평가하는 능력을 키우며, 풍부한 향이 가득한 커피 한 잔으로 사람들과 소통하는 법을 배웁니다.
          </div>
          <div className="sm:w-1/3">
            <Image
              src={'/barista2.jpg'}
              width={1280}
              height={1280}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:mb-5">
          <div className="sm:w-1/3">
            <Image
              src={`/barista3.jpg`}
              width={1280}
              height={1280}
              alt="Picture of the author"
            />
          </div>
          <div className="p-3 sm:w-1/4">
          이 시간은 커피가 단순한 음료가 아닌, 순간을 함께 나누고, 감성을 전하는 예술임을 깨닫게 하는 특별한 경험이 될 것입니다. 커피에 대한 진정한 열정과 감동을 느끼고 싶은 분들께 추천합니다.
          </div>
        </div>
      </div>
    </div>
  );
}