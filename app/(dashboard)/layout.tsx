
import Image from "next/image";
import "@/app/ui/globals.css"
import Nav from "@/app/ui/dashboard/nav";
import Link from "next/link";
import Footer from "../ui/dashboard/footer";


export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <header className="flex justify-between p-4">
        <Link href="/">
          <Image src="/mainlogo.png" alt="logo" width={55} height={28} />
        </Link>
        <Nav />
      </header>
      {children}
      <Footer />
    </>
  )
}