import BoardArticle from "@/app/ui/community/boardArticle";
import { Posts } from "@/app/types/types";
import GetTable from "@/app/lib/supabase/gettable";
import { NoticePost } from "@/app/types/types";
import DeleteButton from "@/app/ui/community/deletebutton";
import { supabase } from "@/app/lib/supabase/supabaseClient";

export interface BoardArg {
  params: qnadetails;
  searchParams: qnasearchparams;
}

export interface qnadetails {
  qnadetails: number;
}

export interface qnasearchparams {
  boardtitle: string;
  tablename: string;
}

export default async function QnaDetails({ params, searchParams }: BoardArg) {
  const boardtitle = searchParams.boardtitle;
  const tablename = 'qnatable';
  const postindex = params.qnadetails;

  // Get post data
  const response = await GetTable<NoticePost>(
    tablename,
    "id",
    postindex,
    "created_at",
    "desc"
  );

  const nextrouter = 'qna';
  const posts: Posts[] = response;
  const postdata = posts.length > 0 ? posts[0] : null;
  const postdataid = postdata?.user_id || "";

  return (
    <div>
      <main className="sm:w-3/5  mx-auto p-4 pt-10 pb-10">
        <div className="text-3xl text-center mb-6">{boardtitle}</div>
        <BoardArticle post={postdata} />
      </main>
      <div className="flex w-full justify-center p-2">
        {postdata && <DeleteButton tablename={tablename} postindex={postindex} nextrouter={nextrouter} postdataid={postdataid} />}
      </div>
    </div>
  );
}
