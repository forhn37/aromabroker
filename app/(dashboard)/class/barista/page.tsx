import Image from "next/image";
import { dohyun } from "@/app/ui/font";

export default function Barista() {

  return (
    <div>
      {/* 제목 */}
      <div className={`${dohyun.className}`} >
        <h1 className="text-3xl text-center p-3">바리스타 초급 및 심화</h1>
      </div>

      {/* 본문 */}
      <div className="w-full">
        <div>
          <Image
            src={`/barista1.jpg`}
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
            src={`/barista2.jpg`}
            width={412}
            height={10}
            alt="Picture of the author2"
          />
          <p className="p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam dolor vitae deserunt nemo magnam qui, a aliquam facere, nostrum unde dolorum corrupti modi consectetur maiores ipsa rem quae ipsum!
          </p>
        </div>
        <div>
          <Image
            src={`/barista3.jpg`}
            width={412}
            height={10}
            alt="Picture of the author"
          />
          <p className="p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam dolor vitae deserunt nemo magnam qui, a aliquam facere, nostrum unde dolorum corrupti modi consectetur maiores ipsa rem quae ipsum!
          </p>
        </div>
      </div>
    </div>
  );
}