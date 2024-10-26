import Image from "next/image";
import { dohyun } from "@/app/ui/font";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '대전 커피 로스팅(Roasting) 클래스 - 아로마브로커',
  description: '커피 로스팅(Roasting)의 모든 것을 배워보세요. 아로마브로커의 로스팅(Roasting) 클래스에서 커피의 본질을 탐구하세요.',
  keywords: '커피, 로스팅, 커피 클래스, 대전 커피, 아로마브로커, roasting, coffee',
  authors: [{ name: 'aromabroker', url: 'https://aromabroker.com' }],
  openGraph: {
    title: '대전 커피 로스팅(Roasting) 클래스 - 아로마브로커',
    description: '대전에서 커피 로스팅(Roasting)의 깊이를 탐구하세요. 아로마브로커의 로스팅 클래스로 커피의 본질을 이해할 수 있습니다.',
    url: 'https://aromabroker.com/class/roasting',
    type: 'website',
  },
  alternates: {
    canonical: 'https://aromabroker.com/class/roasting',
  },
};


export default function BeandeliveryService() {

  return (
    <div className="sm:mt-10">
      <div className={`${dohyun.className}`} >
        <h1 className="text-3xl text-center p-3 sm:mb-5">Roasting</h1>
      </div>
      <div className="w-screen sm:flex sm:flex-col sm:justify-center p-3">
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:mb-5">
          <div className="sm:w-1/3">
            <Image
              src={`/roasting1.jpg`}
              width={1280}
              height={1280}
              alt="Picture of the author"
            />
          </div>
          <div className="p-3 sm:w-1/4">
          Roasting 클래스는 생두를 향기롭고 깊은 맛을 지닌 커피로 완성하는 과정을 배우는 시간입니다. 로스팅은 커피의 향과 맛을 결정하는 중요한 단계로, 그 역사는 커피가 전 세계로 퍼져 나가던 시기부터 시작되었습니다. 커피가 처음 로스팅되던 순간부터 오늘날까지, 바리스타와 로스터들은 온도와 시간을 통해 커피의 무한한 풍미를 끌어내는 기술을 발전시켜 왔습니다.
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-center sm:items-center sm:mb-5">
          <div className="p-3 sm:w-1/4">
          이 클래스에서는 로스팅 기초부터 생두의 선택과 보관, 온도와 시간 조절의 중요성을 배우고, 직접 로스팅을 경험해 봅니다. 라이트부터 다크 로스트까지 다양한 로스팅 레벨을 체험하며 각 레벨이 만들어내는 커피의 개성과 매력을 느낄 수 있습니다. 
          </div>
          <div className="sm:w-1/3">
            <Image
              src={`/roasting2.jpg`}
              width={1280}
              height={1280}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:mb-5">
          <div className="sm:w-1/3">
            <Image
              src={`/roasting3.jpg`}
              width={1280}
              height={1280}
              alt="Picture of the author"
            />
          </div>
          <div className="p-3 sm:w-1/4">
          로스팅된 커피의 맛을 평가하며, 커피의 변화를 이해하는 흥미로운 시간을 제공합니다. 커피 한 알에 담긴 이야기와 노력을 느끼고 싶은 분들에게 추천드립니다.
          </div>
        </div>
      </div>
    </div>
  );
}