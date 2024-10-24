'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import BackButton from "@/app/ui/dashboard/backbutton";


export default function MobilemenuCommunityPage() {

  return (
    <div>
      <div className="flex justify-end pr-3">
        <BackButton />
      </div>
      <div className="flex justify-end pr-3">
      </div>
      <h1 className="text-3xl m-5">COMMUNITY</h1>
      <div className="list-none text-2xl m-5">
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
        <Link href="/community/classregister">
          <li className='mb-3'>클래스신청</li>
        </Link>
      </div>
    </div>
  );
} 
