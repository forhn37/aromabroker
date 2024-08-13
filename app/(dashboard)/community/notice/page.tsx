import NoticeBoard from '@/app/ui/noticeboard';
import { NoticePost } from '@/app/types/types';
import GetTable from "@/app/lib/supabase/gettable";

export default async function Notice() {
  const tablename = 'noticetable';
  const data = await GetTable<NoticePost>(tablename, undefined, undefined, 'created_at', 'desc');

  const posts: NoticePost[] = data;

  return (
    <main className='w-screen'>
      <NoticeBoard boardtitle='NOTICE' tablename={tablename} initialPosts={posts} />
    </main>
  );
}