
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
      <header className="flex h-2/6 justify-between p-6">
        <Link href="/">
          <Image src="/mainlogo.png" alt="logo" width={90} height={30} />
        </Link>
        <Nav />
      </header>
      {children}
      <Footer />
    </>
  )
}