import Board from "@/app/ui/board";
import { NoticePost } from '@/app/types/types';

export default async function Review() {
  const tablename = 'reviewtable';
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/gettableboard?tablename=${tablename}`);
  const posts: NoticePost[] = await response.json();

  return (
    <main>
      <Board boardtitle='REVIEW' tablename={tablename} initialPosts={posts} />
    </main>
  );
}