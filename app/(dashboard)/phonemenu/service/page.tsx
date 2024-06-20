'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import BackButton from "@/app/ui/dashboard/backbutton";


export default function MobilemenuServicePage() {

  return (
    <div>
      <div className="flex justify-end pr-3">
          <BackButton />
        </div>
      <div className="flex justify-end pr-3">
      </div>
      <h1 className="text-3xl m-5">SERVICE</h1>
      <div className="list-none text-2xl m-5">
        <Link href="/service/visitmanagement">
          <li className='mb-3'>방문관리</li>
        </Link>
      </div>
    </div>
  );
} 
