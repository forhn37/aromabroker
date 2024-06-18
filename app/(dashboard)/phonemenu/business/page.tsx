'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function MobilemenuBusinessPage() {
  const router = useRouter();

  return (
    <div>
      <div className="flex justify-end pr-3">
        <button className="block" onClick={router.back}>BACK</button>
      </div>
      <h1 className="text-3xl m-5">BUSINESS</h1>
      <div className="list-none text-2xl m-5">
        <Link href="/business/demonstrationrequest">
          <li className='mb-3'>사업자 방문 시연 요청</li>
        </Link>
        <Link href="/business/beandeliverylist">
          <li className='mb-3'>사업자 원두 납품 리스트</li>
        </Link>
        <Link href="/business/dessertdeliverylist">
          <li className='mb-3'>사업자 디저트 납품 리스트</li>
        </Link>
        <Link href="/business/cunsulting">
          <li className='mb-3'>사업자 컨설팅</li>
        </Link>
      </div>
    </div>
  );
} 
