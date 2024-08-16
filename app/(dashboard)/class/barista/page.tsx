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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam dolor vitae deserunt nemo magnam qui, a aliquam facere, nostrum unde dolorum corrupti modi consectetur maiores ipsa rem quae ipsum!
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-center sm:items-center sm:mb-5">
          <div className="p-3 sm:w-1/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam dolor vitae deserunt nemo magnam qui, a aliquam facere, nostrum unde dolorum corrupti modi consectetur maiores ipsa rem quae ipsum!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque distinctio dicta eaque exercitationem tempore nulla labore molestiae inventore esse facere!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam dolor vitae deserunt nemo magnam qui, a aliquam facere, nostrum unde dolorum corrupti modi consectetur maiores ipsa rem quae ipsum!
          </div>
        </div>
      </div>
    </div>
  );
}