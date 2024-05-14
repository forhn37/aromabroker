'use client'
import Image from "next/image";
import { useState } from "react";
import eventimage1 from '@/public/eventimage1.jpg'
import eventimage2 from '@/public/eventimage2.jpg'
import eventimage3 from '@/public/eventimage3.jpg'
import eventimage4 from '@/public/eventimage4.jpg'
import eventimage5 from '@/public/eventimage5.jpg'


export default function Imageslide() {
  const imagelist = [eventimage1, eventimage2, eventimage3, eventimage4, eventimage5]
  const [slideIndex, setSlideIndex] = useState(0);

  const leftMove = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  }

  const rightMove = () => {
    if (slideIndex < imagelist.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  }

  const imageStyle = {
    transform: `translateX(-${slideIndex * 100}%)`
  }


  return (
    <div className="h-full">
      <div style={{...imageStyle, width:'300vw'}} className="flex ">
        <div className="w-screen" >
          <Image
            // fill
            src={eventimage1}
            // width={430}
            // height={600}
            // style={{
            //   width: '100vw',
            //   height: '40vh',
            // }}
            // sizes="100vw"
            
            alt={`Picture ${eventimage1}`}
          />
        </div>
        <div className="w-screen">
          <Image
            // fill
            src={eventimage2}
            // width={430}
            // height={600}

            // style={{
            //   width: '100vw',
            //   height: '40vh',
            // }}
            // sizes="100vw"
            // layout="fill"
            alt={`Picture ${eventimage2}`}
          />
        </div>
      </div>
      <div className="flex justify-between items-center w-screen text-blue-800 h-full">
        <button onClick={leftMove} className="z-10 ">이전</button>
        <button onClick={rightMove} className="z-10">다음</button>
      </div>
    </div>
  );
}
