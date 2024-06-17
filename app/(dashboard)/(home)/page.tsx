
import Card from '@/app/ui/dashboard/card';
import Utubevideo from '@/app/lib/utubevideo';
import { listImages } from '@/app/lib/supabase/listImages';
import { getImageUrl } from '@/app/lib/supabase/getImageUrl';
import MainImageSlide from '@/app/ui/dashboard/mainimageslide';
import GetTable from '@/app/lib/supabase/gettable';
import { Bean, Dripbag } from '@/app/types/types';
import { BeanDatas, DripbagDatas } from '@/app/types/types';


export default async function Home() {

  const beansImageFilePaths = await listImages("beans")
  
  if (!beansImageFilePaths) return


  const urls = await Promise.all(beansImageFilePaths.map(path => getImageUrl(path)))
  

  const checkedUrls = urls.filter((url): url is string => url !== null)

  // 해당하는 테이블을 가져옴
  const beansTable = await GetTable<Bean>("beans");
  const dripbagsTable = await GetTable<Dripbag>("dripbags");


  return (
    <div>
      <MainImageSlide />
      <Card category={"Best Beans"} datatables={beansTable}/>
      <Utubevideo />
    </div>

  )
}
