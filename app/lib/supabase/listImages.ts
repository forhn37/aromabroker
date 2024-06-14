import { supabase } from './supabaseClient'

export async function listImages(folder: string): Promise<string[] | null> {
  const { data, error } = await supabase
    .storage
    .from('aromabrokerbucket')
    .list(folder, { limit: 100, offset: 0 })

  if (error) {
    console.error('Error listing files:', error)
    return null
  }
  
  const files = data
    .filter(file => file.name !== '.emptyFolderPlaceholder')
    .map(file => `${folder}/${file.name}`)
    console.log(files)
  return files
}