'use client'

import { useEffect, useState } from "react";
import GetTable from "@/app/lib/supabase/gettable";
import { Posts } from "@/app/types/types";

export interface BoardArticleType {
  tablename: string;
  postindex: number;
}

export default function BoardArticle({ tablename, postindex }: BoardArticleType) {
  const [post, setPost] = useState<Posts | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const PostsTableData = await GetTable<Posts>(tablename, 'id', postindex);
        if (PostsTableData && PostsTableData.length > 0) {
          setPost(PostsTableData[0]);
        } else {
          setError('Post not found');
        }
      } catch (err) {
        setError('Failed to fetch post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [tablename, postindex]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!post) {
    return <p>No post data available</p>;
  }

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
