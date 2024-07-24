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
      <header className="fixed top-0 left-0 right-0 flex justify-between p-4 sm:p-6 w-full bg-white shadow-sm z-50">
        <div className="hidden sm:flex sm:justify-start sm:w-1/3 sm:items-center">
          <span className="p-6 text-2xl sm:ml-4">ABOUT</span>
          <span className="p-6 text-2xl">BUSINESS</span>
          <span className="p-6 text-2xl">CAFEMENU</span>
          <span className="p-6 text-2xl">CLASS</span>
          <span className="p-6 text-2xl">COMMUNITY</span>
        </div>
        <div className="flex justify-center sm:w-1/3 sm:h-24">
          <Link href="/">
            <div className="relative w-20 h-14 sm:w-40 sm:h-24">
              <Image
                src="https://qblzpggxwtpkzdhsxtxh.supabase.co/storage/v1/object/public/aromabrokerbucket/public/mainlogo.png?t=2024-07-23T06%3A54%3A37.900Z"
                alt="logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>
        </div>
        {/* Nav는 sm이상일때는 보이지 않습니다. */}
        <Nav />
        <div className="hidden sm:flex sm:justify-end sm:w-1/3 sm:items-center">
          <span className="p-6 text-2xl">MY PAGE</span>
          <span className="p-6 text-2xl">LOGIN</span>
        </div>
      </header>
      <div className="pt-20 sm:pt-32"> {/* 헤더 높이만큼 패딩 추가 */}
        <RecipeProvider>
          {children}
        </RecipeProvider>
        <Footer />
      </div>
    </>
  );
}
