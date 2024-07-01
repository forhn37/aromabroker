import Board from "@/app/ui/board";
import { NoticePost } from '@/app/types/types';

export default async function Notice() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/gettableboard`, { cache: 'no-store' });
  const posts: NoticePost[] = await response.json();

  return (
    <main>
      <Board boardtitle='NOTICE' tablename='noticetable' initialPosts={posts} />
    </main>
  );
}
