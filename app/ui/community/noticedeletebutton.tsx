'use client'
import { supabase } from "@/app/lib/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import GetTableAdmin from "@/app/lib/supabase/gettableadmin";

export interface DeleteButtonProps {
  tablename: string;
  postindex: number;
  nextrouter: string;
  postdataid: string;
}

export default function NoticeDeleteButton({ postindex, tablename, nextrouter, postdataid }: DeleteButtonProps) {
  const [userid, setUserid] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAdmin = async () => {
      const adminUsers = await GetTableAdmin<{ id: string }>('profiles', 'isAdmin', true);
      console.log(adminUsers)
      const adminUserIds = adminUsers.map(user => user.id);
      console.log(adminUserIds)

      const { data, error } = await supabase.auth.getSession();
      const userId = data?.session?.user?.id;

      if (userId && adminUserIds.includes(userId)) {
        setIsAdmin(true);
      }
    };

    checkAdmin();
  }, []);

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
      {isAdmin ? (
        <button onClick={handleDelete} className="outline outline-1 p-1">삭제</button>
      ) : null}
    </div>
  );
}
