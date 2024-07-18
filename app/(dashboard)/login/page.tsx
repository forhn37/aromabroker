'use client';

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase/supabaseClient";
import { Session } from "@supabase/supabase-js";
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkLogin = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error getting session:", error);
      } else {
        setSession(data.session);
      }
    };

    checkLogin();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      if (session) {
        router.push('/'); // 로그인 성공 시 메인 페이지로 리디렉션
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-center text-3xl mb-10">Login</h1>
      {!session ? (
        <Auth
          supabaseClient={supabase}
          providers={['google', 'kakao']}
          appearance={{ theme : ThemeSupa }}
        />
      ) : (
        <div>
          <p>Logged in as {session.user?.email}</p>
        </div>
      )}
    </div>
  );
}
