// pages/api/incrementView.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/app/lib/supabase/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, tablename } = req.body;

  if (!id || !tablename) {
    return res.status(400).json({ error: 'Missing id or tablename' });
  }

  const { data, error } = await supabase
    .from(tablename)
    .update({ views: supabase.raw('views + 1') })
    .eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ data });
}
