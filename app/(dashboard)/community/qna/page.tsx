import Board from "@/app/ui/board";
import { NoticePost } from '@/app/types/types';
import GetTable from "@/app/lib/supabase/gettable";

export default async function Qna() {
  const tablename = 'qnatable';
  const data = await GetTable<NoticePost>(tablename, undefined, undefined, 'created_at', 'desc');

  const posts: NoticePost[] = data;

  return (
    <main className="sm:mt-10">
      <Board boardtitle='QnA' tablename={tablename} initialPosts={posts} />
    </main>
  );
}