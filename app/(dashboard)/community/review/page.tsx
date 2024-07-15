
import Board from "@/app/ui/board";
import { NoticePost } from '@/app/types/types';
import GetTable from "@/app/lib/supabase/gettable";

export default async function Review() {
  const tablename = 'reviewtable';
  const data = await GetTable<NoticePost>(tablename, undefined, undefined, 'created_at', 'desc');

  const posts: NoticePost[] = data;

  return (
    <main>
      <Board boardtitle='REVIEW' tablename={tablename} initialPosts={posts} />
    </main>
  );
}