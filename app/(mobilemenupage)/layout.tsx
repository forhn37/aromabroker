import Image from "next/image";
import "@/app/ui/globals.css"
import Nav from "@/app/ui/dashboard/nav";
import mainlogo from '@/public/mainlogo.png'
// mainlogo = localimage usage(in public)


export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="flex h-2/6 justify-between p-6">
        <div>
          <Image src={mainlogo} alt="logo" width={100} height={50} />
        </div>
        <div className="flex justify-center items-center">
          <Nav />
        </div>
      </header>
      {children}
      <footer>details</footer>
    </>
  )
}