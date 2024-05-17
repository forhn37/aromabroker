import Link from "next/link";

export default function Mobilemenu() {

  return (
    <div>
      <div className="list-none text-3xl m-5">
        <Link href="/phonemenu/about">
          <li className='mb-3'>ABOUT</li>
        </Link>
        <li className='mb-3'>CAFEMENU</li>
        <li className='mb-3'>SHOP</li>
        <li className='mb-3'>BUSINESS</li>
        <li className='mb-3'>CLASS</li>
        <li className='mb-3'>COMMUNITY</li>
      </div>
    </div>
  );
} 
