import { NextResponse } from 'next/server';
import GetTable from '@/app/lib/supabase/gettable';
import { NoticePost } from '@/app/types/types';

export async function GET() {
  try {
    const data = await GetTable<NoticePost>('noticetable', undefined, undefined, 'created_at', 'desc');
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
