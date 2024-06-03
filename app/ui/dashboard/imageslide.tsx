'use client'
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Imageslide() {
  const imagelist = ['eventimage1', 'eventimage2', 'eventimage3', 'eventimage4', 'eventimage5']

  // const [slideindex, setSlideindex] = useState('0')
  // const interval = setInterval(()=> {
  //   const newindex = setSlideindex(slideindex +1)
  // },5000)

  // useEffect(()=> {
  //   setInterval(()=> {
  //     const newindex = setSlideindex(slideindex +1)
  //   },5000)
  // },[])
  // console.log(slideindex)
  return (
    <div className="flex">
      {imagelist.map((image, index) => (
        <Image
          key={index}
          src={`/${image}.jpg`}
          width={500}
          height={300}
          alt="Picture of the author"
          className="w-full"
        />
      ))}
    </div>
  )
}