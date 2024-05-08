'use client'
import Image from "next/image";
import { useState } from "react";

export default function Imageslide() {
  const imagelist = ['eventimage1', 'eventimage2', 'eventimage3', 'eventimage4', 'eventimage5']
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
      <div className="w-full h-56 flex transition-transform duration-500 relative" style={imageStyle} >
        {imagelist.map((image, index) => (
          <Image
            // fill
            key={index}
            src={`http://localhost:3000/${image}.jpg`}
            width={430}
            height={400}
            // className="object-cover"
            style={{
              width: 'auto',
              height: 'auto',
            }}
            sizes="100vw"
            alt={`Picture ${index}`}
          // className="w-full"

          />
        ))}
      </div>
      <button onClick={leftMove}>이전</button>
      <button onClick={rightMove}>다음</button>
    </>
  );
}
