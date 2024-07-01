import BoardArticle from "@/app/ui/community/boardArticle";
import { Posts } from "@/app/types/types";

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
  const tablename = searchParams.tablename;
  const postindex = params.noticedetails;
  console.log('hi');

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/boarddetails?postindex=${postindex}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error('Fetch request failed', response.statusText);
      return (
        <main className="max-w-4xl mx-auto p-4 bg-neutral-100 pt-10 pb-10">
          <div className="text-3xl text-center mb-6">{boardtitle}</div>
          <p>Error loading post data.</p>
        </main>
      );
    }

    const posts: Posts[] = await response.json();

    const postdata = posts.length > 0 ? posts[0] : null;

    return (
      <main className="max-w-4xl mx-auto p-4 bg-neutral-100 pt-10 pb-10">
        <div className="text-3xl text-center mb-6">{boardtitle}</div>
        <BoardArticle post={postdata} />
      </main>
    );
  } catch (error) {
    console.error('Fetch error', error);
    return (
      <main className="max-w-4xl mx-auto p-4 bg-neutral-100 pt-10 pb-10">
        <div className="text-3xl text-center mb-6">{boardtitle}</div>
        <p>Error loading post data.</p>
      </main>
    );
  }
}
