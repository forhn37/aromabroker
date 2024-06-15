import Card from "@/app/ui/dashboard/card";
import SupabaseGetUrls from "@/app/lib/supabasegeturls";

export default async function Dripbag() {
  const confirmedurls = await SupabaseGetUrls("dripbag");
  console.log(confirmedurls)


  return (
    <main className="overflow-hidden w-screen">
      <Card category={"Drip Bag"} description={"아로마브로커의 즐거움을 집에서도 느껴보세요"} confirmedurl={confirmedurls}/>
      
    </main>
  );
}