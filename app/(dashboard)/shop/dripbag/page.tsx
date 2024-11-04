import Card from "@/app/ui/dashboard/card";
import SupabaseGetUrls from "@/app/lib/supabasegeturls";
import { supabase } from "@/app/lib/supabase/supabaseClient";
import GetTable from '@/app/lib/supabase/gettable';
import { Dripbag } from '@/app/types/types';

export default async function DripbagPage() {
  const confirmedurls = await SupabaseGetUrls("dripbag");
  // 타입 가드를 사용하여 undefined 처리
  const safeConfirmedUrls = confirmedurls ?? []; // undefined인 경우 빈 배열로 대체

  const dripbagsTable = await GetTable<Dripbag>("dripbags");

  return (
    <main className="overflow-hidden w-screen">
      <Card category={"DripBag"} description={"아로마브로커의 즐거움을 집에서도 느껴보세요"} datatables={dripbagsTable} imagename="dripbag" />
    </main>
  );
}