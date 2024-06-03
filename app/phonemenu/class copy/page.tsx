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
      <h1 className="text-4xl m-5">COMMUNITY</h1>
      <div className="list-none text-3xl m-5">
        <Link href="/community/notice">
          <li className='mb-3'>공지</li>
        </Link>
        <Link href="/community/recipes">
          <li className='mb-3'>레시피</li>
        </Link>
        <Link href="/community/review">
          <li className='mb-3'>리뷰</li>
        </Link>
        <Link href="/community/qna">
          <li className='mb-3'>Q&A</li>
        </Link>
      </div>
    </div>
  );
} 
