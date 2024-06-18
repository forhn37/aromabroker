
import Card from '@/app/ui/dashboard/card';
import Utubevideo from '@/app/lib/utubevideo';

import MainImageSlide from '@/app/ui/dashboard/mainimageslide';
import GetTable from '@/app/lib/supabase/gettable';
import { Bean, Dripbag } from '@/app/types/types';


export default async function Home() {

  // 해당하는 테이블을 가져옴
  const beansTable = await GetTable<Bean>("beans");
  const dripbagsTable = await GetTable<Dripbag>("dripbags");


  return (
    <div>
      <MainImageSlide />
      <Card category={"Best Beans"} datatables={beansTable} imagename='coffee'/>
      <Utubevideo />
    </div>

  )
}
