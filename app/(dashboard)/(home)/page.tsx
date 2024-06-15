
import Card from '@/app/ui/dashboard/card';
import Utubevideo from '@/app/lib/utubevideo';
import { listImages } from '@/app/lib/supabase/listImages';
import { getImageUrl } from '@/app/lib/supabase/getImageUrl';
import MainImageSlide from '@/app/ui/dashboard/mainimageslide';

export default async function Home() {

    const beansImageFilePaths = await listImages("beans")
    console.log(beansImageFilePaths)
    if (!beansImageFilePaths) return


    const urls = await Promise.all(beansImageFilePaths.map(path => getImageUrl(path)))
    console.log(urls)

    const checkedUrls = urls.filter((url): url is string => url !== null)
  

  return (
    <div>
      <MainImageSlide />
      <Card category={"Best Beans"} confirmedurls={checkedUrls} />
      <Utubevideo />
    </div>

  )
}
