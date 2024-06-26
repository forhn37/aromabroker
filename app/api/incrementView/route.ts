// app/api/incrementView/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/app/lib/supabase/supabaseClient';

export async function POST(request: Request) {
  const { id, tablename } = await request.json();

  if (!id || !tablename) {
    return NextResponse.json({ error: 'Missing id or tablename' }, { status: 400 });
  }

  // 현재 조회수를 가져옵니다.
  const { data: currentData, error: currentError } = await supabase
    .from(tablename)
    .select('views')
    .eq('id', id)
    .single();

  if (currentError) {
    return NextResponse.json({ error: currentError.message }, { status: 500 });
  }

  const currentViews = currentData.views;

  // 조회수를 1 증가시킵니다.
  const { data, error } = await supabase
    .from(tablename)
    .update({ views: currentViews + 1 })
    .eq('id', id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ views: currentViews + 1 }, { status: 200 });
}
