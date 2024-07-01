import { Posts } from "@/app/types/types";

export interface BoardArticleType {
  post: Posts | null;
}

export default function BoardArticle({ post }: BoardArticleType) {
  if (!post) {
    return <p>No post data available</p>;
  }
  console.log(post)

  return (
    <article className="prose lg:prose-xl">
      <h1 className="text-1xl font-bold mb-4">제목 : {post.title}</h1>
      <p className="text-xs text-gray-500 mb-4">
        작성자: {post.author} | 조회수: {post.views} | 작성일: {new Date(post.created_at).toLocaleString()}
      </p>
      <div className="border-t border-gray-300 mt-4 pt-4">
        <p>{post.content}</p>
      </div>
    </article>
  );
}
