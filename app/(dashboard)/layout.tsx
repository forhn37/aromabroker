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
      <header className="flex justify-between p-4 sm:p-8">
        <Link href="/">
          <div className="relative w-20 h-14 sm:w-40 sm:h-28">
            <Image 
              src="https://qblzpggxwtpkzdhsxtxh.supabase.co/storage/v1/object/public/aromabrokerbucket/public/mainlogo.png?t=2024-07-23T06%3A54%3A37.900Z"
              alt="logo" 
              fill 
              style={{ objectFit: "contain" }} 
            />
          </div>
        </Link >
        <Nav />
      </header>
      <RecipeProvider>
        {children}
      </RecipeProvider>
      <Footer />
    </>
  );
}
