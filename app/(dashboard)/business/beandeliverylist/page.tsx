import Image from "next/image";
import { dohyun } from "@/app/ui/font";

export default function BeandeliveryService() {

  return (
    <div>
      {/* 제목 */}
      <div className={`${dohyun.className}`} >
        <h1 className="text-3xl text-center p-3">원두납품거래처</h1>
      </div>

      {/* 본문 */}
      <div className="w-full">
        <div>
          <Image
            src={`/eventimage3.jpg`}
            width={412}
            height={10}
            alt="Picture of the author"
          />
          <p className="p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam dolor vitae deserunt nemo magnam qui, a aliquam facere, nostrum unde dolorum corrupti modi consectetur maiores ipsa rem quae ipsum!
          </p>
        </div>
        <div>
          <Image
            src={`/eventimage4.jpg`}
            width={412}
            height={10}
            alt="Picture of the author2"
          />
          <p className="p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam dolor vitae deserunt nemo magnam qui, a aliquam facere, nostrum unde dolorum corrupti modi consectetur maiores ipsa rem quae ipsum!
          </p>
        </div>
      </div>
    </div>
  );
}