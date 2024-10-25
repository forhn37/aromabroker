
import Card from "@/app/ui/dashboard/card";
import SupabaseGetUrls from "@/app/lib/supabasegeturls";
import GetTable from '@/app/lib/supabase/gettable';
import { Bean } from "@/app/types/types";


export default async function BeansPage() {
  const confirmedurls = await SupabaseGetUrls("beans");
  // 타입 가드를 사용하여 undefined 처리
  const safeConfirmedUrls = confirmedurls ?? []; // undefined인 경우 빈 배열로 대체
  const beansTable = await GetTable<Bean>("beans");
  
  return (
    <main className="overflow-hidden w-screen">
      <Card category={"Aromabroker Signiture Beans"} description={"아로마브로커만의 특유한 풍미가 담겨있는 시그니처 원두"} datatables={beansTable} imagename="coffee"/>

    </main>
  );
}