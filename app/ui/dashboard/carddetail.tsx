import Image from "next/image"
import React from "react";

interface CardDetailProps {
  beanname: string;
  realname: string;
}

const Carddetail: React.FC<CardDetailProps> = ({ beanname, realname }) => {
  return (

    <div style={{ width: '50vw', height: '370px' }} className="bg-orange-100 p-4 m-3">
      <Image src={`/${beanname}.jpg`} width={200} height={200} alt="beans"/>
      <div className="flex flex-col justify-center items-center text-sm mt-5">
        <div className="text-center font-bold mb-3 text-base">{realname}</div>
        <div className="text-center mb-3">우리가 가장 빛난 순간을 표현한 CITY Roasting bean, 사랑하는 사람과 함께 좋은 순간을 나눠보세요</div>
        <div className="text-center">23,000원</div>
      </div>
    </div>

  )

}
export default Carddetail;