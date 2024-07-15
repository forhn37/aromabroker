import Board from "@/app/ui/board";
import { NoticePost } from '@/app/types/types';
import GetTable from "@/app/lib/supabase/gettable";

export default async function Notice() {
  const tablename = 'noticetable';
  const data = await GetTable<NoticePost>(tablename, undefined, undefined, 'created_at', 'desc');

  const posts: NoticePost[] = data;

  return (
    <main>
      <Board boardtitle='NOTICE' tablename={tablename} initialPosts={posts} />
    </main>
  );
}