'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/app/lib/supabase/supabaseClient';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { TableNameType } from '../(dashboard)/community/notice/new/page';

// 동적 import로 ReactQuill 로드
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function NewPost({ tablename }:TableNameType) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from(tablename)
      .insert([{ title, content, author, created_at: new Date(), views: 0 }]);

    if (error) {
      console.error(error);
    } else {
      router.back();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">새 글 작성</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">내용</label>
          <ReactQuill value={content} onChange={setContent} className="border p-2 w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">작성자</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-black text-white p-2">작성</button>
      </form>
    </div>
  );
}
