'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function MobilemenuShopPage() {
  const router = useRouter();

  return (
    <div>
      <div className="flex justify-end pr-3">
        <button className="block" onClick={router.back}>BACK</button>
      </div>
      <h1 className="text-3xl m-5">SHOP</h1>
      <div className="list-none text-2xl m-5">
        <Link href="/shop/beans">
          <li className='mb-3'>원두</li>
        </Link>
        <Link href="/shop/dripbag">
          <li className='mb-3'>드립백</li>
        </Link>
      </div>
    </div>
  );
} 
