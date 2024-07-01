import { NextResponse } from 'next/server';
import GetTable from '@/app/lib/supabase/gettable';
import { NoticePost } from '@/app/types/types';

export async function GET(request: Request) {
  console.log('Request received'); // 추가된 로그
  const { searchParams } = new URL(request.url);
  const postindex = searchParams.get('postindex');
  console.log('hello');

  if (!postindex) {
    console.log('Missing postindex');
    return NextResponse.json({ error: 'Missing postindex' }, { status: 400 });
  }

  try {
    const data = await GetTable<NoticePost>('noticetable', 'id', parseInt(postindex, 10), 'created_at', 'desc');
    console.log('Data fetched successfully');
    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, max-age=0', // 캐시 비활성화
      },
    });
  } catch (error: any) {
    console.log('Error fetching data', error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
