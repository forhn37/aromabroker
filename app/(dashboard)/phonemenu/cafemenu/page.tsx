'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import BackButton from "@/app/ui/dashboard/backbutton";


export default function MobilemenuClassPage() {
  const router = useRouter();

  return (
    <div>
      <div className="flex justify-end pr-3">
      <BackButton />
      </div>
      <h1 className="text-3xl m-5">CAFEMENU</h1>
      <div className="list-none text-2xl m-5">
        <Link href="/cafemenu/coffee">
          <li className='mb-3'>COFFEE</li>
        </Link>
        <Link href="/cafemenu/dessert">
          <li className='mb-3'>DESSERT</li>
        </Link>
      </div>
    </div>
  );
} 
