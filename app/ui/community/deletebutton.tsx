'use client'
import { supabase } from "@/app/lib/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export interface DeleteButtonProps {
  tablename: string;
  postindex: number;
  nextrouter: string;
  postdataid: string;
}

export default function DeleteButton({ postindex, tablename, nextrouter, postdataid }: DeleteButtonProps) {
  const [userid, setUserid] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (data?.session?.user?.id) {
        setUserid(data.session.user.id);
      }
    };
    checkSession();
  }, []);

  const isOwner = postdataid && postdataid === userid;

  const handleDelete = async () => {
    if (confirm('정말 삭제하겠습니까?')) {
      const { data, error } = await supabase
        .from(tablename)
        .delete()
        .eq('id', postindex);

      if (error) {
        console.error('Error deleting post:', error);
      } else {
        console.log('Post deleted:', data);
        router.push(`/community/${nextrouter}`);
      }
    }
  };

  return (
    <div>
      {isOwner ? (
        <button onClick={handleDelete} className="outline outline-1 p-1">삭제</button>
      ) : null}
    </div>
  );
}
