'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Mobilemenu() {
  const router = useRouter();

  return (
    <div>
      <div className="flex justify-end pr-3">
        <button className="block" onClick={router.back}>BACK</button>
      </div>
      <h1 className="text-4xl m-5">CLASS</h1>
      <div className="list-none text-3xl m-5">
        <Link href="/class/barista">
          <li className='mb-3'>바리스타 초급 및 심화</li>
        </Link>
        <Link href="/class/roasting">
          <li className='mb-3'>로스팅 초급 및 심화</li>
        </Link>
        <Link href="/class/cupping">
          <li className='mb-3'>커핑 초급 및 심화</li>
        </Link>
        <Link href="/class/onedayclass">
          <li className='mb-3'>원데이 클래스 초급 및 심화</li>
        </Link>
      </div>
    </div>
  );
} 
