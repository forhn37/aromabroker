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
      <h1 className="text-4xl m-5">ABOUT</h1>
      <div className="list-none text-3xl m-5">
        <Link href="/about/brand">
          <li className='mb-3'>아로마브로커</li>
        </Link>
        <Link href="/about/storeinformation">
          <li className='mb-3'>매장안내</li>
        </Link>
      </div>
    </div>
  );
} 
