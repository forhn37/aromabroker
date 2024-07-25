import Image from "next/image";
import "@/app/ui/globals.css";
import Nav from "@/app/ui/dashboard/nav";
import Link from "next/link";
import Footer from "../ui/dashboard/footer";
import { RecipeProvider } from "../lib/mycontext";
import LeftTopMenu from "../ui/lefttopmenu";
import RightTopMenu from "../ui/righttopmenu";

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 flex justify-between p-4 sm:p-6 bg-white shadow-sm z-50 sm:w-screen">
        <div className="sm:w-3/5 sm:flex sm:justify-start">
          <div className="flex justify-center sm:px-2 sm:h-24">
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
          <div className="hidden sm:flex sm:justify-between sm:items-center sm:ml-5 sm:w-full">
            <LeftTopMenu />
          </div>
        </div>
        {/* Nav는 sm이상일때는 보이지 않습니다. */}
        <Nav />
        <div className="hidden sm:flex sm:justify-end sm:w-2/5 sm:items-center">
          <RightTopMenu />
        </div>
      </header>
      <div className="pt-20 sm:pt-36"> {/* 헤더 높이만큼 패딩 추가 */}
        <RecipeProvider>
          {children}
        </RecipeProvider>
        <Footer />
      </div>
    </>
  );
}
