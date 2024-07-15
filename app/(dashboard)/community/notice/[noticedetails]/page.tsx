import BoardArticle from "@/app/ui/community/boardArticle";
import { Posts } from "@/app/types/types";
import GetTable from "@/app/lib/supabase/gettable";
import { NoticePost } from "@/app/types/types";

export interface BoardArg {
  params: noticedetails;
  searchParams: noticesearchparams;
}
export interface noticedetails {
  noticedetails: number;
}
export interface noticesearchparams {
  boardtitle: string;
  tablename: string;
}

export default async function NoticeDetails({ params, searchParams }: BoardArg) {
  const boardtitle = searchParams.boardtitle;
  const tablename = 'noticetable'

  const postindex = params.noticedetails;

  const response = await GetTable<NoticePost>(
    tablename,
    "id",
    postindex,
    "created_at",
    "desc"
  );

  const posts: Posts[] = response

  const postdata = posts.length > 0 ? posts[0] : null;

  return (
    <div>
      <main className="max-w-4xl mx-auto p-4 bg-neutral-100 pt-10 pb-10">
        <div className="text-3xl text-center mb-6">{boardtitle}</div>
        <BoardArticle post={postdata} />
      </main>
      <div className="flex w-full justify-center p-2">
        <div className="p-1 outline outline-1 mr-2">수정</div>
        <div className="p-1 outline outline-1">삭제</div>
      </div>
    </div>
  );
}
