import { listImages } from "@/app/lib/supabase/listImages";
import { getImageUrl } from "@/app/lib/supabase/getImageUrl";
import Image from "next/image";
export default async function Test() {
  const filePaths = await listImages("beans")
  if (!filePaths) return

  const urls = await Promise.all(filePaths.map(path => getImageUrl(path)))

  const checkedUrls = urls.filter((url): url is string => url !== null)


return (
  <div>
    {checkedUrls.map((url, index) => (
      <Image key={index} src={url} alt={`Image ${index + 1}`} width={400} height={300}/>
    ))}
  </div>
);
}