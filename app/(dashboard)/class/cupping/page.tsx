import Image from "next/image";
import { dohyun } from "@/app/ui/font";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '대전 최고의 커피 커핑(cupping) 클래스 - 아로마브로커',
  description: '커피 애호가들을 위한 커핑(cupping)  클래스. 다양한 원두의 향미를 경험하고 커피의 깊이를 탐구하세요.',
  keywords: '커피, 컵핑, 커피 클래스, 대전 커피, 아로마브로커,cupping',
  authors: [{ name: 'aromabroker', url: 'https://aromabroker.com' }],
  openGraph: {
    title: '대전 최고의 커피 커핑(cupping) 클래스 - 아로마브로커',
    description: '대전에서 최고의 커피 커핑(cupping) 클래스를 만나보세요. 다양한 원두와 함께 커피의 깊이를 탐구할 수 있습니다.',
    url: 'https://aromabroker.com/class/cupping',
    type: 'website',
  },
  alternates: {
    canonical: 'https://aromabroker.com/class/cupping',
  },
};


export default function BeandeliveryService() {

  return (
    <div className="sm:mt-10">
      <div className={`${dohyun.className}`} >
        <h1 className="text-3xl text-center p-3 sm:mb-5">Cupping</h1>
      </div>
      <div className="w-screen sm:flex sm:flex-col sm:justify-center p-3">
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:mb-5">
          <div className="sm:w-1/3">
            <Image
              src={`/cupping1.png`}
              width={1280}
              height={1280}
              alt="Picture of the author"
            />
          </div>
          <div className="p-3 sm:w-1/4">
          Cupping 클래스는 커피의 향과 맛을 깊이 있게 탐구하는 과정으로, 커피의 섬세한 풍미를 평가하는 감각적 경험을 제공합니다. 커피는 수세기 동안 다양한 품종과 가공법에 따라 각기 다른 맛과 향을 지니게 되었으며, 이러한 풍미를 감별하고 평가하는 Cupping은 전 세계 커피 전문가들이 커피 품질을 판단하는 중요한 방법입니다.
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-center sm:items-center sm:mb-5">
          <div className="p-3 sm:w-1/4">
          이 클래스에서는 Cupping의 기초부터 향과 맛을 느끼고 평가하는 방법을 배우며, 다양한 원두를 통해 커피의 개성과 독특함을 경험합니다. 
          </div>
          <div className="sm:w-1/3">
            <Image
              src={`/cupping2.png`}
              width={1280}
              height={1280}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:mb-5">
          <div className="sm:w-1/3">
            <Image
              src={`/cupping3.jpg`}
              width={1280}
              height={1280}
              alt="Picture of the author"
            />
          </div>
          <div className="p-3 sm:w-1/4">
          커피 한 잔을 통해 지구 곳곳에서 온 다양한 원두의 이야기를 만나고, 향미 속에 담긴 자연의 풍미를 체험하는 시간입니다. 커피의 본질을 이해하고, 감각을 통해 커피의 매력을 느끼고자 하는 모든 분들께 추천합니다.
          </div>
        </div>
      </div>
    </div>
  );
}