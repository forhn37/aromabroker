import { supabase } from '@/app/lib/supabase/supabaseClient';

export default async function GetTableAdmin<T>(tablename: string, column: string, value: any): Promise<T[]> {
  const { data, error } = await supabase
    .from(tablename)
    .select('*')
    .eq(column, value);

  if (error) {
    console.error('Error fetching data:', error);
    return [];
  }

  return data as T[];
}
