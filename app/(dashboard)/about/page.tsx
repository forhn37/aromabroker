import Brand from '@/app/ui/dashboard/brand';
/**브랜드소개
 * 이미지와 소개글
 * TODO : 이미지 구조짜기 
 */
export const metadata = {
  title: 'aromabroker about page',
  description: 'aromabroker 매장안내 및 브랜드'
}

export default function BrandPage() {

  return (
    <main>
      <Brand />
    </main>
  );
}