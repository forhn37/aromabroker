'use client'

import Link from "next/link"
import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase/supabaseClient";
import { Session } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";


export default function Signinnout() {
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkLogin = async () => {
      const { data, error } = await supabase.auth.getSession();

      console.log(data)
      if (error) {
        console.error("Error getting session:", error);
      } else {
        setSession(data.session);
      }
    };

    checkLogin();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error);
    } else {
      setSession(null);
      router.push('/'); 
    }
  };
  return (
    <div className="list-none text-sm m-5 p-1">
      {session ? (
        <>
          <button onClick={handleLogout} className='mb-3'>Log Out</button>
          <Link href="/mypage">
            <li className='mb-3'>My Page</li>
          </Link>
        </>
      ) : (
        <>
          <Link href="/login">
            <li className='mb-3'>Login</li>
          </Link>
          <Link href="/join">
            <li className='mb-3'>Join</li>
          </Link>
        </>
      )}
    </div>
  )
}