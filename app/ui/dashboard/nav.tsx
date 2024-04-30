'use client'
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
        <Link href='/mobilemenu' onClick={toggleMenu}>

          <Image src="/hamburgernavbar.png" alt="menu" width={30} height={30} />

        </Link>
      )}
    </div>
  )
}