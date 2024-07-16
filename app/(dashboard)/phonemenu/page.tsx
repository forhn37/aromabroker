import Link from "next/link";
import Signout from "@/app/ui/loginnout/signout";

export default function Mobilemenu() {

  return (
    <div>
      <div className="list-none text-2xl m-5">
        <Link href="/about">
          <li className='mb-3'>ABOUT</li>
        </Link>
        <Link href="/cafemenu">
          <li className='mb-3'>CAFEMENU</li>
        </Link>
        <Link href="/phonemenu/shop">
          <li className='mb-3'>SHOP</li>
        </Link>
        <Link href="/phonemenu/service">
          <li className='mb-3'>SERVICE</li>
        </Link>
        <Link href="/phonemenu/business">
          <li className='mb-3'>BUSINESS</li>
        </Link>
        <Link href="/phonemenu/class">
          <li className='mb-3'>CLASS</li>
        </Link>
        <Link href="/phonemenu/community">
          <li className='mb-3'>COMMUNITY</li>
        </Link>
      </div>
      <div className="list-none text-sm m-5 p-1">
      <Link href="/login">
          <li className='mb-3'>Login</li>
        </Link>
        <Link href="/join">
          <li className='mb-3'>Join</li>
        </Link>
        <Link href="/mypage">
          <li className='mb-3'>My page</li>
        </Link>
        {/* <Signout /> */}
      </div>
    </div>
  );
} 
