
import BoardArticle from "@/app/ui/community/boardArticle";

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
  const boardtitle = searchParams.boardtitle
  const tablename = searchParams.tablename;
  const postindex = params.noticedetails
  console.log(postindex)

  return (
    <main className="max-w-4xl mx-auto p-4 bg-neutral-100 pt-10 pb-10">
      <div className="text-3xl text-center mb-6">{boardtitle}</div>
      <BoardArticle
        tablename={tablename}
        postindex={postindex} />
    </main>
  );
}
