
import { Posts } from "@/app/types/types";
import GetTable from "@/app/lib/supabase/gettable";

export interface BoardArg {
  params: noticedetails;
  searchParams : noticesearchparams;
}
export interface noticedetails {
  noticedetails: number;
}
export interface noticesearchparams {
  boardtitle : string;
  tablename : string;
}

export default async function NoticeDetails({ params, searchParams }: BoardArg) {
  const boardtitle = searchParams.boardtitle
  const tablename = searchParams.tablename;

  const PostsTable = await GetTable<Posts>(tablename, 'id', params.noticedetails);

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

// export default async function getBeanTable<T>(tablename: string): Promise<T[]> {
//   // supabase 클라이언트를 사용하여 데이터베이스에서 데이터를 가져옵니다.
//   const { data, error } = await supabase
//     .from(tablename) // 테이블 이름은 string 타입
//     .select('*'); // 테이블의 모든 열을 선택합니다.

//   // 데이터베이스에서 데이터를 가져오는 동안 오류가 발생하면 예외를 던집니다.
//   if (error) {
//     throw new Error(error.message);
//   }

//   // 가져온 데이터를 반환합니다.
//   return data as T[];
// }