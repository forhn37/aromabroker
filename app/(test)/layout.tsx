
import Image from "next/image";
import "@/app/ui/globals.css"
import Nav from "@/app/ui/dashboard/nav";
import Link from "next/link";
import Footer from "../ui/dashboard/footer";
import { RecipeProvider } from "../lib/mycontext";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <header className="flex justify-between p-4">
        <Nav />
      </header>
        <RecipeProvider>
          {children}
        </RecipeProvider>
      <Footer />
    </>
  )
}