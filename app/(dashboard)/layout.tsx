
import Image from "next/image";
import "@/app/ui/globals.css"
import Nav from "@/app/ui/dashboard/nav";
import Link from "next/link";


export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <header className="flex h-2/6 justify-between p-6">
        <Link href="/">
          <Image src="/mainlogo.png" alt="logo" width={100} height={50} />
        </Link>
        <Nav />
      </header>
      {children}
      <footer>푸터 수정사항 적용중</footer>
    </>
  )
}