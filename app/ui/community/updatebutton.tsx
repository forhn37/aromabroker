'use client'
import { supabase } from "@/app/lib/supabase/supabaseClient";
import { useRouter } from "next/navigation";

export interface DeleteButton {
  tablename : string;
  postindex : number;
}
export default function UpdateButton({postindex, tablename} : DeleteButton) {
  const router = useRouter();
  console.log(postindex)
  console.log(tablename)

  const handleUpdate = async () => {
    if (confirm('정말 삭제하겠습니까?')) {
      const { data, error } = await supabase
        .from(tablename)
        .delete()
        .eq('id', postindex);

      if (error) {
        console.error('Error deleting post:', error);
      } else {
        console.log('Post deleted:', data);
        router.push('/community/notice'); // 리스트 페이지로 리디렉션
      }
    }
  };

  return (
    <button onClick={handleUpdate}>수정</button>
  )
}