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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam dolor vitae deserunt nemo magnam qui, a aliquam facere, nostrum unde dolorum corrupti modi consectetur maiores ipsa rem quae ipsum!
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-center sm:items-center sm:mb-5">
          <div className="p-3 sm:w-1/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam dolor vitae deserunt nemo magnam qui, a aliquam facere, nostrum unde dolorum corrupti modi consectetur maiores ipsa rem quae ipsum!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam dolor vitae deserunt nemo magnam qui, a aliquam facere, nostrum unde dolorum corrupti modi consectetur maiores ipsa rem quae ipsum!
          </div>
        </div>
      </div>
    </div>
  );
}