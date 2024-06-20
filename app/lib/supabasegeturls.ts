import { listImages } from "./supabase/listImages";
import { getImageUrl } from "./supabase/getImageUrl";

export default async function SupabaseGetUrls(category: string): Promise<string[]> {
  try {
    const beansImageFilePaths = await listImages(category);

    if (!beansImageFilePaths || beansImageFilePaths.length === 0) {
      console.error("No image file paths found");
      return [];
    }

    const urls = await Promise.all(
      beansImageFilePaths.map(async (path) => {
        const url = await getImageUrl(path);
        if (url === null) {
          console.error(`Failed to get URL for path: ${path}`);
        }
        return url;
      })
    );

    const checkedUrls = urls.filter((url): url is string => url !== null);
    return checkedUrls;
  } catch (error) {
    console.error("Error fetching URLs:", error);
    return [];
  }
}
