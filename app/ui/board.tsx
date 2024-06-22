'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '@/app/lib/supabase/supabaseClient'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NoticePost } from '../types/types';



interface BoardTitle {
  boardtitle : string;
  tablename : string;
}

const PAGE_SIZE = 5;

export default function Board({boardtitle, tablename} : BoardTitle) {
  const [posts, setPosts] = useState<NoticePost[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();
  console.log(pathname)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
//테이블명 변경
      let query = supabase
        .from(tablename)
        .select('*', { count: 'exact' })
        .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1)
        .order('created_at', { ascending: false });

      if (searchQuery) {
        query = query.ilike('title', `%${searchQuery}%`);
      }

      const { data, error, count } = await query;

      if (error) {
        console.error(error);
      } else {
        setPosts(data);
        if (count) {

          setTotalPages(Math.ceil(count / PAGE_SIZE));
        }
      }

      setLoading(false);
    };

    fetchPosts();
  }, [page, searchQuery]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    setSearchQuery(searchKeyword); // 검색어를 검색 쿼리로 설정하여 useEffect가 실행되게 함
    setPage(1); // 검색 시 페이지를 1로 리셋
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">{boardtitle}</h1>
      <p className="mb-4 text-sm">궁금한 점이 있으시다면 Q&A 통해 답변을 받아보세요.</p>
      <div className="border-t border-gray-300 mb-4"></div>
      <form onSubmit={handleSearch} className="mb-4 flex">
        <input
          type="text"
          placeholder="검색어 입력"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          className="border p-2 flex-grow"
        />
        <button type="submit" className="bg-black text-white p-2 ml-2">검색</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map(post => (
          <div key={post.id} className="mb-4">
            <Link href={{pathname : `${pathname}/${post.id}`, query: { boardtitle: boardtitle, tablename : tablename }}} >
              <h2 className="font-bold">{post.title}</h2>
              {/* <p>{post.content}</p> */}
              <p className="text-sm text-gray-500">
                {post.author} | {new Date(post.created_at).toLocaleDateString()} | 조회 {post.views}
              </p>
            </Link>
            <div className="border-t border-gray-300 mt-2"></div>
          </div>
        ))
      )}
      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 mx-1 bg-gray-300 rounded"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          이전
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-1 ${page === index + 1 ? 'bg-black text-white' : 'bg-gray-300'} rounded`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-4 py-2 mx-1 bg-gray-300 rounded"
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          다음
        </button>
      </div>
    </div>
  );
};
