'use client';
import { useRecipeContext } from '@/app/lib/mycontext';
import Image from 'next/image';

export default function RecipeDetails() {
  const { content } = useRecipeContext();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl sm:mb-10 mb-8 text-center py-2">{content.title}</h1>
      <div className='flex flex-col sm:flex-row sm:justify-center'>
        {content.imageurl && (
          <div className="mb-4 sm:max-w-96">
            <Image src={content.imageurl} alt={content.title} width={800} height={600} className="rounded-lg" priority />
          </div>
        )}
        <div className="text-lg leading-relaxed whitespace-pre-wrap sm:ml-10">
          {content.content}
        </div>





      </div>
    </div>
  );
}
