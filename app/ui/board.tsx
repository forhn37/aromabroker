// app/ui/board.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/app/lib/supabase/supabaseClient';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { NoticePost } from '../types/types';

interface BoardProps {
  initialPosts: NoticePost[];
  boardtitle: string;
  tablename: string;
}

const PAGE_SIZE = 5;

export default function Board({ initialPosts, boardtitle, tablename }: BoardProps) {
  const [posts, setPosts] = useState<NoticePost[]>(initialPosts);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(initialPosts.length / PAGE_SIZE));
  const [loading, setLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  const fetchPosts = async (pageNumber = 1) => {
    setLoading(true);
    let query = supabase
      .from(tablename)
      .select('*', { count: 'exact' })
      .range((pageNumber - 1) * PAGE_SIZE, pageNumber * PAGE_SIZE - 1)
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

  useEffect(() => {
    fetchPosts(page);
  }, [page, searchQuery]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    setSearchQuery(searchKeyword);
    setPage(1);
  };

  const handlePostClick = (id: number) => {
    try {
      fetch('/api/incrementView', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, tablename }),
      });

      const searchParams = new URLSearchParams({
        boardtitle,
        tablename,
      });

      // router.push(`${pathname}/${id}?${searchParams.toString()}`);

    } catch (error) {
      console.error('Failed to increment view count', error);
    }
  };

  return (
    <div className="sm:w-3/5 mx-auto p-4">
      <h1 className="text-2xl mb-4 text-center">{boardtitle}</h1>
      <p className="mb-4 text-sm">궁금한 점이 있으시다면 Q&A 통해 답변을 받아보세요.</p>
      <div className="border-t border-gray-300 mb-4"></div>
      {posts.map(post => (
        <div key={post.id} className="mb-4">
          <Link href={`${pathname}/${post.id}?boardtitle=${boardtitle}`} >
            <div onClick={() => handlePostClick(post.id)}>
              <h2 className="font-bold">{post.title}</h2>
              <p className="text-sm text-gray-500">
                {post.author} | {new Date(post.created_at).toLocaleDateString()} | 조회 {post.views}
              </p>
            </div>
          </Link>
          <div className="border-t border-gray-300 mt-2"></div>
        </div>
      ))}
      <form onSubmit={handleSearch} className="mb-4 flex">
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          className="border p-2 flex-grow"
        />
        <button type="submit" className="bg-gray-700 text-white p-2 ml-2 rounded">검색</button>
      </form>
      {/* {tablename !== 'noticetable' ? ( */}
        <div className="mb-4 text-right">
          <Link href={{ pathname: `${pathname}/new`, query: { tablename: tablename } }}>
            <button className="bg-gray-700 text-white p-2 rounded w-full text-sm">글쓰기</button>
          </Link>
        </div>
      {/* ) : <span></span>} */}
      <div className="flex justify-center mt-4">
        <button
          className="px-3 py-1 mx-1"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          &lt;
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className='px-2 py-1'
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-3 py-1 mx-1"
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
