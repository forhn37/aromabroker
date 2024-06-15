// utils/getImageUrl.ts
import { supabase } from './supabaseClient'

export async function getImageUrl(filePath: string): Promise<string | null> {
  const { data } = supabase.storage
    .from('aromabrokerbucket')
    .getPublicUrl(filePath)


  return data.publicUrl;
}
