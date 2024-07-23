import Image from "next/image";
import "@/app/ui/globals.css";
import Nav from "@/app/ui/dashboard/nav";
import Link from "next/link";
import Footer from "../ui/dashboard/footer";
import { RecipeProvider } from "../lib/mycontext";

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="flex justify-between p-4 sm:p-8 w-screen">
        <div className="hidden sm:flex sm:justify-around sm:w-1/3 sm:items-center">
          <span className="p-3 text-3xl">about</span>
          <span className="p-3 text-3xl">business</span>
          <span className="p-3 text-3xl">cafemenu</span>
          <span className="p-3 text-3xl">class</span>
          <span className="p-3 text-3xl">community</span>
        </div>
        <div className="relative w-20 h-14 sm:w-1/3 sm:h-28 sm:flex sm:justify-center">
          <Link href="/">
            <Image
              src="https://qblzpggxwtpkzdhsxtxh.supabase.co/storage/v1/object/public/aromabrokerbucket/public/mainlogo.png?t=2024-07-23T06%3A54%3A37.900Z"
              alt="logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </Link >
        </div>
        {/* Nav는 sm이상일때는 보이지 않습니다. */}
        <Nav />
        <div className="hidden sm:flex sm:justify-end sm:w-1/3 sm:items-center">
          <span className="p-3 text-3xl mr-5">Board</span>
          <span className="p-3 text-3xl">Login</span>
        </div>
      </header>
      <RecipeProvider>
        {children}
      </RecipeProvider>
      <Footer />
    </>
  );
}
