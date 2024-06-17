'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function MobilemenuServicePage() {
  const router = useRouter();

  return (
    <div>
      <div className="flex justify-end pr-3">
        <button className="block" onClick={router.back}>BACK</button>
      </div>
      <h1 className="text-4xl m-5">SERVICE</h1>
      <div className="list-none text-3xl m-5">
        <Link href="/service/visitmanagement">
          <li className='mb-3'>방문관리</li>
        </Link>
      </div>
    </div>
  );
} 
