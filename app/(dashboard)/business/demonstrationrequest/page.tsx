import Image from "next/image";
import { dohyun } from "@/app/ui/font";

export default function BeandeliveryService() {

  return (
    <div className="sm:mt-10">
      <div className={`${dohyun.className}`} >
        <h1 className="text-3xl text-center p-3 sm:mb-5">사업자방문 시연요청</h1>
      </div>
      <div className="w-screen sm:flex sm:flex-col sm:justify-center p-3">
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:mb-5">
          <div className="sm:w-1/3">
            <Image
              src={`/eventimage2.jpg`}
              width={1280}
              height={1280}
              alt="Picture of the author"
            />
          </div>
          <div className="p-3 sm:w-1/4">
          우리는 고객님이 추구하는 커피의 가치와 감성도 소중히 여기며, 이를 깊이 이해하고자 합니다. 시연 중 고객님만의 커피 취향이나 일상에서의 커피 이야기를 듣는 시간을 통해 함께 나누고 공감하는 기회를 만들고 싶습니다. 이를 통해 고객님의 삶에 자연스럽게 스며들 수 있는 커피 브랜드가 되길 바랍니다.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:mb-5">
          <div className="p-3 sm:w-1/4">
          우리는 커피 한 잔을 만드는 데에도 수많은 이야기와 정성이 담겨 있다고 믿습니다. 방문 시연은 단순히 제품을 보여주는 것을 넘어, 우리가 고객 한 분 한 분에게 전하고 싶은 따뜻한 마음을 직접 체험해보는 시간입니다. 방문하시는 순간부터 커피 한 잔이 완성되기까지, 그 과정 속에서 우리의 철학과 비전을 공유하고 싶습니다.
          </div>
          <div className="sm:w-1/3">
            <Image
              src={`/eventimage1.jpg`}
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