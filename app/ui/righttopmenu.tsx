'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/app/lib/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import { Session } from "@supabase/supabase-js";

export default function RightTopMenu() {
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };

    checkSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error);
    } else {
      setSession(null);
      router.push('/'); // 로그아웃 후 메인 페이지로 리디렉션
    }
  };

  return (
    <>
      {!session ? (
        <>
          <Link href="/join">
            <span className="p-6 sm:text-xs md:text-xl">JOIN</span>
          </Link>
          <Link href="/login">
            <span className="p-6 sm:text-xs md:text-xl">LOGIN</span>
          </Link>
        </>
      ) : (
        <>
          <Link href="/mypage">
            <span className="p-6 sm:text-xs md:text-xl">MYPAGE</span>
          </Link>
          <button onClick={handleLogout} className="p-6 text-2xl sm:text-xs md:text-xl">
            LOGOUT
          </button>
        </>
      )}
    </>
  );
}
