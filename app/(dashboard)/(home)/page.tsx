
import Card from '@/app/ui/dashboard/card';
import Utubevideo from '@/app/lib/utubevideo';

import MainImageSlide from '@/app/ui/dashboard/mainimageslide';
import GetTable from '@/app/lib/supabase/gettable';
import { Bean, Dripbag } from '@/app/types/types';
import SupabaseGetUrls from '@/app/lib/supabasegeturls';



export default async function Home() {

  // 해당하는 테이블을 가져옴
  const beansTable = await GetTable<Bean>("beans");
  const dripbagsTable = await GetTable<Dripbag>("dripbags");
  //이미지 url 가져오기
  const webUrls = await SupabaseGetUrls('mainimage_web');
  const mobileUrls = await SupabaseGetUrls('mainimage_mobile');
  console.log(webUrls)
  console.log(mobileUrls)



  return (
    <div>
      <MainImageSlide webUrls={webUrls} mobileUrls={mobileUrls} />
      <Card category={"Best Beans"} datatables={beansTable} imagename='coffee' />
      <Utubevideo />
    </div>

  )
}
