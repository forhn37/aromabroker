import Image from "next/image";
import { dohyun } from "@/app/ui/font";
import BackButton from "@/app/ui/dashboard/backbutton";
export const revalidate = 10;

export default function VisitmentService() {

  return (
    <div>
      {/* 제목 */}
      <div className={`${dohyun.className}`} >
        <h1 className="text-3xl text-center p-3">방문관리 서비스</h1>
      </div>

      {/* 본문 */}
      <div className="w-full">
        <div>
          <Image
            src={`/eventimage1.jpg`}
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
            src={`/eventimage2.jpg`}
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