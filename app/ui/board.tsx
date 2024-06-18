// 'use client';
// import React, { useEffect, useState } from 'react';
// import { supabase } from '@/app/lib/supabase/supabaseClient'

// interface Post {
//   id: number;
//   title: string;
//   content: string;
//   author: string;
//   created_at: string;
//   views: number;
// }

// const PAGE_SIZE = 5;

// const QABoard: React.FC = () => {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);

//       const { data, error, count } = await supabase
//         .from('posts')
//         .select('*', { count: 'exact' })
//         .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1)
//         .order('created_at', { ascending: false });

//       if (error) {
//         console.error(error);
//       } else {
//         setPosts(data);
//         setTotalPages(Math.ceil(count / PAGE_SIZE));
//       }

//       setLoading(false);
//     };

//     fetchPosts();
//   }, [page]);

//   const handlePageChange = (newPage: number) => {
//     if (newPage >= 1 && newPage <= totalPages) {
//       setPage(newPage);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Q&A</h1>
//       <p className="mb-4">궁금한 점이 있으시다면 Q&A 통해 답변을 받아보세요.</p>
//       <div className="border-t border-gray-300 mb-4"></div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         posts.map(post => (
//           <div key={post.id} className="mb-4">
//             <h2 className="font-bold">{post.title}</h2>
//             <p>{post.content}</p>
//             <p className="text-sm text-gray-500">
//               {post.author} | {new Date(post.created_at).toLocaleDateString()} | 조회 {post.views}
//             </p>
//             <div className="border-t border-gray-300 mt-2"></div>
//           </div>
//         ))
//       )}
//       <div className="flex justify-center mt-4">
//         <button
//           className="px-4 py-2 mx-1 bg-gray-300 rounded"
//           onClick={() => handlePageChange(page - 1)}
//           disabled={page === 1}
//         >
//           이전
//         </button>
//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={index}
//             className={`px-4 py-2 mx-1 ${page === index + 1 ? 'bg-black text-white' : 'bg-gray-300'} rounded`}
//             onClick={() => handlePageChange(index + 1)}
//           >
//             {index + 1}
//           </button>
//         ))}
//         <button
//           className="px-4 py-2 mx-1 bg-gray-300 rounded"
//           onClick={() => handlePageChange(page + 1)}
//           disabled={page === totalPages}
//         >
//           다음
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QABoard;
