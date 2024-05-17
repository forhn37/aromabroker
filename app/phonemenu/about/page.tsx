import Link from "next/link";

export default function Mobilemenu() {

  return (
    <div>
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
