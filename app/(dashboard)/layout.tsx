import Image from "next/image";
import "../ui/globals.css"
import Nav from "../ui/dashboard/nav";


export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="flex h-2/6 justify-between p-4">
        <Image src="/mainlogo.png" alt="logo" width={100} height={50} />
        <Nav />
      </header>
      {children}
      <footer>details</footer>
    </>
  )
}