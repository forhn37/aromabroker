import { listImages } from "./supabase/listImages";
import { getImageUrl } from "./supabase/getImageUrl";



export default async function SupabaseGetUrls(category: string) {
  const beansImageFilePaths = await listImages(category);
  console.log(beansImageFilePaths);
  if (!beansImageFilePaths) return;

  const urls = await Promise.all(
    beansImageFilePaths.map((path) => getImageUrl(path))
  );
  console.log(urls);

  const checkedUrls = urls.filter((url): url is string => url !== null);
  return checkedUrls;
}
