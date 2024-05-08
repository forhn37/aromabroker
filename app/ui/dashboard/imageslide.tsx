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
    <>
      <div className='flex' style={imageStyle} >
        <div className="w-full h-1/2">
          <Image
            // fill
            src={eventimage1}
            // width={430}
            height={600}
            // style={{
              //   width: 'auto',
              //   height: 'auto',
              // }}
              // sizes="100vw"
              alt={`Picture ${eventimage1}`}              
              />
              </div>
      </div>
      <button onClick={leftMove}>이전</button>
      <button onClick={rightMove}>다음</button>
    </>
  );
}
