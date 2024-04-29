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
    <>
      <Link href='/mobilemenu'>
        <Image src="/hamburgernavbar.png" alt="menu" width={30} height={30} />
      </Link>
    </>
  )
}