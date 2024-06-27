// app/api/incrementView/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/app/lib/supabase/supabaseClient';
export interface reqs {
  id : number;
  tablename : string;
}

export async function POST(request: Request) {
  const { id, tablename } : reqs = await request.json();

  if (!id || !tablename) {
    return NextResponse.json({ error: 'Missing id or tablename' }, { status: 400 });
  }

  // 프로시저 호출
  const { error } = await supabase.rpc('increment_view_count', { id, tablename });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // 최신 조회수 가져오기
  const { data: currentData, error: currentError } = await supabase
    .from(tablename)
    .select('views')
    .eq('id', id)
    .single();

  if (currentError) {
    return NextResponse.json({ error: currentError.message }, { status: 500 });
  }

  return NextResponse.json({ views: currentData.views }, { status: 200 });
}