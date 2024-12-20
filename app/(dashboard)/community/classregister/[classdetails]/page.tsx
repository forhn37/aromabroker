import BoardArticle from "@/app/ui/community/boardArticle";
import { Posts } from "@/app/types/types";
import GetTable from "@/app/lib/supabase/gettable";
import { NoticePost } from "@/app/types/types";
import DeleteButton from "@/app/ui/community/deletebutton";


export interface BoardArg {
  params: classdetails;
  searchParams: classsearchparams;
}
export interface classdetails {
  classdetails: number;
}
export interface classsearchparams {
  boardtitle: string;
  tablename: string;
}

export default async function ClassDetails({ params, searchParams }: BoardArg) {
  const boardtitle = searchParams.boardtitle;
  const tablename = 'classtable'

  const postindex = params.classdetails;

  const response = await GetTable<NoticePost>(
    tablename,
    "id",
    postindex,
    "created_at",
    "desc"
  );
  const nextrouter = 'class';
  const posts: Posts[] = response;
  const postdata = posts.length > 0 ? posts[0] : null;
  const postdataid = postdata?.user_id || "";

  return (
    <div>
      <main className="sm:w-3/5 mx-auto p-4 pt-10 pb-10">
        <div className="text-3xl text-center mb-6">{boardtitle}</div>
        <BoardArticle post={postdata} />
      </main>
      <div className="flex w-full justify-center p-2">
        {postdata && <DeleteButton tablename={tablename} postindex={postindex} nextrouter={nextrouter} postdataid={postdataid} />}
      </div>
    </div>
  );
}

