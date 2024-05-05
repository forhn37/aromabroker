// TODO : 1. Font select, 2. metadata config

import "@/app/ui/globals.css";
import { Metadata } from "next";
// import { sans } from "@/app/ui/font";
import { roboto } from "@/app/ui/font";
// 예시 파일
export const metadata: Metadata = {
  title: {
    template: '%s | Aromabroker',
    default: 'Aromabroker',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${roboto.className}`}>{children}</body>
    </html>
  );
}

