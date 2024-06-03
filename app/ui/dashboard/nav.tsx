'use client'
// TODO : Link클릭시 조건부로 phonemenu 링크 혹은 홈 링크로 바뀌도록 해놓았으나 mobilemenu에서 홈으로 이동시 두번 클릭해야 바뀜
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-center items-center">
      {isMenuOpen ? (
        <Link href='/' onClick={toggleMenu}>

          <Image src="/hamburgernavbar.png" alt="menu" width={30} height={30} />

        </Link>
      ) : (
        <Link href='/phonemenu' onClick={toggleMenu}>

          <Image src="/hamburgernavbar.png" alt="menu" width={30} height={30} />

        </Link>
      )}
    </div>
  )
}