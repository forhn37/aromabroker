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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam dolor vitae deserunt nemo magnam qui, a aliquam facere, nostrum unde dolorum corrupti modi consectetur maiores ipsa rem quae ipsum!
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-center sm:items-center sm:mb-5">
          <div className="p-3 sm:w-1/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam dolor vitae deserunt nemo magnam qui, a aliquam facere, nostrum unde dolorum corrupti modi consectetur maiores ipsa rem quae ipsum!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam dolor vitae deserunt nemo magnam qui, a aliquam facere, nostrum unde dolorum corrupti modi consectetur maiores ipsa rem quae ipsum!
          </div>
        </div>
      </div>
    </div>
  );
}