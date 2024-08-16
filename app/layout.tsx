// TODO : 1. Font select, 2. metadata config
import { SpeedInsights } from "@vercel/speed-insights/next"
import "@/app/ui/globals.css";
import { Metadata } from "next";
// import { sans } from "@/app/ui/font";
import { roboto } from "@/app/ui/font";
import { sans } from "@/app/ui/font";
import SupabaseProvider from "./lib/supabase/supabaseProvider";
// 예시 파일
export const metadata: Metadata = {
  title: '대전 최고의 커피 원두 로스팅 - 아로마브로커(aromabroker)',
  description: '대전에서 커피와 원두 로스팅을 즐기세요. 아로마브로커는 신선한 원두와 고품질의 로스팅을 제공합니다.',
  keywords: '커피, 원두, 로스팅, 대전, 아로마브로커, 신선한 원두, 커피 로스팅, 대전 커피',
  authors: [{ name: 'aromabroker', url: 'https://aromabroker.com' }],
  robots: 'https://aromabroker.com',
  openGraph: {
    title: '대전 최고의 커피 원두 로스팅 - 아로마브로커',
    description: '신선한 원두와 고품질의 로스팅을 경험하세요. 대전에서 최고의 커피를 찾으신다면 아로마브로커를 방문하세요.',
    url: 'https://aromabroker.com',
    type: 'website',
  },
  alternates: {
    canonical: 'https://aromabroker.com',
  },
};


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={roboto.className}>
        <SupabaseProvider>
          {children}
        </SupabaseProvider>
        <SpeedInsights />
      </body>

    </html>
  );
}

