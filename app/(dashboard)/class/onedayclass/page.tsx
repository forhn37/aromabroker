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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam dolor vitae deserunt nemo magnam qui, a aliquam facere, nostrum unde dolorum corrupti modi consectetur maiores ipsa rem quae ipsum!
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-center sm:items-center sm:mb-5">
          <div className="p-3 sm:w-1/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam dolor vitae deserunt nemo magnam qui, a aliquam facere, nostrum unde dolorum corrupti modi consectetur maiores ipsa rem quae ipsum!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam dolor vitae deserunt nemo magnam qui, a aliquam facere, nostrum unde dolorum corrupti modi consectetur maiores ipsa rem quae ipsum!
          </div>
        </div>
      </div>
    </div>
  );
}