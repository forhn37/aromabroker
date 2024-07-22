import BoardArticle from "@/app/ui/community/boardArticle";
import { Posts } from "@/app/types/types";
import GetTable from "@/app/lib/supabase/gettable";
import { NoticePost } from "@/app/types/types";
import DeleteButton from "@/app/ui/community/deletebutton";


export interface BoardArg {
  params: reviewdetails;
  searchParams: reviewsearchparams;
}
export interface reviewdetails {
  reviewdetails: number;
}
export interface reviewsearchparams {
  boardtitle: string;
  tablename: string;
}

export default async function ReviewDetails({ params, searchParams }: BoardArg) {
  const boardtitle = searchParams.boardtitle;
  const tablename = 'reviewtable'

  const postindex = params.reviewdetails;

  const response = await GetTable<NoticePost>(
    tablename,
    "id",
    postindex,
    "created_at",
    "desc"
  );
  const nextrouter = 'review';
  const posts: Posts[] = response;
  const postdata = posts.length > 0 ? posts[0] : null;
  const postdataid = postdata?.user_id || "";

  return (
    <div>
      <main className="max-w-4xl mx-auto p-4 bg-neutral-100 pt-10 pb-10">
        <div className="text-3xl text-center mb-6">{boardtitle}</div>
        <BoardArticle post={postdata} />
      </main>
      <div className="flex w-full justify-center p-2">
        {postdata && <DeleteButton tablename={tablename} postindex={postindex} nextrouter={nextrouter} postdataid={postdataid} />}
      </div>
    </div>
  );
}

