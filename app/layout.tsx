import Image from "next/image";
import "./globals.css";
import Nav from "./ui/nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <header className="flex h-2/6 justify-between p-4">
          <Image src="/mainlogo.png" alt="logo" width={100} height={50} />
          <Nav />
        </header>
        {children}
        <footer>details</footer>
      </body>
    </html>
  );
}
