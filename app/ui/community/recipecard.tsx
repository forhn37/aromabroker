'use client';

import { RecipeTable } from '@/app/types/types';
import Image from 'next/image';
import { useRecipeContext, Content } from '@/app/lib/mycontext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RecipeCard({ title, created_at, content, imageurl, description, coffeePublicName }: RecipeTable) {
  const { setContent } = useRecipeContext();
  const router = useRouter();

  const handleClick = () => {
    const recipeContent: Content = { title, content, imageurl };
    setContent(recipeContent);
    router.push(`/community/recipes/${coffeePublicName}`);
 // 상태 업데이트 후 페이지 전환을 트리거
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <Image
        src={imageurl}
        alt="Recipe Image"
        width={400}
        height={300}
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-semibold text-xl mb-2">{title}</div>
        <div className="text-xl mb-2">{description}</div>
        <div className="text-gray-700 text-base py-2 flex justify-between">
          {new Date(created_at).toLocaleDateString()}
          <div onClick={handleClick}>자세히보기</div>
        </div>
      </div>
    </div>
  );
}
