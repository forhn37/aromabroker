import Image from "next/image";
import { dohyun } from "@/app/ui/font";

export default function BeandeliveryService() {

  return (
    <div className="sm:mt-10">
      <div className={`${dohyun.className}`} >
        <h1 className="text-3xl text-center p-3 sm:mb-5">사업자컨설팅</h1>
      </div>
      <div className="w-screen sm:flex sm:flex-col sm:justify-center p-3">
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:mb-5">
          <div className="sm:w-1/3">
            <Image
              src={`/eventimage3.jpg`}
              width={1280}
              height={1280}
              alt="Picture of the author"
            />
          </div>
          <div className="p-3 sm:w-1/4">
            커피는 단순한 음료가 아닌, 사람들에게 따뜻함과 위안을 주는 경험입니다. 고객이 매장에 들어와 커피를 마시는 순간, 브랜드와 고객이 소통하고 공감하는 연결의 시작이 됩니다. 브랜드는 각자의 독특한 이야기와 철학을 담아 고객에게 단지 제품이 아니라 감성을 전하는 매개체가 되어야 합니다.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:mb-5">
          <div className="p-3 sm:w-1/4">
            매장은 단순한 공간이 아닌, 사람들에게 새로운 기억이 되는 장소입니다. 예쁜 인테리어, 따뜻한 조명, 그리고 아늑한 분위기는 고객들이 일상에서 벗어나 휴식할 수 있는 피난처가 됩니다. 이러한 공간에서 커피를 마시는 경험이 감각적인 추억으로 남을 수 있도록 매 순간을 소중히 준비해야 합니다.
          </div>
          <div className="sm:w-1/3">
            <Image
              src={`/eventimage4.jpg`}
              width={1280}
              height={1280}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
}