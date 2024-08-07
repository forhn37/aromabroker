import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const serviceRoleKey = process.env.NEXT_PUBLIC_SUPABASE_ADMIN_KEY as string;

export const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);
