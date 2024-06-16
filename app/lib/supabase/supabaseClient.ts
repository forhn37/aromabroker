// utils/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase URL or Key');
  throw new Error('Missing Supabase URL or Key');
}


export const supabase = createClient(supabaseUrl, supabaseKey);

