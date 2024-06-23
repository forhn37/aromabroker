'use client'
import GetTable from '@/app/lib/supabase/gettable';
import { RecipeTable } from '@/app/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { useRecipeContext } from '@/app/lib/mycontext';
import { useRouter } from 'next/navigation';

export default function RecipeCard({ title, created_at, content, imageurl, description, coffeePublicName }: RecipeTable) {
  const { setContent } = useRecipeContext();
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault(); // 기본 링크 동작을 막음
    setContent(content);
    router.push(`/community/recipes/${coffeePublicName}`); // 수동으로 페이지 이동
  };

  console.log(content)
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
          <Link href={`/community/recipes/${coffeePublicName}`} passHref>
            <a onClick={handleClick}>자세히보기</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
