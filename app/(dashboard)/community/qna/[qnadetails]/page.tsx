
import { Posts } from "@/app/types/types";
import GetTable from "@/app/lib/supabase/gettable";

export interface BoardArg {
  params: qnadetails;
  searchParams : qnasearchparams;
}
export interface qnadetails {
  qnadetails: number;
}
export interface qnasearchparams {
  boardtitle : string;
  tablename : string;
}

export default async function QnaDetails({ params, searchParams }: BoardArg) {
  const boardtitle = searchParams.boardtitle
  const tablename = searchParams.tablename;

  const PostsTable = await GetTable<Posts>(tablename, 'id', params.qnadetails);

  // 가져온 데이터를 반환합니다.
  const PostsTabledata = PostsTable[0]
  console.log(PostsTabledata)


  return (
    <main className="max-w-4xl mx-auto p-4 bg-neutral-100 pt-10 pb-10">
      <div className="text-3xl text-center mb-6">{boardtitle}</div>
      <article className="prose lg:prose-xl">
        <h1 className="text-1xl font-bold mb-4">제목 : {PostsTabledata.title}</h1>
        <p className="text-xs text-gray-500 mb-4">
          작성자: {PostsTabledata.author} | 조회수: {PostsTabledata.views} | 작성일: {new Date(PostsTabledata.created_at).toLocaleString()}
        </p>
        <div className="border-t border-gray-300 mt-4 pt-4">
          <p>{PostsTabledata.content}</p>
        </div>
      </article>
    </main>
  );
}
