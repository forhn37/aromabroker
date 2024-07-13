// app/api/gettableboard/route.ts
import { NextResponse } from 'next/server';
import GetTable from '@/app/lib/supabase/gettable';
import { NoticePost } from '@/app/types/types';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const tablename = searchParams.get('tablename');

  if (!tablename) {
    return new NextResponse(JSON.stringify({ error: 'Table name is required' }), { status: 400 });
  }

  try {
    const data = await GetTable<NoticePost>(tablename, undefined, undefined, 'created_at', 'desc');
    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0, must-revalidate',
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
