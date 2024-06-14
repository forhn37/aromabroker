// utils/getImageUrl.ts
import { supabase } from './supabaseClient'

export async function getImageUrl(filePath: string): Promise<string | null> {
  const { data, error } = supabase
    .storage
    .from('aromabrokerbucket')
    .getPublicUrl(filePath)

  if (!data || error) {
    console.error('Error getting public URL:', error)
    return null
  }

  return data.publicUrl
}
